function $(id) {
    return document.getElementById(id);
}

function qs(selector) {
    return document.querySelector(selector);
}

function qsa(selector) {
    return document.querySelectorAll(selector);
}

function calculateHunger(cookie) {
    const fullBar = qs('.full-bar');
    let fullPercentage = fullBar.clientWidth / fullBar.parentNode.clientWidth * 100.0;
    if (cookie.classList.contains('burnt')) {
        fullPercentage = Math.max(0, fullPercentage + cookies.burnt);
    } else if (cookie.classList.contains('broccoli')) {
        fullPercentage = Math.max(0, fullPercentage + cookies.broccoli);
    } else if (cookie.classList.contains('chocolate')) {
        fullPercentage = Math.min(100, fullPercentage + cookies.chocolate);
    } else if (cookie.classList.contains('fudge')) {    
        fullPercentage = Math.min(100, fullPercentage + cookies.fudge);
    } else if (cookie.classList.contains('mnm')) {
        fullPercentage = Math.min(100, fullPercentage + cookies.mnm);
    } else { // cookie.classList.contains('snickerdoodle')
        fullPercentage = Math.min(100, fullPercentage + cookies.snickerdoodle);
    }
    return fullPercentage + '%';
}