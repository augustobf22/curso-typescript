function multiply(num1: number, num2: number) {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        console.log("Os parametros devem ser números!")
    } else {
        return num1 * num2;
    }
}

function sum(num1: number, num2: number) {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        console.log("Os parametros devem ser números!")
    } else {
        return num1 + num2;
    }
}

function isEven(num: number) {
    if(typeof num !== "number") {
        console.log("O parametro deve ser número!")
    } else {
        return num % 2 === 0;        
    }
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1 = Number(prompt("First Number"));
    const num2 = Number(prompt("Second Number"));
    
    let result = sum(num1,num2);
    result += multiply(1,2);
    showResult(result);
})();
