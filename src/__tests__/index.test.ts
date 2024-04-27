import select from "@inquirer/select"
import chalk from "chalk"
import { afterEach, describe, expect, it, vi } from "vitest"

vi.mock("@inquirer/select", () => ({
    default: vi.fn().mockResolvedValue("gcd"),
}))

describe("index", () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should call a command", async () => {
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => {})
        await import("../index.js")
        expect(select).toHaveBeenCalledWith(
            {
                message: "Please select command",
                choices: [
                    {
                        name: "Prime Factors",
                        value: "prime-factors",
                        description:
                            "Returns the prime factors of the entered number",
                    },
                    {
                        name: "Prime Numbers",
                        value: "prime-numbers",
                        description:
                            "Returns all prime numbers that are bellow the entered number",
                    },
                    {
                        name: "Greatest Common Divisor (GCD)",
                        value: "gcd",
                        description:
                            "Returns the greatest common divisor of two numbers",
                    },
                    {
                        name: "Lowest Common Multiple (LCM)",
                        value: "lcm",
                        description:
                            "Returns the lowest common multiple of the entered numbers",
                    },
                ],
            },
            {
                clearPromptOnDone: true,
            },
        )
        expect(logSpy).toHaveBeenCalledWith(
            chalk.greenBright("Greatest Common Divisor (GCD)"),
        )
    })
})
