import { animate } from './helpers';

export const menu = () => {
    const header = document.querySelector('.header')
    const menuItems = header.querySelectorAll('.header ul > li > a')
    
    const arrowUp = document.querySelector('.up')
    const logoLeft = document.querySelector('.logo')
    const arrayUp = []
    arrayUp.push(arrowUp, logoLeft)

    header.addEventListener('click', (e) => {
        menuItems.forEach(item => {
            if (item === e.target) {
                e.preventDefault()
                let idAnchor = item.getAttribute('href')
                document.querySelector(idAnchor).scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                })
            }
        })
    })

    if (scrollY > 600) {
        arrowUp.style.opacity = '1';
        arrowUp.style.zIndex = '999';
    } else {
        arrowUp.style.opacity = '0' ;
        arrowUp.style.zIndex = '-999'; 
    }
    window.addEventListener('scroll', () => {
          if (scrollY >= 600) {
            arrowUp.style.zIndex = '999';
            arrowUp.style.opacity = '1';
            arrowUp.style.transition = '0.6s opacity'
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.opacity = '0'; 
            arrowUp.style.transition = '.6s all';
            arrowUp.style.zIndex = '-1';
        }  
    })
    arrayUp.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            animate({
                duration: 1000,
                timing(timeFraction) {
                return timeFraction;
                },
                draw(progress) {
                    window.scrollBy(0, -500 * progress)
                }
            })
        })
    })
}