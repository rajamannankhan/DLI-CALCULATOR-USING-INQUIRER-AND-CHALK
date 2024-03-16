import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.yellow("<<--HELLO WELCOME TO CALCULATOR-->>"));

const answer = await inquirer.prompt([
  {
    name: "input1",
    message: chalk.blue("Enter your first number"),
    type: "number",
  },
  {
    name: "input2",
    message: chalk.green("Enter your second number"),
    type: "number",
  },
  {
    name: "operator",
    message:chalk.redBright ("select operation"),
    type: "list",
    choices: ["addition", "substraction", "division", "multiply"],
  },
]);

if (answer.operator === "addition") {
  console.log(answer.input1 + answer.input2);
} else if (answer.operator === "substraction") {
  console.log(answer.input1 - answer.input2);
} else if (answer.operator === "division") {
  console.log(answer.input1 / answer.input2);
} else if (answer.operator === "multiply") {
  console.log(answer.input1 * answer.input2);
} else "enter valid number";

console.log(chalk.italic.bold.magenta("<< THIS IS YOUR ANSWER >>"));
