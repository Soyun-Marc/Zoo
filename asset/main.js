const leftButton = document.getElementsByClassName('arrow-left');
const rightButton = document.getElementsByClassName('arrow-right');
const listSlides = document.getElementsByClassName('slide');
const slides = document.querySelector('.slides');
let nbSlides = listSlides.length;
let activeSlide = 0;

function setMarge(button, max, step, frame){
    if(button == 'left'){
        activeSlide--;
        activeSlide = activeSlide < 0 ? 0 : activeSlide;
    } else {
        activeSlide++;
        activeSlide =  activeSlide > max - 1 ? max - 1 : activeSlide;
    }

    let margeLeft = step * activeSlide;
    frame.style.marginLeft = -margeLeft + 'px';
}

leftButton[0].addEventListener('click', function(){
    setMarge('left', nbSlides, 500, slides);
});

rightButton[0].addEventListener('click', function(){
    setMarge('right', nbSlides, 500, slides);
});