import inquirer from "inquirer";
let calculator = await inquirer.prompt([{
        name: "sum",
        type: "number",
        message: "enter your  first number"
    },
    { name: "sum1",
        type: "number",
        message: "enter your second number" },
    {
        name: "operator",
        type: "list",
        message: "select your operator",
        choices: ["add", "subtract"]
    },
]);
let result;
switch (calculator.operator) {
    case "add":
        result = calculator.sum + calculator.sum1;
        console.log("the answer for addition is:  " + result);
}
