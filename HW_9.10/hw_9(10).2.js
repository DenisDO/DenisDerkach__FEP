// let FibonacciArr = [1, 1];

// function fibonacci(n) {
//     let number = +n;
//     if (number === 1 || number === 2) {
//         console.log(`Fibonacci number ${number} is 1`);
//     } else {
//         for (let i = 2; i < number; i++) {
//             FibonacciArr[i] = FibonacciArr[i - 1] + FibonacciArr[i - 2];
//         }
//         console.log(`Fibonacci number ${number} is ${FibonacciArr[number - 1]}`);
//     }
// }

// let number = "32";

// if (+number === false || number < 1) {
//     console.log("No fibonacci number");
// } else {
//     fibonacci(number);
// }

let number = "53";

function fibonacci(n) {
    let number = +n;
    if (number === 1 || number === 2) {
        return console.log(`Fibonacci number ${number} is 1`);
    } else {
        let a = Math.sqrt(5);

        let b1 = (1 + a) / 2;
        let b2 = (1 - a) / 2;
    
        let c1 = Math.pow(b1, n);
        let c2 = Math.pow(b2, n);
    
        let d = (c1 - c2) / a;
    
        if (n > 102) {
            return console.log(d);
        } else {
            d = parseInt(d);
            return console.log(d);
        }
    }
}

if (+number === false || number < 1) {
    console.log("No fibonacci number");
} else {
    fibonacci(number);
}