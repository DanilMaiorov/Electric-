import { animate } from './helpers'

export const slider = () => {

    const sliderContainer = document.querySelector('.top-slider')
    let slides = document.querySelectorAll('.item')
    const width = sliderContainer.style.width

    const interval = 3000
    let clearInterval
    let currentSlide = 0

    window.addEventListener('resize', () => {
        slides.forEach(slide => {
            slide.style.width = width
        })
    })
    const prevSlide = (elems, index, strClass) => {
        elems[index].style.display = strClass
    };
    const nextSlide = (elems, index, strClass) => { 
        elems[index].style.display = strClass
        animate({
            duration: 600,
            timing(timeFraction) {
            return timeFraction
            },
            draw(progress) {
                elems[index].style.opacity = 0 + progress
            } 
        })
    };
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'none');
        currentSlide++
        if(currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, 'block');
    };
    const startSlide = () => {
        clearInterval = setInterval(autoSlide, interval)
    }
    startSlide()
}