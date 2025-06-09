var readlineSync = require("readline-sync");

const terminalcalculation = () => {
  const mathOper = getOperator();
  const firstNum = getNumber("Please enter the first number: ");
  const secondNum = getNumber("Please enter the second number: ");
  const result = getResult(firstNum, secondNum, mathOper);
  if (result === null) {
    return terminalcalculation();
  }
  console.log(`The result is: ${result}`);
};
function getOperator() {
  const operators = ["*", "/", "+", "-", "%"];
  while (true) {
    const mathOper = readlineSync.question(
      "What operation would you like to perform? "
    );
    if (operators.includes(mathOper)) {
      return mathOper;
    }
    console.log("That is not a valid operation");
  }
}
function getNumber(prompt) {
  while (true) {
    const input = readlineSync.question(prompt);
    const num = Number(input);
    if (!isNaN(num)) {
      return num;
    }
    console.log("This is not a number");
  }
}
function getResult(num1, num2, operator) {
  if (operator === "-") return num1 - num2;
  if (operator === "+") return num1 + num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") {
    if (num2 === 0) {
      console.log("Can not divide by zero.");
      return null;
    }
    return num1 / num2;
  }
  if (operator === "%") {
    if (num2 === 0) {
      console.log("Can not divide by zero.");
      return null;
    }
    return num1 % num2;
  }
}
terminalcalculation();
