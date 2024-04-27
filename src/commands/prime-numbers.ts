import input from "@inquirer/input"
import { getPrimeNumbers } from "../util/get-prime-numbers.js"
import { toBe } from "../util/to-be.js"
import { validateOneNumber } from "../util/validate.js"
import { command } from "./command.js"

command("Prime Numbers", async () => {
    const answer = await input({
        message: "Please enter the maximum number",
        validate: validateOneNumber,
    })
    const number = Number.parseInt(answer, 10)
    const res = getPrimeNumbers(number)
    return [`The prime numbers of ${number} ${toBe(res)}`, res]
})
