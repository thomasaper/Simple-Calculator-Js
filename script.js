// constant references to dom elements
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationsEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

// variable elements
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

// event listeners
numbersEl.forEach( number => {
    number.addEventListener('click', (e) => {
        // if we click dot and we have no dot previously go further
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true
        // if we click dot and we have allready a dot just return
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        // change numbers in display
        // if we click number add number to variable
        dis2Num += e.target.innerText
        // actually show the number in display2El
        display2El.innerText = dis2Num;

    })
})