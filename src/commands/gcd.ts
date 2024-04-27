import input from "@inquirer/input"
import { getGcd } from "../util/get-gcd.js"
import { validateTwoNumbers } from "../util/validate.js"
import { command } from "./command.js"

command<number>("Greatest Common Divisor (GCD)", async () => {
    const answer = await input({
        message: "Please enter two numbers separated by comma",
        validate: validateTwoNumbers,
    })
    const [a, b] = answer.split(",").map(item => Number.parseInt(item, 10))
    const res = getGcd(a, b)
    return [`The greatest common divisor of ${a} and ${b} is`, res]
})
