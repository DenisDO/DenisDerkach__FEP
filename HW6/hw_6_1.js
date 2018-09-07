let password = "Qw1аБ=2мm 3"
let passwordArray = password.split ("");

function moreLess (more, less) {
    if (passwordArray.length >= more && passwordArray.length <= less) return true;
    else return false;
}

function lookingForNumber () {
    for (let i = 0; i < passwordArray.length; i++) {
        if (+passwordArray[i]) {
            return true;
        }
        else continue;
    }
}

function lookingForLetter () {
    for (let i = 0; i < passwordArray.length; i++) {
        if (!+passwordArray[i]) {
            return true;
        }
        else continue;
    }
}

function checkingNoSymbols() {
    for (let i = 0; i < passwordArray.length; i++) {
        if (
            passwordArray[i].charCodeAt(0) >= 48 && passwordArray[i].charCodeAt(0) <= 57 ||
            passwordArray[i].charCodeAt(0) >= 65 && passwordArray[i].charCodeAt(0) <= 90 ||
            passwordArray[i].charCodeAt(0) >= 97 && passwordArray[i].charCodeAt(0) <= 122 ||
            passwordArray[i].charCodeAt(0) >= 1040 && passwordArray[i].charCodeAt(0) <= 1071 ||
            passwordArray[i].charCodeAt(0) >= 1072 && passwordArray[i].charCodeAt(0) <= 1103 ||
            passwordArray[i].charCodeAt(0) === 2025 ||
            passwordArray[i].charCodeAt(0) === 1105
        ) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function solution() {
    if (
        moreLess(6, 20) === true &&
        lookingForNumber() === true &&
        lookingForLetter() === true && 
        checkingNoSymbols() === true
    ) {
        console.log("VALID");
    } else {
        console.log("INVALID");
    }
}

solution();