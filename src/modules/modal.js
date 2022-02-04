import { animate } from './helpers';

export const modal = () => {

    const callbackBtn = document.querySelector('.fancyboxModal.hidden-xs')
    const serviceBtn = document.querySelector('.button-services')
    const sliderBtn = Array.from(document.querySelectorAll('.absolute'))
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')   
    const arrayBtn = [...sliderBtn, serviceBtn, callbackBtn]
    const arrayModal = [modal, modalOverlay]

    arrayBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            animate({
                duration: 300,
                timing(timeFraction) {
                return timeFraction;
                },
                draw(progress) {
                    modal.style.display = 'block'
                    modal.style.opacity = progress; 
                    modalOverlay.style.display = 'block'
                    modalOverlay.style.opacity = progress;
                }
            });
        })
    })
    
    arrayModal.forEach(item => 
        item.addEventListener('click', (e) => {
        if(!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {
            animate({
                duration: 300,
                timing(timeFraction) {
                return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = 1 - progress; 
                    modalOverlay.style.opacity = 1 - progress; 
                    setTimeout(() => {
                        modal.style.display = 'none';
                        modalOverlay.style.display = 'none'
                    }, 300);
                } 
            })
        }
    })) 
}


