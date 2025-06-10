var readlineSync = require("readline-sync");

const operators = {
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "%": (a, b) => a % b,
};

const terminalCalculation = () => {
  do {
    const mathOper = getOperator();
    const firstNum = getNumber("first");
    let secondNum = getNumber("second");
    while ((mathOper === "/" || mathOper === "%") && secondNum === 0) {
      console.log("Cannot divide by zero. Please try again.");
      secondNum = getNumber("second");
    }
    const result = getResult(firstNum, secondNum, mathOper);
    console.log(`The result is: ${result}`);
  } while (
    readlineSync.keyInYNStrict("Do you want to perform another calculation? ")
  );
  console.log("Goodbye!");
};
function getOperator() {
  return readlineSync.question("What operation would you like to perform? ", {
    limit: Object.keys(operators),
    limitMessage: "That is not a valid operation",
  });
}
function getNumber(order) {
  return readlineSync.questionInt(`Please enter the ${order} number: `, {
    limitMessage: "This is not a number",
  });
}
function getResult(num1, num2, operator) {
  return operators[operator](num1, num2);
}
terminalCalculation();
