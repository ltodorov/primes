import { createInterface } from "node:readline"
import chalk from "chalk"
import { getLcm } from "./util/get-lcm.js"

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.on("line", input => {
    const numbers = input.split(",").map(item => Number.parseInt(item, 10))

    if (numbers.some(num => Number.isNaN(num))) {
        console.log(chalk.red(`${input} contains not a number`))
    } else {
        console.log(
            `Lowest common multiple: ${chalk.yellow(getLcm(...numbers))}`,
        )
        readline.close()
    }
})

console.log(chalk.green("Please enter numbers. Ex. 3, 4, 9"))
