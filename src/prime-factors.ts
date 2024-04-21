import { createInterface } from "node:readline"
import chalk from "chalk"
import { getPrimeFactors } from "./util/get-prime-factors.js"

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.on("line", input => {
    const toNum = Number.parseInt(input, 10)
    if (Number.isNaN(toNum)) {
        console.log(chalk.red(`${input} is not a number`))
    } else {
        console.log(
            `The prime factors of ${chalk.cyan(toNum)} are [${chalk.yellow(
                getPrimeFactors(toNum),
            )}]`,
        )
        readline.close()
    }
})

console.log(chalk.green("Please enter a number"))
