if(window.history.pushState) {
    window.history.pushState('', '/', window.location.pathname)
} else {
    window.location.hash = '';
}
let url = window.location.href 
window.location.href = url + '#' + 'hero'

// Переходы по страницам
let anchorsLink = [
    'hero',
    'about',
    'benefits',
    'characteristic',
    'faq',
    'contacts',
]
var anchorsLinkActive = 0
let zindex = 15

// ссылки
// document.querySelectorAll('.header__link').forEach( (element, idx) => element.addEventListener('click', (idx) => {
//     anchorsLinkActive = idx
//     window.location.href = url + '#' + anchorsLink[idx]
//     console.log(idx.target)
// }))

// при прокрутке колеса мыши
// document.onwheel = function (event) {
//     if (event.deltaY > 4) {
//         next()
//     } else {
//         prev() 
//     }
// }

// function next() {
//     if(anchorsLinkActive >= anchorsLink.length-1) {
//         anchorsLinkActive = 0
//         zindex++
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive]).style.transform = "translateY(0vh)" 
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive]).style.position = "fixed"
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive]).style.zIndex = "zindex"
//         // window.location.href = url + '#' + anchorsLink[anchorsLinkActive]
//         return
//     } else {
//         anchorsLinkActive++
//         zindex++
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive]).style.transform = "translateY(-100vh)" 
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive]).style.position = "fixed"
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive]).style.zIndex = "zindex"
//         // window.location.href = url + '#' + anchorsLink[anchorsLinkActive]
//         return
//     }
// }

// function prev() {
//     if(anchorsLinkActive < 0) {
//         anchorsLinkActive = anchorsLink.length-1
//         zindex--
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive+1]).style.transform = "translateY(0vh)" 
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive+1]).style.position = "fixed"
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive+1]).style.zIndex = "zindex"
//         // window.location.href = url + '#' + anchorsLink[anchorsLinkActive]
//         return
//     } else {
//         anchorsLinkActive--
//         zindex--
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive+1]).style.transform = "translateY(0vh)" 
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive+1]).style.position = "fixed"
//         document.querySelector('#'+ anchorsLink[anchorsLinkActive+1]).style.zIndex = "zindex"
//         // window.location.href = url + '#' + anchorsLink[anchorsLinkActive]
//         return
//     }
// }

// при прокрутке колеса мыши без анимации
document.onwheel = function (event) {
    if (event.deltaY > 4) {
        if(anchorsLinkActive >= anchorsLink.length-1) {
            return
            // anchorsLinkActive = 0
        }
        anchorsLinkActive++
        window.location.href = url + '#' + anchorsLink[anchorsLinkActive]
    } else {
        if (anchorsLinkActive <= 0) {
            return
            // anchorsLinkActive = anchorsLink.length-1
        }
        anchorsLinkActive--
        window.location.href = url + '#' + anchorsLink[anchorsLinkActive]
    }
    console.log(anchorsLink[anchorsLinkActive])
}

// FAQ
let faqItem = document.querySelectorAll('.faq__item')
document.querySelectorAll('.faq__item-line').forEach( (el, index) => el.addEventListener('click', () => {
    let faqItemContent = faqItem[index].querySelector('.faq__item-content')
    let faqItemLine = faqItem[index].querySelector('.faq__item-line')
    if (faqItemContent.classList.contains('faq__item-true') && faqItemLine.classList.contains('faq__item-line-true')) {
        faqItemContent.classList.remove('faq__item-true')
        faqItemLine.classList.remove('faq__item-line-true')
        faqItemLine.classList.add('faq__item-line-false')
    } else {
        faqItemContent.classList.add('faq__item-true')
        faqItemLine.classList.add('faq__item-line-true')
        faqItemLine.classList.remove('faq__item-line-false')
    }
}))
