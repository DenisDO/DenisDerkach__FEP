// console.log("==============================1==============================");

let resultArr = [];

function checkMistake(numberLength, number) {
    for (let i = 0; i < numberLength; i++) {
        if (!+number[i]) {
            return false;
        } else continue;
    }
}


function setResultLength(length1, length2) {
    resultArr.length = length1 >= length2
        ? length1
        : length2
}


function addition(number1ArrLength, number2ArrLength, resultArrLength, number1Arr, number2Arr) {
    let addBuffer = 0;
    for (let i = 1; i < resultArrLength + 1; i++) {
        let num1 = +number1Arr[number1ArrLength - i] || 0;
        let num2 = +number2Arr[number2ArrLength - i] || 0;
        let sum = num1 + num2 + addBuffer;
        addBuffer = sum > 9
            ? 1
            : 0
            resultArr[resultArrLength - i] = sum % 10;
    }
    return resultArr.join("");
}

// console.log("==============================2==============================");

function moreLess (more, less, passwordLength) {
    return passwordLength >= more && passwordLength <= less
        ? true
        : false
}


function lookingForNumber (password, passwordLength) {
    for (let i = 0; i < passwordLength; i++) {
        if (+password[i]) {
            return true;
        } else continue;
    }
}


function lookingForLetter (password, passwordLength) {
    for (let i = 0; i < passwordLength; i++) {
        if (!+password[i]) {
            return true;
        } else continue;
    }
}


function checkingNoSymbols(password, passwordLength) {
    for (let i = 0; i < passwordLength; i++) {
        if (
            password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57 ||
            password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90 ||
            password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122
        ) {
            continue;
        } else {
            return false;
        }
    }
    
    return true;
}


function solution(password, min, max) {
    let passwordLength = password.length;

    if (
        moreLess(min, max, passwordLength) === true &&
        lookingForNumber(password, passwordLength) === true &&
        lookingForLetter(password, passwordLength) === true && 
        checkingNoSymbols(password, passwordLength) === true
    ) {
        return true;
    } else {
        return false;
    }
}

// console.log("==============================3==============================");

function myFunk (number) {
    if (number % 2 === 0) {
        return true;
    } else

    if (number % 10 === 0) {
        return true;
    } else

    if (number > 0) {

        if (number === 1 || number === 2) {
            return true;
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    } else {
        return false;
    }
}

let passwordValue = prompt("Enter Your password", "Qw1Llm3");
// let passwordValue = "Qw1Llm3";

if (solution(passwordValue, 6, 20) === true) {
    let number = prompt("Enter number for checking", "-6");
    // let number = "-6";

    if (myFunk (+number) === true) {
        let number1 = prompt("Enter 1st operand", "842369878");
        let number2 = prompt("Enter 2nd operand", "126852465652524");
        // let number1 = "842369878";
        // let number2 = "126852465652524";
        
        let number1Arr = number1.split ("");
        let number2Arr = number2.split ("");

        let check1 = checkMistake(number1Arr.length, number1Arr);
        let check2 = checkMistake(number2Arr.length, number2Arr);

            if (check1 === false || check2 === false) {
                console.log(`Only numbers!`);
            } else {
                setResultLength(number1Arr.length, number2Arr.length);
                let result = addition(number1Arr.length, number2Arr.length, resultArr.length, number1Arr, number2Arr);
                console.log(`${number1} \n    + \n${number2} \n    = \n${result}`);
            }

    } else {
        console.log(`THE NUMBER ${number} IS NOT MATCH!`);
    }
} else {
    console.log(`PASSWORD IS INVALID!`);
}