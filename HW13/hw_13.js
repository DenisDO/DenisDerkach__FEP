let cacheArray = [
    {a: 5,
    b: 2,
    result: 7}, 
    {a: 7,
    b: 3,
    result: 10}
];

function setCache(firstOperand, secondOperand) {
    cacheArray.push({
        a: firstOperand,
        b: secondOperand,
        result: firstOperand + secondOperand
    });
}

function getCache(message, index) {
    console.log(`${message}: ${cacheArray[index].result}`);
}

function showError() {
    console.log(`Only numbers!`);
}

function checkCache(firstOperand, secondOperand, cacheLength) {
    for (let i = 0; i < cacheLength; i++) {
        if (cacheArray[i].a === firstOperand && cacheArray[i].b === secondOperand ||
            cacheArray[i].b === firstOperand && cacheArray[i].a === secondOperand) {
                return getCache('From cache', i);
        } else {
            continue;
        }
    }

    return false;
}

function solve(firstOperand, secondOperand) {
    cacheLength = cacheArray.length;
    firstOperand = +firstOperand;
    secondOperand = +secondOperand;

    if (isNaN(+firstOperand) || isNaN(+secondOperand)) {
        showError();
    } else {
        if (checkCache(firstOperand, secondOperand, cacheLength) === false) {
            setCache(firstOperand, secondOperand);
            getCache('New solution', cacheLength);
        } else {
            return true;
        }
    }
}

solve(2, 5);
solve(5, 2);
solve(-52, 50);
solve(-52, '50');
solve('5km', 2);
solve(10, 5);
solve('-10.5', 5);
solve(12, 10);
solve(10, 12);
solve('0', 1);