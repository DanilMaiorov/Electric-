import { animate } from './helpers'

export const sendForm = () => {

    const form = document.querySelector('form')
    const statusBlock = document.createElement('div') 
    const loadText = 'Идёт отправка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с вами свяжется'
    const nameInput = document.querySelector('.form-control')
    const phoneInput = document.querySelector('.tel')

    statusBlock.style.fontFamily = 'Helios'
    statusBlock.style.fontWeight = 'bold'
    statusBlock.style.fontSize = '16px'
    statusBlock.style.textAlign = 'center'

    nameInput.addEventListener('input', (e) => {
        if(/^[а-яёА-ЯЁ]+/gi.test(e.target.value)) {
            nameInput.value = e.target.value
        } 
            nameInput.value = e.target.value.replace(/^[^а-яёА-ЯЁ]+/gi, '').replace(/[^а-яёА-ЯЁ]+/gi, '').replace(/[^а-яёА-ЯЁ]+$/gi, '')
    })
    phoneInput.addEventListener('input', (e) => {
        if(/[\d]{\+}/g.test(e.target.value)) {
            phoneInput.value = e.target.value
        } 
            phoneInput.value = e.target.value.replace(/[^\d+]+/g, '').replace(/\++/g, '+')
    }) 
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then( res => res.json())
    }
    const validate = (list) => {
        let success = true 
        let successName = false
        let successPhone = false

        list.forEach(input => {
            if(input.closest('[name=fio]')) {
                successName = /^[а-яёА-ЯЁ]{2,}$/i.test(input.value)
            }
            if(input.closest('[name=tel]')) {
                successPhone = /^[+]?[0-9]{6,16}$/.test(input.value)
            }    
            })
        if (successName && successPhone){
            success = true
        } else {
            success = false
        }
        return success
    }
    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        animate({
            duration: 300,
            timing(timeFraction) {
            return timeFraction
            },
            draw(progress) {
                statusBlock.style.fontSize = 16 * progress + 'px'
            } 
        })
        statusBlock.style.color = '#556957'
        form.append(statusBlock)
        formData.forEach((value, key) => {
            formBody[key] = value
        })
        if(validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText
                statusBlock.style.color = '#2bad6f'
                setTimeout(() =>
                animate({
                    duration: 500,
                    timing(timeFraction) {
                    return timeFraction
                    },
                    draw(progress) {
                        statusBlock.style.fontSize = 16 - 16 * progress + 'px'
                    } 
                }), 1500)
                
                formElements.forEach(input => {
                    input.value = ''
                    if(input.closest('[type=submit]')) {
                    let btnInput = input.closest('[type=submit]')
                    btnInput.value = 'Отправить'
                    }   
                })
            })
            .catch (error => {
                statusBlock.style.color = '#ed4e4e'
                statusBlock.textContent = errorText
            })  
        } else {
            alert ('Данные не валидные')
            statusBlock.style.color = '#ed4e4e'
            statusBlock.textContent = 'Заполните, пожалуйста, все поля'
            animate({
                duration: 300,
                timing(timeFraction) {
                return timeFraction
                },
                draw(progress) {
                    statusBlock.style.fontSize = 16 * progress + 'px'
                } 
            })
        }
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitForm()
    })
}



