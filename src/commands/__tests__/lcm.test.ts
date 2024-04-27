import chalk from "chalk"
import { afterEach, describe, expect, it, vi } from "vitest"

vi.mock("@inquirer/input", () => ({
    default: vi.fn().mockResolvedValue("2, 3, 9"),
}))

describe("lcm", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should log name and result", async () => {
        expect.assertions(2)
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {})
        await import("../lcm.js")
        expect(logSpy).toHaveBeenNthCalledWith(
            1,
            chalk.greenBright("Lowest Common Multiple (LCM)"),
        )
        expect(logSpy).toHaveBeenNthCalledWith(
            2,
            `The lowest common multiply of 2,3,9 is ${chalk.yellow(
                chalk.bold(18),
            )}`,
        )
    })
})
