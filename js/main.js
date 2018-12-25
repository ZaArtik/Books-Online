//
//     var homeSlider = {
//     slider: document.querySelector('.slider__list'),
//     sliderViewport: document.querySelector('.slider__viewport'),
//     sliderItem: document.querySelectorAll('.slider__item'),
//     sliderNextBtn: document.querySelector('.slider__control-btn--next'),
//     sliderPrevBtn: document.querySelector('.slider__control-btn--prev'),
//     sliderCurrent: 1,
//     mainWidth: 0,
//
//     nextSlide: function() {
//         if (homeSlider.sliderCurrent >= homeSlider.sliderItem.length) {
//             homeSlider.slider.style.transform = "translateX(0px)";
//             homeSlider.sliderCurrent = 1;
//             homeSlider.mainWidth = 0;
//         } else {
//             homeSlider.mainWidth -= sliderItemWidth;
//             homeSlider.slider.style.transform = "translateX(" + homeSlider.mainWidth + "px)";
//             homeSlider.sliderCurrent++;
//         }
//     },
//
//     prevSlide: function() {
//         if (homeSlider.sliderCurrent <= 1) {
//             homeSlider.sliderWidth = sliderItemWidth * (homeSlider.sliderItem.length-1);
//             homeSlider.mainWidth -= sliderItemWidth;
//             homeSlider.slider.style.transform = "translateX(" + homeSlider.mainWidth + "px)";
//             homeSlider.sliderCurrent = homeSlider.sliderItem.length;
//         } else {
//             homeSlider.mainWidth += sliderItemWidth;
//             homeSlider.slider.style.transform = "translateX(" + homeSlider.mainWidth + "px)";
//             homeSlider.sliderCurrent--;
//         }
//     },
// };
//
// var sliderItemWidth = homeSlider.sliderItem[0].getBoundingClientRect().width;
//
// homeSlider.sliderNextBtn.addEventListener('click', homeSlider.nextSlide());
// homeSlider.sliderPrevBtn.addEventListener('click', homeSlider.prevSlide());
//
// console.log(sliderItemWidth);

var slider = document.querySelector('.slider__list');
var sliderViewport = document.querySelector('.slider__viewport');
var sliderItem = document.querySelectorAll('.slider__item');
var sliderNextBtn = document.querySelector('.slider__control-btn--next');
var sliderPrevBtn = document.querySelector('.slider__control-btn--prev');
var sliderItemWidth = sliderItem[0].getBoundingClientRect().width;
var sliderCurrent = 1;
var mainWidth = 0;

function nextSlide() {
    if (sliderCurrent >= sliderItem.length) {
            slider.style.transform = "translateX(0px)";
            sliderCurrent = 1;
            mainWidth = 0;
        } else {
            mainWidth -= sliderItemWidth;
            slider.style.transform = "translateX(" + mainWidth + "px)";
            sliderCurrent++;
        }
};

function prevSlide() {
    if (sliderCurrent <= 1) {
        var sliderWidth = sliderItemWidth * (sliderItem.length-1);
        mainWidth -= sliderWidth;
        slider.style.transform = "translateX(" + mainWidth + "px)";
        sliderCurrent = sliderItem.length;
    } else {
        mainWidth += sliderItemWidth;
        slider.style.transform = "translateX(" + mainWidth + "px)";
        sliderCurrent--;
    }
};

sliderNextBtn.addEventListener('click', nextSlide);
sliderPrevBtn.addEventListener('click', prevSlide);

var sliderInterval = setInterval(nextSlide, 2000);

sliderViewport.addEventListener('mouseenter', function() {
    clearInterval(sliderInterval);
});


sliderViewport.addEventListener('mouseleave', function() {
    sliderInterval = setInterval(nextSlide, 2000);
});






