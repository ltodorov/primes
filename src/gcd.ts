import { createInterface } from "node:readline";
import chalk from "chalk";
import { getGcd } from "./util/get-gcd.js";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on("line", input => {
    const [a, b] = input.split(",").map(item => parseInt(item, 10));
    if (isNaN(a) || isNaN(b)) {
        console.log(chalk.red(`${input} contains not a number`));
    } else {
        console.log(`Greatest common divisor: ${chalk.yellow(getGcd(a, b))}`);
        readline.close();
    }
});

console.log(chalk.green("Please enter two numbers. Ex. 3,4"));