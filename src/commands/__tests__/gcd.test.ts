import chalk from "chalk"
import { afterEach, describe, expect, it, vi } from "vitest"

vi.mock("@inquirer/input", () => ({
    default: vi.fn().mockResolvedValue("2, 8"),
}))

describe("gcd", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should log name and result", async () => {
        expect.assertions(2)
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {})
        await import("../gcd.js")
        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            chalk.greenBright("Greatest Common Divisor (GCD)"),
        )
        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            `The greatest common divisor of 2 and 8 is ${chalk.yellow(
                chalk.bold(2),
            )}`,
        )
    })
})
