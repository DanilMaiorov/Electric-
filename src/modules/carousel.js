export const carousel = () => {

    const slides = document.querySelectorAll('.col-md-4')
    const prev = document.querySelector('.arrow-left') 
    const next = document.querySelector('.arrow-right')
    const slidesWrapper = document.querySelector('.services-elements')
    const slidesField = document.querySelector('.services-carousel')
    const width = window.getComputedStyle(slidesWrapper).width
    let offset = 0

    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'inline-flex'
    slidesField.style.transition = '0.5s all'
    slidesWrapper.style.overflow = 'hidden'

    slides.forEach(slide => {
        slide.style.width = 1180 / 3 + 'px'
    })
    prev.addEventListener('click', () => {
        if(offset <= 0 ){
            offset = +width.slice(0, width.length - 2) / 3 * (slides.length - 3)  
        } else {
            offset -= +width.slice(0, width.length - 2) / 3
        }
        slidesField.style.transform = `translateX(-${offset}px)`
    }) 

    next.addEventListener('click', () => {
        if(offset === +width.slice(0, width.length - 2) / 3 * (slides.length - 3)) {
            offset = 0
        } else {
            offset += +width.slice(0, width.length - 2) / 3
        }
        slidesField.style.transform = `translateX(-${offset}px)`
    })

  /*   const slides = document.querySelectorAll('.col-md-4') //сами блоки
    const prev = document.querySelector('.arrow-left') 
    const next = document.querySelector('.arrow-right')
    const slidesWrapper = document.querySelector('.services-elements')
    const slidesField = document.querySelector('.services-carousel')
    const width = window.getComputedStyle(slidesWrapper).width

    let offset = 0

    const p = document.querySelector('.part-1')
    p.style.display = 'inline-flex'
    const p2 = document.querySelector('.part-2')
    p2.style.display = 'inline-flex'
    const parts = [p, p2]

    slidesField.style.width = 100 * parts.length + '%'
    slidesField.style.display = 'inline-flex'
    slidesField.style.transition = '0.5s all'
    slidesWrapper.style.overflow = 'hidden'

    parts.forEach(part => {
       part.style.width = width
    })
    next.addEventListener('click', () => {
        if(offset == +width.slice(0, width.length - 2) * (parts.length - 1)) {
            offset = 0
        } else {
            offset += +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`
    })
    prev.addEventListener('click', () => {
        if(offset == 0){
            offset = +width.slice(0, width.length - 2) * (parts.length - 1)  
        } else {
            offset -= +width.slice(0, width.length - 2)
        }
        slidesField.style.transform = `translateX(-${offset}px)`
    })  */  
}
