import chalk from "chalk"
import { afterEach, describe, expect, it, vi } from "vitest"

vi.mock("@inquirer/input", () => ({
    default: vi.fn().mockResolvedValue("8"),
}))

describe("primeFactors", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should log name and single result", async () => {
        expect.assertions(2)
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {})
        await import("../prime-numbers.js")
        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            chalk.greenBright("Prime Numbers"),
        )
        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            `The prime numbers of 8 are ${chalk.yellow(chalk.bold("2,3,5,7"))}`,
        )
    })
})
