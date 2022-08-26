/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_menuScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuScroll */ \"./modules/menuScroll.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n\r\n\r\n\r\n\r\n//import { swiper } from './modules/swiper';\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)()\r\n;(0,_modules_menuScroll__WEBPACK_IMPORTED_MODULE_1__.menu)()\r\n;(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_2__.accordeon)()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)()\r\n//swiper() // НЕПОНЯТНО РАБОТАЕТ!!!\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.slider)()\r\n;(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_5__.carousel)()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordeon\": () => (/* binding */ accordeon)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst accordeon = () => {\r\n\r\n    const acc = document.querySelector('.accordeon')\r\n    const accordeonItemActive = document.querySelectorAll('.accordeon .element')\r\n    const textContent = document.querySelectorAll('.accordeon .element-content')\r\n\r\n    accordeonItemActive.forEach(item => {\r\n        item.classList.remove('active')\r\n    })\r\n    acc.addEventListener('click', (e) => {\r\n        if(e.target.closest('.element')) {\r\n            const accItem = e.target.closest('.element')\r\n            accordeonItemActive.forEach((item, index) => {\r\n                if(item === accItem && !textContent[index].style.display) {\r\n                    item.classList.add('active')\r\n                } else {\r\n                    item.classList.remove('active')\r\n                }\r\n            })\r\n        }\r\n\r\n        if(e.target.closest('.title')) {\r\n            const textItem = e.target.closest('.title')\r\n            let content = textItem.nextElementSibling\r\n            console.log(content);\r\n            if(content.style.display) {\r\n                textContent.forEach((item) => {\r\n                    item.style.display = null\r\n                })\r\n            } else {\r\n                textContent.forEach((item) => {\r\n                    item.style.display = null\r\n                })\r\n                    content.style.height = '0'; \r\n                    content.style.paddingTop = '0px';\r\n                    content.style.paddingBottom = '0px';\r\n                        content.style.overflow = 'hidden'\r\n                        content.style.display = 'block';\r\n                        setTimeout(() => {\r\n                            content.style.height = '124px'; \r\n                            content.style.transition = '0.6s all ease-out';\r\n                            content.style.padding = '20px';\r\n                        }, 1); \r\n            }\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nconst carousel = () => {\r\n\r\n    const slides = document.querySelectorAll('.col-md-4')\r\n    const prev = document.querySelector('.arrow-left') \r\n    const next = document.querySelector('.arrow-right')\r\n    const slidesWrapper = document.querySelector('.services-elements')\r\n    const slidesField = document.querySelector('.services-carousel')\r\n    const width = window.getComputedStyle(slidesWrapper).width\r\n    let offset = 0\r\n\r\n    slidesField.style.width = 100 * slides.length + '%'\r\n    slidesField.style.display = 'inline-flex'\r\n    slidesField.style.transition = '0.5s all'\r\n    slidesWrapper.style.overflow = 'hidden'\r\n\r\n    slides.forEach(slide => {\r\n        slide.style.width = 1180 / 3 + 'px'\r\n    })\r\n    prev.addEventListener('click', () => {\r\n        if(offset <= 0 ){\r\n            offset = +width.slice(0, width.length - 2) / 3 * (slides.length - 3)  \r\n        } else {\r\n            offset -= +width.slice(0, width.length - 2) / 3\r\n        }\r\n        slidesField.style.transform = `translateX(-${offset}px)`\r\n    }) \r\n\r\n    next.addEventListener('click', () => {\r\n        if(offset === +width.slice(0, width.length - 2) / 3 * (slides.length - 3)) {\r\n            offset = 0\r\n        } else {\r\n            offset += +width.slice(0, width.length - 2) / 3\r\n        }\r\n        slidesField.style.transform = `translateX(-${offset}px)`\r\n    })\r\n\r\n  /*   const slides = document.querySelectorAll('.col-md-4') //сами блоки\r\n    const prev = document.querySelector('.arrow-left') \r\n    const next = document.querySelector('.arrow-right')\r\n    const slidesWrapper = document.querySelector('.services-elements')\r\n    const slidesField = document.querySelector('.services-carousel')\r\n    const width = window.getComputedStyle(slidesWrapper).width\r\n\r\n    let offset = 0\r\n\r\n    const p = document.querySelector('.part-1')\r\n    p.style.display = 'inline-flex'\r\n    const p2 = document.querySelector('.part-2')\r\n    p2.style.display = 'inline-flex'\r\n    const parts = [p, p2]\r\n\r\n    slidesField.style.width = 100 * parts.length + '%'\r\n    slidesField.style.display = 'inline-flex'\r\n    slidesField.style.transition = '0.5s all'\r\n    slidesWrapper.style.overflow = 'hidden'\r\n\r\n    parts.forEach(part => {\r\n       part.style.width = width\r\n    })\r\n    next.addEventListener('click', () => {\r\n        if(offset == +width.slice(0, width.length - 2) * (parts.length - 1)) {\r\n            offset = 0\r\n        } else {\r\n            offset += +width.slice(0, width.length - 2)\r\n        }\r\n        slidesField.style.transform = `translateX(-${offset}px)`\r\n    })\r\n    prev.addEventListener('click', () => {\r\n        if(offset == 0){\r\n            offset = +width.slice(0, width.length - 2) * (parts.length - 1)  \r\n        } else {\r\n            offset -= +width.slice(0, width.length - 2)\r\n        }\r\n        slidesField.style.transform = `translateX(-${offset}px)`\r\n    })  */  \r\n}\r\n\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\nconst animate = ({timing, draw, duration}) => {\r\n     \r\n    let start = performance.now();\r\n    requestAnimationFrame(function animate(time) {\r\n        \r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        let progress = timing(timeFraction)\r\n\r\n        draw(progress);\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menuScroll.js":
/*!*******************************!*\
  !*** ./modules/menuScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst menu = () => {\r\n    const header = document.querySelector('.header')\r\n    const menuItems = header.querySelectorAll('.header ul > li > a')\r\n    \r\n    const arrowUp = document.querySelector('.up')\r\n    const logoLeft = document.querySelector('.logo')\r\n    const arrayUp = []\r\n    arrayUp.push(arrowUp, logoLeft)\r\n\r\n    header.addEventListener('click', (e) => {\r\n        menuItems.forEach(item => {\r\n            if (item === e.target) {\r\n                e.preventDefault()\r\n                let idAnchor = item.getAttribute('href')\r\n                document.querySelector(idAnchor).scrollIntoView({\r\n                    block: 'start',\r\n                    behavior: 'smooth'\r\n                })\r\n            }\r\n        })\r\n    })\r\n\r\n    if (scrollY > 600) {\r\n        arrowUp.style.opacity = '1';\r\n        arrowUp.style.zIndex = '999';\r\n    } else {\r\n        arrowUp.style.opacity = '0' ;\r\n        arrowUp.style.zIndex = '-999'; \r\n    }\r\n    window.addEventListener('scroll', () => {\r\n          if (scrollY >= 600) {\r\n            arrowUp.style.zIndex = '999';\r\n            arrowUp.style.opacity = '1';\r\n            arrowUp.style.transition = '0.6s opacity'\r\n            arrowUp.style.display = 'block';\r\n        } else {\r\n            arrowUp.style.opacity = '0'; \r\n            arrowUp.style.transition = '.6s all';\r\n            arrowUp.style.zIndex = '-1';\r\n        }  \r\n    })\r\n    arrayUp.forEach(item => {\r\n        item.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 1000,\r\n                timing(timeFraction) {\r\n                return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    window.scrollBy(0, -500 * progress)\r\n                }\r\n            })\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/menuScroll.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n\r\n    const callbackBtn = document.querySelector('.fancyboxModal.hidden-xs')\r\n    const serviceBtn = document.querySelector('.button-services')\r\n    const sliderBtn = Array.from(document.querySelectorAll('.absolute'))\r\n    const modal = document.querySelector('.modal-callback')\r\n    const modalOverlay = document.querySelector('.modal-overlay')   \r\n    const arrayBtn = [...sliderBtn, serviceBtn, callbackBtn]\r\n    const arrayModal = [modal, modalOverlay]\r\n\r\n    arrayBtn.forEach(item => {\r\n        item.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modal.style.display = 'block'\r\n                    modal.style.opacity = progress; \r\n                    modalOverlay.style.display = 'block'\r\n                    modalOverlay.style.opacity = progress;\r\n                }\r\n            });\r\n        })\r\n    })\r\n    arrayModal.forEach(item => \r\n        item.addEventListener('click', (e) => {\r\n        if(!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modal.style.opacity = 1 - progress; \r\n                    modalOverlay.style.opacity = 1 - progress; \r\n                    setTimeout(() => {\r\n                        modal.style.display = 'none';\r\n                        modalOverlay.style.display = 'none'\r\n                    }, 300);\r\n                } \r\n            })\r\n        }\r\n    })) \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst sendForm = () => {\r\n\r\n    const form = document.querySelector('form')\r\n    const statusBlock = document.createElement('div') \r\n    const loadText = 'Идёт отправка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\r\n    const nameInput = document.querySelector('.form-control')\r\n    const phoneInput = document.querySelector('.tel')\r\n\r\n    statusBlock.style.fontFamily = 'Helios'\r\n    statusBlock.style.fontWeight = 'bold'\r\n    statusBlock.style.fontSize = '16px'\r\n    statusBlock.style.textAlign = 'center'\r\n\r\n    nameInput.addEventListener('input', (e) => {\r\n        if(/^[а-яёА-ЯЁ]+/gi.test(e.target.value)) {\r\n            nameInput.value = e.target.value\r\n        } \r\n            nameInput.value = e.target.value.replace(/^[^а-яёА-ЯЁ]+/gi, '').replace(/[^а-яёА-ЯЁ]+/gi, '').replace(/[^а-яёА-ЯЁ]+$/gi, '')\r\n    })\r\n    phoneInput.addEventListener('input', (e) => {\r\n        if(/[\\d]{\\+}/g.test(e.target.value)) {\r\n            phoneInput.value = e.target.value\r\n        } \r\n            phoneInput.value = e.target.value.replace(/[^\\d+]+/g, '').replace(/\\++/g, '+')\r\n    }) \r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then( res => res.json())\r\n    }\r\n    const validate = (list) => {\r\n        let success = true \r\n        let successName = false\r\n        let successPhone = false\r\n\r\n        list.forEach(input => {\r\n            if(input.closest('[name=fio]')) {\r\n                successName = /^[а-яёА-ЯЁ]+$/i.test(input.value)\r\n            }\r\n            if(input.closest('[name=tel]')) {\r\n                successPhone = /^[0-9\\+*]+$/.test(input.value)\r\n            }    \r\n            })\r\n        if (successName && successPhone){\r\n            success = true\r\n        } else {\r\n            success = false\r\n        }\r\n        return success\r\n    }\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n\r\n        statusBlock.textContent = loadText\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 300,\r\n            timing(timeFraction) {\r\n            return timeFraction\r\n            },\r\n            draw(progress) {\r\n                statusBlock.style.fontSize = 16 * progress + 'px'\r\n            } \r\n        })\r\n        statusBlock.style.color = '#556957'\r\n        form.append(statusBlock)\r\n        formData.forEach((value, key) => {\r\n            formBody[key] = value\r\n        })\r\n        if(validate(formElements)) {\r\n            sendData(formBody).then(data => {\r\n                statusBlock.textContent = successText\r\n                statusBlock.style.color = '#2bad6f'\r\n                setTimeout(() =>\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 500,\r\n                    timing(timeFraction) {\r\n                    return timeFraction\r\n                    },\r\n                    draw(progress) {\r\n                        statusBlock.style.fontSize = 16 - 16 * progress + 'px'\r\n                    } \r\n                }), 1500)\r\n                \r\n                formElements.forEach(input => {\r\n                    input.value = ''\r\n                    if(input.closest('[type=submit]')) {\r\n                    let btnInput = input.closest('[type=submit]')\r\n                    btnInput.value = 'Отправить'\r\n                    }   \r\n                })\r\n            })\r\n            .catch (error => {\r\n                statusBlock.style.color = '#ed4e4e'\r\n                statusBlock.textContent = errorText\r\n            })  \r\n        } else {\r\n            alert ('Данные не валидные')\r\n            statusBlock.style.color = '#ed4e4e'\r\n            statusBlock.textContent = 'Заполните, пожалуйста, все поля'\r\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300,\r\n                timing(timeFraction) {\r\n                return timeFraction\r\n                },\r\n                draw(progress) {\r\n                    statusBlock.style.fontSize = 16 * progress + 'px'\r\n                } \r\n            })\r\n        }\r\n    }\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n        submitForm()\r\n    })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = () => {\r\n\r\n    const sliderContainer = document.querySelector('.top-slider')\r\n    let slides = document.querySelectorAll('.item')\r\n    let width = window.getComputedStyle(sliderContainer).width\r\n    const interval = 3000\r\n    let slideId\r\n    let index = 1\r\n\r\n    sliderContainer.style.display = 'inline-flex'\r\n    slides.forEach(slide => {\r\n        slide.style.width = width\r\n        slide.style.height = '600px'\r\n    })\r\n    const firstClone = slides[0].cloneNode(true) //создадим клонов первого и последнего слайдов со всеми свойствами\r\n    const lastClone = slides[slides.length - 1].cloneNode(true)\r\n\r\n    firstClone.id = 'first-clone' //дадим id клонам\r\n    lastClone.id = 'last-clone'\r\n    sliderContainer.append(firstClone)\r\n    sliderContainer.prepend(lastClone)\r\n\r\n    const slideWidth = slides[index].clientWidth\r\n    sliderContainer.style.transform = `translateX(${-slideWidth * index}px)`\r\n    const startSlide = () => {\r\n        slideId = setInterval(() => {\r\n            index++\r\n            sliderContainer.style.transform = `translateX(${-slideWidth * index}px)`\r\n            sliderContainer.style.transition = '0.7s'\r\n        }, interval)\r\n        }\r\n        sliderContainer.addEventListener('transitionend', () => {\r\n            slides = document.querySelectorAll('.item')\r\n            if(slides[index].id === firstClone.id) {\r\n                sliderContainer.style.transition = 'none'\r\n                index = 1\r\n                sliderContainer.style.transform = `translateX(${-slideWidth * index}px)`\r\n            }\r\n        })\r\n\r\n        sliderContainer.addEventListener('mouseenter', () => {\r\n            clearInterval(slideId)\r\n        })\r\n        sliderContainer.addEventListener('mouseleave',startSlide)\r\n\r\n        startSlide()\r\n        \r\n    const push = document.querySelector('.push100')\r\n    push.style.height = '100px'\r\n    push.style.marginTop = '-5px'\r\n}\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;