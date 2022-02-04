/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_menuScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuScroll */ \"./modules/menuScroll.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/swiper */ \"./modules/swiper.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_swiper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n\n\n\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)()\n;(0,_modules_menuScroll__WEBPACK_IMPORTED_MODULE_1__.menu)()\n;(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_2__.accordeon)()\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)()\n//swiper() // НЕПОНЯТНО РАБОТАЕТ!!!\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.slider)()\n;(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_6__.carousel)()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordeon\": () => (/* binding */ accordeon)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst accordeon = () => {\n\n    const acc = document.querySelector('.accordeon')\n    const accordeonItemActive = document.querySelectorAll('.accordeon .element')\n    const textContent = document.querySelectorAll('.accordeon .element-content')\n\n    accordeonItemActive.forEach(item => {\n        item.classList.remove('active')\n    })\n    acc.addEventListener('click', (e) => {\n        if(e.target.closest('.element')) {\n            const accItem = e.target.closest('.element')\n            accordeonItemActive.forEach((item, index) => {\n                if(item === accItem && !textContent[index].style.display) {\n                    item.classList.add('active')\n                } else {\n                    item.classList.remove('active')\n                }\n            })\n        }\n\n        if(e.target.closest('.title')) {\n            const textItem = e.target.closest('.title')\n            let content = textItem.nextElementSibling\n            console.log(content);\n            if(content.style.display) {\n                textContent.forEach((item) => {\n                    item.style.display = null\n                })\n            } else {\n                textContent.forEach((item) => {\n                    item.style.display = null\n                })\n                    content.style.height = '0'; \n                    content.style.paddingTop = '0px';\n                    content.style.paddingBottom = '0px';\n                        content.style.overflow = 'hidden'\n                        content.style.display = 'block';\n                        setTimeout(() => {\n                            content.style.height = '124px'; \n                            content.style.transition = '0.6s all ease-out';\n                            content.style.padding = '20px';\n                        }, 1); \n            }\n        }\n    })\n}\n\n/*  const accordionBlock = document.querySelector('.accordeon')\nconst accordionElements = document.querySelectorAll('.accordeon > .element')\naccordionBlock.addEventListener('click', (e) => {\n    accordionElements.forEach(element => {\n        if (element == e.target.closest('.element') && !element.classList.contains('active')) {\n            element.classList.toggle('active')\n            element.children[1].style.display = 'block'\n        } else {\n            element.classList.remove('active')\n            element.children[1].style.display = 'none'\n        }\n    });\n})  */\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nconst carousel = () => {\n\n    const slides = document.querySelectorAll('.col-md-4')\n    const prev = document.querySelector('.arrow-left') \n    const next = document.querySelector('.arrow-right')\n    const slidesWrapper = document.querySelector('.services-elements')\n    const slidesField = document.querySelector('.services-carousel')\n    const width = window.getComputedStyle(slidesWrapper).width\n    let offset = 0\n\n    slidesField.style.width = 100 * slides.length + '%'\n    slidesField.style.display = 'inline-flex'\n    slidesField.style.transition = '0.5s all'\n    slidesWrapper.style.overflow = 'hidden'\n\n    slides.forEach(slide => {\n        slide.style.width = 1180 / 3 + 'px'\n    })\n    prev.addEventListener('click', () => {\n        if(offset <= 0 ){\n            offset = +width.slice(0, width.length - 2) / 3 * (slides.length - 3)  \n        } else {\n            offset -= +width.slice(0, width.length - 2) / 3\n        }\n        slidesField.style.transform = `translateX(-${offset}px)`\n    }) \n\n    next.addEventListener('click', () => {\n        if(offset === +width.slice(0, width.length - 2) / 3 * (slides.length - 3)) {\n            offset = 0\n        } else {\n            offset += +width.slice(0, width.length - 2) / 3\n        }\n        slidesField.style.transform = `translateX(-${offset}px)`\n    })\n\n  /*   const slides = document.querySelectorAll('.col-md-4') //сами блоки\n    const prev = document.querySelector('.arrow-left') \n    const next = document.querySelector('.arrow-right')\n    const slidesWrapper = document.querySelector('.services-elements')\n    const slidesField = document.querySelector('.services-carousel')\n    const width = window.getComputedStyle(slidesWrapper).width\n\n    let offset = 0\n\n    const p = document.querySelector('.part-1')\n    p.style.display = 'inline-flex'\n    const p2 = document.querySelector('.part-2')\n    p2.style.display = 'inline-flex'\n    const parts = [p, p2]\n\n    slidesField.style.width = 100 * parts.length + '%'\n    slidesField.style.display = 'inline-flex'\n    slidesField.style.transition = '0.5s all'\n    slidesWrapper.style.overflow = 'hidden'\n\n    parts.forEach(part => {\n       part.style.width = width\n    })\n    next.addEventListener('click', () => {\n        if(offset == +width.slice(0, width.length - 2) * (parts.length - 1)) {\n            offset = 0\n        } else {\n            offset += +width.slice(0, width.length - 2)\n        }\n        slidesField.style.transform = `translateX(-${offset}px)`\n    })\n    prev.addEventListener('click', () => {\n        if(offset == 0){\n            offset = +width.slice(0, width.length - 2) * (parts.length - 1)  \n        } else {\n            offset -= +width.slice(0, width.length - 2)\n        }\n        slidesField.style.transform = `translateX(-${offset}px)`\n    })  */  \n}\n\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\nconst animate = ({timing, draw, duration}) => {\n     \n    let start = performance.now();\n    requestAnimationFrame(function animate(time) {\n        \n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        let progress = timing(timeFraction)\n\n        draw(progress);\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n    });\n}\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menuScroll.js":
/*!*******************************!*\
  !*** ./modules/menuScroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst menu = () => {\n    const header = document.querySelector('.header')\n    const menuItems = header.querySelectorAll('.header ul > li > a')\n    \n    const arrowUp = document.querySelector('.up')\n    const logoLeft = document.querySelector('.logo')\n    const arrayUp = []\n    arrayUp.push(arrowUp, logoLeft)\n\n    header.addEventListener('click', (e) => {\n        menuItems.forEach(item => {\n            if (item === e.target) {\n                e.preventDefault()\n                let idAnchor = item.getAttribute('href')\n                document.querySelector(idAnchor).scrollIntoView({\n                    block: 'start',\n                    behavior: 'smooth'\n                })\n            }\n        })\n    })\n\n    if (scrollY > 600) {\n        arrowUp.style.opacity = '1';\n        arrowUp.style.zIndex = '999';\n    } else {\n        arrowUp.style.opacity = '0' ;\n        arrowUp.style.zIndex = '-999'; \n    }\n    console.log(scrollY);\n    window.addEventListener('scroll', () => {\n          if (scrollY >= 600) {\n            arrowUp.style.zIndex = '999';\n            arrowUp.style.opacity = '1';\n            arrowUp.style.transition = '0.6s opacity'\n            arrowUp.style.display = 'block';\n        } else {\n            arrowUp.style.opacity = '0'; \n            arrowUp.style.transition = '.6s all';\n            arrowUp.style.zIndex = '-1';\n        }  \n    })\n    arrayUp.forEach(item => {\n        item.addEventListener('click', (e) => {\n            e.preventDefault()\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                duration: 1000,\n                timing(timeFraction) {\n                return timeFraction;\n                },\n                draw(progress) {\n                    window.scrollBy(0, -500 * progress)\n                }\n            })\n        })\n    })\n}\n\n//# sourceURL=webpack:///./modules/menuScroll.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst modal = () => {\n\n    const callbackBtn = document.querySelector('.fancyboxModal.hidden-xs')\n    const serviceBtn = document.querySelector('.button-services')\n    const sliderBtn = Array.from(document.querySelectorAll('.absolute'))\n    const modal = document.querySelector('.modal-callback')\n    const modalOverlay = document.querySelector('.modal-overlay')   \n    const arrayBtn = [...sliderBtn, serviceBtn, callbackBtn]\n    const arrayModal = [modal, modalOverlay]\n\n    arrayBtn.forEach(item => {\n        item.addEventListener('click', (e) => {\n            e.preventDefault()\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                duration: 300,\n                timing(timeFraction) {\n                return timeFraction;\n                },\n                draw(progress) {\n                    modal.style.display = 'block'\n                    modal.style.opacity = progress; \n                    modalOverlay.style.display = 'block'\n                    modalOverlay.style.opacity = progress;\n                }\n            });\n        })\n    })\n    \n    arrayModal.forEach(item => \n        item.addEventListener('click', (e) => {\n        if(!e.target.closest('.modal-callback') || e.target.closest('.modal-close')) {\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                duration: 300,\n                timing(timeFraction) {\n                return timeFraction;\n                },\n                draw(progress) {\n                    modal.style.opacity = 1 - progress; \n                    modalOverlay.style.opacity = 1 - progress; \n                    setTimeout(() => {\n                        modal.style.display = 'none';\n                        modalOverlay.style.display = 'none'\n                    }, 300);\n                } \n            })\n        }\n    })) \n}\n\n\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst sendForm = () => {\n\n    const form = document.querySelector('form')\n    const statusBlock = document.createElement('div') \n    const loadText = 'Идёт отправка...'\n    const errorText = 'Ошибка...'\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\n    const nameInput = document.querySelector('.form-control')\n    const phoneInput = document.querySelector('.tel')\n\n    statusBlock.style.fontFamily = 'Helios'\n    statusBlock.style.fontWeight = 'bold'\n    statusBlock.style.fontSize = '16px'\n    statusBlock.style.textAlign = 'center'\n\n    nameInput.addEventListener('input', (e) => {\n        if(/^[а-яёА-ЯЁ]+/gi.test(e.target.value)) {\n            nameInput.value = e.target.value\n        } \n            nameInput.value = e.target.value.replace(/^[^а-яёА-ЯЁ]+/gi, '').replace(/[^а-яёА-ЯЁ]+/gi, '').replace(/[^а-яёА-ЯЁ]+$/gi, '')\n    })\n    phoneInput.addEventListener('input', (e) => {\n        if(/[\\d]{\\+}/g.test(e.target.value)) {\n            phoneInput.value = e.target.value\n        } \n            phoneInput.value = e.target.value.replace(/[^\\d+]+/g, '').replace(/\\++/g, '+')\n    }) \n    const sendData = (data) => {\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then( res => res.json())\n    }\n    const validate = (list) => {\n        let success = true \n        let successName = false\n        let successPhone = false\n\n        list.forEach(input => {\n            if(input.closest('[name=fio]')) {\n                successName = /^[а-яёА-ЯЁ]{2,}$/i.test(input.value)\n            }\n            if(input.closest('[name=tel]')) {\n                successPhone = /^[+]?[0-9]{6,16}$/.test(input.value)\n            }    \n            })\n        if (successName && successPhone){\n            success = true\n        } else {\n            success = false\n        }\n        return success\n    }\n    const submitForm = () => {\n        const formElements = form.querySelectorAll('input')\n        const formData = new FormData(form)\n        const formBody = {}\n\n        statusBlock.textContent = loadText\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n            duration: 300,\n            timing(timeFraction) {\n            return timeFraction\n            },\n            draw(progress) {\n                statusBlock.style.fontSize = 16 * progress + 'px'\n            } \n        })\n        statusBlock.style.color = '#556957'\n        form.append(statusBlock)\n        formData.forEach((value, key) => {\n            formBody[key] = value\n        })\n        if(validate(formElements)) {\n            sendData(formBody).then(data => {\n                statusBlock.textContent = successText\n                statusBlock.style.color = '#2bad6f'\n                setTimeout(() =>\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                    duration: 500,\n                    timing(timeFraction) {\n                    return timeFraction\n                    },\n                    draw(progress) {\n                        statusBlock.style.fontSize = 16 - 16 * progress + 'px'\n                    } \n                }), 1500)\n                \n                formElements.forEach(input => {\n                    input.value = ''\n                    if(input.closest('[type=submit]')) {\n                    let btnInput = input.closest('[type=submit]')\n                    btnInput.value = 'Отправить'\n                    }   \n                })\n            })\n            .catch (error => {\n                statusBlock.style.color = '#ed4e4e'\n                statusBlock.textContent = errorText\n            })  \n        } else {\n            alert ('Данные не валидные')\n            statusBlock.style.color = '#ed4e4e'\n            statusBlock.textContent = 'Заполните, пожалуйста, все поля'\n            ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n                duration: 300,\n                timing(timeFraction) {\n                return timeFraction\n                },\n                draw(progress) {\n                    statusBlock.style.fontSize = 16 * progress + 'px'\n                } \n            })\n        }\n    }\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n        submitForm()\n    })\n}\n\n\n\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst slider = () => {\n\n    const sliderContainer = document.querySelector('.top-slider')\n    let slides = document.querySelectorAll('.item')\n    const width = sliderContainer.style.width\n\n    const interval = 3000\n    let clearInterval\n    let currentSlide = 0\n\n    window.addEventListener('resize', () => {\n        slides.forEach(slide => {\n            slide.style.width = width\n        })\n    })\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].style.display = strClass\n    };\n    const nextSlide = (elems, index, strClass) => { \n        elems[index].style.display = strClass\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n            duration: 600,\n            timing(timeFraction) {\n            return timeFraction\n            },\n            draw(progress) {\n                elems[index].style.opacity = 0 + progress\n            } \n        })\n    };\n    const autoSlide = () => {\n        prevSlide(slides, currentSlide, 'none');\n        currentSlide++\n        if(currentSlide >= slides.length) {\n            currentSlide = 0\n        }\n        nextSlide(slides, currentSlide, 'block');\n    };\n    const startSlide = () => {\n        clearInterval = setInterval(autoSlide, interval)\n    }\n    startSlide()\n}\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/swiper.js":
/*!***************************!*\
  !*** ./modules/swiper.js ***!
  \***************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./modules/swiper.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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