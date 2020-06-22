// Types of cookies and how much they fill up cookie monster
const cookies ={
    burnt: -20,
    broccoli: -10,
    mnm: 10,
    chocolate: 20,
    snickerdoodle: 5,
    fudge: 2
}

let selectedCookie = 'burnt'; // Cookie that is selected

// Code that is run when html/window page is loaded
window.addEventListener('load', () => {

    // DOM elements/Variables needed
    const dropdownMenu = qs('select');
    const cookieJar = qs('#jar-container img');
    const cookieTypes = Object.keys(cookies);

    cookieTypes.forEach((cookie) => {
        let option = document.createElement('option');
        option.value = cookie;
        option.textContent = cookie;
        dropdownMenu.append(option);
    });

    dropdownMenu.addEventListener('change', () => {
        selectedCookie = dropdownMenu.value;
    });

    cookieJar.addEventListener('click', generateCookie);
});

// Generates a cookie with selected type of cookie
function generateCookie() {
    const cookie = document.createElement('img');
    cookie.classList.add('cookie');
    cookie.classList.add(selectedCookie);
    cookie.src = './img/' + selectedCookie + '.png';
    cookie.alt = selectedCookie + ' cookie';
    cookie.addEventListener('click', monsterEat);

    const cookieContainer = qs('#cookie-container');
    cookieContainer.append(cookie);
}

// On click callback function where monster eats given cookie
function monsterEat(cookie) {
    const cookieContainer = qs('#cookie-container');
    const cookieObject = cookie.target;
    cookieContainer.removeChild(cookieObject);

    const fullBar = qs('.full-bar');
    fullBar.style.width = calculateHunger(cookieObject);
}