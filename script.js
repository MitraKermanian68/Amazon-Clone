const imgs = document.querySelectorAll('.header-slider ul img');
// const proImgs = document.querySelectorAll('.product-slider img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next'); 
// const prevpro_btn = document.querySelector('.controlpro_prev');
// const nextpro_btn = document.querySelector('.controlpro_next'); 

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();  
})

next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})
// box-2 scrollContainer
const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
// let m = 0;

// function changeproSlide() {
//     for (let i = 0; i < imgs.length; i++) {
//         imgs[i].style.display = 'none';
//     }
//     imgs[m].style.display = 'block';
// }
// changeproSlide();

// prevpro_btn.addEventListener('click', (e) => {
//     if (m > 0) {
//         m--;
//     } else {
//         m = imgs.length - 1;
//     }
//     changeproSlide();
// })

// nextpro_btn.addEventListener('click', (e) => {
//     if (m < imgs.length - 1) {
//         m++;
//     } else {
//         m = 0;
//     }
//     changeproSlide();
// })

