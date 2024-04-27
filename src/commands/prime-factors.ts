import input from "@inquirer/input"
import { getPrimeFactors } from "../util/get-prime-factors.js"
import { toBe } from "../util/to-be.js"
import { validateOneNumber } from "../util/validate.js"
import { command } from "./command.js"

command("Prime Factors", async () => {
    const answer = await input({
        message: "Please enter a number",
        validate: validateOneNumber,
    })
    const number = Number.parseInt(answer, 10)
    const res = getPrimeFactors(number)
    return [`The prime factors of ${number} ${toBe(res)}`, res]
})
