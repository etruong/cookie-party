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

    // TODO Step 2.1: Generate dropdown options below

    // TODO Step 2.2: Add an on change event listener for the dropdown menu

    // TODO Step 3.1: Add an on click event listener for the cookie jar

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
// TODO Step 3.2: Generates a cookie with selected type of cookie
// Hint: this is where the code for Step 4.2 should be placed also!
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
// TODO Step 4.1: On click callback function where monster eats given cookie 
function monsterEat(cookie) {
    const cookieContainer = qs('#cookie-container');
    const cookieObject = cookie.target;
    cookieContainer.removeChild(cookieObject);

    const fullBar = qs('.full-bar');
    fullBar.style.width = calculateHunger(cookieObject);
}