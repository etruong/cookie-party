const cookies ={
    burnt: -20,
    broccoli: -10,
    mnm: 10,
    chocolate: 20,
    snickerdoodle: 5,
    fudge: 2
}

let selectedCookie = 'burnt';

window.addEventListener('load', () => {

    const dropdownMenu = qs('select');

    Object.keys(cookies).forEach((cookie) => {
        let option = document.createElement('option');
        option.value = cookie;
        option.textContent = cookie;
        dropdownMenu.append(option);
    });

    dropdownMenu.addEventListener('change', () => {
        selectedCookie = dropdownMenu.value;
    });

    const cookieJar = qs('#jar-container img');
    cookieJar.addEventListener('click', generateCookie);

});

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

function monsterEat(event) {
    const cookieContainer = qs('#cookie-container');
    const cookie = event.target;
    cookieContainer.removeChild(cookie);

    const fullBar = qs('.full-bar');
    fullBar.style.width = calculateHunger(cookie);
}