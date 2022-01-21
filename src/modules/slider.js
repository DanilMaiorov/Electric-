export const slider = () => {

    const sliderContainer = document.querySelector('.top-slider')
    let slides = document.querySelectorAll('.item')
    let width = window.getComputedStyle(sliderContainer).width
    const interval = 3000
    let slideId
    let index = 1

    sliderContainer.style.display = 'inline-flex'
    slides.forEach(slide => {
        slide.style.width = width
        slide.style.height = '600px'
    })
    const firstClone = slides[0].cloneNode(true) //создадим клонов первого и последнего слайдов со всеми свойствами
    const lastClone = slides[slides.length - 1].cloneNode(true)

    firstClone.id = 'first-clone' //дадим id клонам
    lastClone.id = 'last-clone'
    sliderContainer.append(firstClone)
    sliderContainer.prepend(lastClone)

    const slideWidth = slides[index].clientWidth
    sliderContainer.style.transform = `translateX(${-slideWidth * index}px)`
    const startSlide = () => {
        slideId = setInterval(() => {
            index++
            sliderContainer.style.transform = `translateX(${-slideWidth * index}px)`
            sliderContainer.style.transition = '0.7s'
        }, interval)
        }
        sliderContainer.addEventListener('transitionend', () => {
            slides = document.querySelectorAll('.item')
            if(slides[index].id === firstClone.id) {
                sliderContainer.style.transition = 'none'
                index = 1
                sliderContainer.style.transform = `translateX(${-slideWidth * index}px)`
            }
        })

        startSlide()
        window.addEventListener('resize', startSlide)
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideId)
        })
        sliderContainer.addEventListener('mouseleave',startSlide)

        
        
    const push = document.querySelector('.push100')
    push.style.height = '100px'
    push.style.marginTop = '-5px'


}