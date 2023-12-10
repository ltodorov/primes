import { createInterface } from "node:readline";
import chalk from "chalk";
import { getPrimeList } from "./util/get-prime-list.js";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on("line", input => {
    const toNum = parseInt(input, 10);
    if (isNaN(toNum)) {
        console.log(chalk.red(`${input} is not a number`));
    } else {
        console.log(`Prime numbers: ${chalk.yellow(getPrimeList(toNum))}`);
        readline.close();
    }
});

console.log(chalk.green("Please enter the maximum number"));