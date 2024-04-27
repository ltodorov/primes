import { describe, expect, it } from "vitest"
import { toBe } from "../to-be.js"

describe("toBe", () => {
    it("should return are if lenght > 1", () => {
        const result = toBe([1, 2, 3])
        expect(result).toBe("are")
    })

    it("should return is otherwise", () => {
        const result = toBe([1])
        expect(result).toBe("is")
    })
})
