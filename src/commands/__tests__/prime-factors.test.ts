import chalk from "chalk"
import { afterEach, describe, expect, it, vi } from "vitest"

vi.mock("@inquirer/input", () => ({
    default: vi.fn().mockResolvedValue("15"),
}))

describe("primeFactors", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should log name and single result", async () => {
        expect.assertions(2)
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {})
        await import("../prime-factors.js")
        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            chalk.greenBright("Prime Factors"),
        )
        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            `The prime factors of 15 are ${chalk.yellow(chalk.bold("3,5"))}`,
        )
    })
})
