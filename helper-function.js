// Get Element by ID helper function
function $(id) {
    return document.getElementById(id);
}

// Query Selector helper function
function qs(selector) {
    return document.querySelector(selector);
}

// Query Selector All helper function
function qsa(selector) {
    return document.querySelectorAll(selector);
}

// Given the cookie ate, calculates the full progress bar percentage
function calculateHunger(cookie) {
    const fullBar = qs('#full-meter div');
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