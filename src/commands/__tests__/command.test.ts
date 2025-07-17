import chalk from "chalk"
import { afterEach, describe, expect, it, vi } from "vitest"
import { command } from "../command.js"

describe("command", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should log the name and the result", async () => {
        expect.assertions(2)
        const name = "Test command"
        const result = 123
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {})

        await command<number>(name, () =>
            Promise.resolve(["Result is", result]),
        )

        expect(logSpy).toHaveBeenNthCalledWith(1, chalk.greenBright(name))
        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            `Result is ${chalk.yellow(chalk.bold(result))}`,
        )
    })

    it("should log error", async () => {
        expect.assertions(1)
        const name = "Test command"
        const logSpy = vi.spyOn(console, "error").mockImplementation(() => {})

        await command<number>(name, () => Promise.reject("Error"))

        expect(logSpy).toHaveBeenCalledWith("Error")
    })
})
