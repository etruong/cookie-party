// Instructions:
// 
// 1. When the window/browser loads...
//       - generate the dropdown menu with options
//       - add an on change event listener for the dropdown menu
//       - add an on click event listener for the cookie jar
// 2. Create a function called generateCookie that creates the selected
//    cookie DOM element and attaches it to the plate, make sure the cookie
//    has the following traits: 
//       - is an img tag
//       - alt attribute containing the type of cookie it is
//       - contains the class cookie
// 3. Create a function called monsterEat that contains a parameter called cookie
//    that is the target cookie that cookie monster will eat that does the
//    following:
//       - removes the cookie from the plate
//       - calls calculateHunger function (found in the helper-function.js) passing
//         in the cookie that is to be removed this should adjust the health bar depending
//         on the cookie passed in

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