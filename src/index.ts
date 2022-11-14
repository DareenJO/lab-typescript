
import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main(): void {
  const Fstr: string = question('Enter the first number: \n');
  const operation: string = question('Enter the operator: \n');
  const Sstr: string = question('Enter the second number: \n');

  const validInput: boolean = isNumber(Fstr) && isOperator(operation) && isNumber(Sstr);

  if (validInput) {
    const firstNum: number = parseInt(Fstr);
    const secondNum: number = parseInt(Sstr);
    const res = calculate(firstNum, operation as Operator, secondNum);
    console.log(res);
  }
  else {
    console.log('\n invalid input \n');
    main();
  }

}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
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




function isOperator(operator: string): boolean {
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


function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum
}

main()


console.log('----------------------------------------------------------');
console.log('----------------------------------------------------------');


interface Users{
    name:string;
    age: number;
    Specialization:string
}


const user1:Users={
    name:'Dareen',
    age:25,
    Specialization:"Information System",
}

console.log(user1.name)
console.log(user1.age)
console.log(user1.Specialization)