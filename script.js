// constant references to dom elements
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationsEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

// variable elements
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

// functionality for numbers
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

// functionality for operations
operationsEl.forEach( operation => {
    operation.addEventListener('click', (e) =>{
        // check if we have allready a number. If not return
        if(!dis2Num) return;
        // in order to have a dot in the new number change haveDot to false
        haveDot = false;
        // listening to target and adding operations sign when clicked
        const operationName = e.target.innerText;
        // if we have both display numbers and the operation sign start the math operation
        if(dis1Num && dis2Num) {
            // new function for math operation
            mathOperation();
        } else {
            // show tempory result
            // convert string to number
            result = parseFloat(dis2Num);
        }
        // new function for clearing display number 2 and moving the number to display number 1 and show the
        // result in the temporary result
        clearVar(operationName);
        // lastOperations and operationNmae have the same name
        lastOperation = operationName;
        console.log(result)
    })
});

// clearing functionality
// defaut operationName set to empty string
function clearVar(name = ''){
    // update display 1 with display number 2 and operation name (math history)
    dis1Num += dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    // clear display number 2
    display2El.innerText = '';
    // clear variable number 2
    dis2Num = '';
    // show temporary result
    tempResultEl.innerText = result;
};

// math functionality
function mathOperation() {
    if(lastOperation === 'X') {
        // convert strings to number 
        // multiply temporary result with display number 2
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
};

// the equal operation
equalEl.addEventListener('click', () => {
    // if we do not have both numbers for the operation return
    if(!dis1Num || !dis2Num ) return;
    // setting haveDot to false so that a new number can have a dot again
    haveDot = false;
    // completing the math operation
    mathOperation();
    // clearing the variables and updating the display
    clearVar();
    // show temporary result in display 2
    display2El.innerText = result;
    // clear temporary result
    tempResultEl.innerText = '';
    // move result to display number 2
    dis2Num = result;
    // clear display number 1 (math history)
    dis1Num = '';
});

// the clear all operation
// displays are 0 but the real numbers are empty
clearAllEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText= '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultEl.innerText = '0';
})