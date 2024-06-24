'use strict';

let main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.querySelectorAll('li'),
    btn = main_container.querySelectorAll('a');

let slide_idx = 0,                      // 현재 슬라이드 인덱스.
    beforeEventTime = -new Date();

/* =============================================================================================================== */

function executable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

function activeSlide() {
    slide_idx %= li.length;
    slide_list.style.left = `${-slide_idx * 100}%`;

    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');
    if (slide_idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (slide_idx >= li.length - 1) {
        btn[1].classList.add('nonVisible');
    }
}

main_container.addEventListener('click', function (e) {
    if (executable()) {
        let eventOj = e.target.closest('a');

        if (this.contains(eventOj)) {
            slide_idx += +eventOj.dataset.moveValue;
            activeSlide();
        }
    }
});

// ===============================================================================
/* 자동 슬라이드 */

let slide_container = main_container.querySelector('.slide_container');
let stop;

slide_container.addEventListener('mouseenter', () => {
    stop = setInterval((() => {
        slide_idx++;
        activeSlide();
    }), 2000);
});

slide_container.addEventListener('mouseleave', () => {
    clearInterval(stop);
});