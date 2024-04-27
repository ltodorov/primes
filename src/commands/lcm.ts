import input from "@inquirer/input"
import { getLcm } from "../util/get-lcm.js"
import { validateTwoOrMoreNumbers } from "../util/validate.js"
import { command } from "./command.js"

command<number>("Lowest Common Multiple (LCM)", async () => {
    const answer = await input({
        message: "Please enter two numbers separated by comma",
        validate: validateTwoOrMoreNumbers,
    })
    const numbers = answer.split(",").map(item => Number.parseInt(item, 10))
    const res = getLcm(...numbers)
    return [`The lowest common multiply of ${numbers} is`, res]
})
