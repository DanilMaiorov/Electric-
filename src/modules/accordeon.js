import { animate } from './helpers';
export const accordeon = () => {
    const acc = document.querySelector('.accordeon')
    const accordeonItemActive = document.querySelectorAll('.accordeon .element')
    const textContent = document.querySelectorAll('.accordeon .element-content')
    accordeonItemActive.forEach(item => {
        item.classList.remove('active')
    })
    acc.addEventListener('click', (e) => {
        if(e.target.closest('.element')) {
            const accItem = e.target.closest('.element')
            accordeonItemActive.forEach((item, index) => {
                if(item === accItem && !textContent[index].style.display) {
                    item.classList.add('active')
                } else {
                    item.classList.remove('active')
                }
            })
        }
        if(e.target.closest('.title')) {
            const textItem = e.target.closest('.title')
            let content = textItem.nextElementSibling
            console.log(content);
            if(content.style.display) {
                textContent.forEach((item) => {
                    item.style.display = null
                })
            } else {
                textContent.forEach((item) => {
                    item.style.display = null
                })
                    content.style.height = '0'; 
                    content.style.paddingTop = '0px';
                    content.style.paddingBottom = '0px';
                        content.style.overflow = 'hidden'
                        content.style.display = 'block';
                        setTimeout(() => {
                            content.style.height = '124px'; 
                            content.style.transition = '0.6s all ease-out';
                            content.style.padding = '20px';
                        }, 1); 
            }
        }
    })
}

/*  const accordionBlock = document.querySelector('.accordeon')
const accordionElements = document.querySelectorAll('.accordeon > .element')
accordionBlock.addEventListener('click', (e) => {
    accordionElements.forEach(element => {
        if (element == e.target.closest('.element') && !element.classList.contains('active')) {
            element.classList.toggle('active')
            element.children[1].style.display = 'block'
        } else {
            element.classList.remove('active')
            element.children[1].style.display = 'none'
        }
    });
})  */