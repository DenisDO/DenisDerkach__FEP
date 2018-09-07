console.log("==============================1==============================");

let number1 = "9999999";
let number2 = "111";

let number1Arr = number1.split ("");
let number2Arr = number2.split ("");

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
        ? length1 + 1
        : length2 + 1
}


function addition(number1ArrLength, number2ArrLength, resultArrLength) {
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

    if (resultArr[0] === 0) {
        resultArr.splice(0, 1);
        return resultArr.join("");
    } else {
        return resultArr.join("");
    }
}

let check1 = checkMistake(number1Arr.length, number1Arr);
let check2 = checkMistake(number2Arr.length, number2Arr);

if (check1 === false || check2 === false) {
    console.log(`Only numbers!`);
} else {
    setResultLength(number1Arr.length, number2Arr.length);
    let result = addition(number1Arr.length, number2Arr.length, resultArr.length, number1Arr, number2Arr);
    console.log(`${number1} \n    + \n${number2} \n    = \n${result}`);
}

console.log("==============================2==============================");

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
        console.log("VALID");
    } else {
        console.log("INVALID");
    }
}

solution("Qw1L=lm3", 6, 20);

console.log("==============================3==============================");

let number = +"7";

function myFunk () {
    if (number % 2 === 0) {
        console.log(`The number ${number} is even.`);
    } else {
        console.log(`The number ${number} is odd.`);
    }

    if (number % 10 === 0) {
        console.log(`The number ${number} is multiple of 10.`);
    } else {
        console.log(`The number ${number} is not multiple of 10.`);
    }

    if (number > 0) {

        if (number === 1 || number === 2) {
            console.log (`The number ${number} is a prime number.`);
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    console.log (`The number ${number} is not a prime number.`);
                    break;
                } else {
                    console.log (`The number ${number} is a prime number.`);
                    break;
                }
            }
        }
    } else {
        console.log (`The number ${number} is not a prime number.`);
    }
}

myFunk ();

// function solvePositiveNegative() {
//     if (number > 0) return true;
//     else return false;
// }

// function solvePrime() {
//     if (number === 2) {
//         return true;
//     } else {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 return false;
//             }
//             else return true;
//         }
//     }
// } 

// function solveEvenOdd() {
//     if (number % 2 === 0) return true;
//     else return false;
// }

// function solveMultiplyOf(myltiply) {
//     if (number % myltiply === 0) return true;;
//     return false;
// }

// let PositiveNegative = solvePositiveNegative();
// let EvenOdd = solveEvenOdd();
// let Multiply = solveMultiplyOf(10);
// let Prime;

// if (PositiveNegative === true) {
//     if (Multiply === true) {
//         Prime = false;
//     } else {
//         if (EvenOdd === true) {
//             Prime = solvePrime();
//         } else {
//             Prime = false;
//         }
//     }
// } else {
//     Prime = false;
// }

// console.log (PositiveNegative, Multiply, EvenOdd, Prime);