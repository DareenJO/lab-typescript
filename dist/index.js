"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const Fstr = (0, readline_sync_1.question)('Enter the first number: \n');
    const operation = (0, readline_sync_1.question)('Enter the operator: \n');
    const Sstr = (0, readline_sync_1.question)('Enter the second number: \n');
    const validInput = isNumber(Fstr) && isOperator(operation) && isNumber(Sstr);
    if (validInput) {
        const firstNum = parseInt(Fstr);
        const secondNum = parseInt(Sstr);
        const res = calculate(firstNum, operation, secondNum);
        console.log(res);
    }
    else {
        console.log('\n invalid input \n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
main();
console.log('----------------------------------------------------------');
console.log('----------------------------------------------------------');
const user1 = {
    name: 'Dareen',
    age: 25,
    Specialization: "Information System",
};
console.log(user1.name);
console.log(user1.age);
console.log(user1.Specialization);
