import select from "@inquirer/select"
import chalk from "chalk"
import { afterEach, describe, expect, it, vi } from "vitest"

vi.mock("@inquirer/select", () => ({
    default: vi.fn().mockRejectedValue("Error"),
}))

describe("index", () => {
    afterEach(() => {
        vi.resetAllMocks()
    })

    it("should log error", async () => {
        const logSpy = vi.spyOn(console, "error").mockImplementation(() => {})
        vi.mocked(select).mockResolvedValue("missing")
        await import("../index.js")
        expect(logSpy).toHaveBeenCalledTimes(1)
    })
})
