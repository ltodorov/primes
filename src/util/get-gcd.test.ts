import { describe, expect, test } from "vitest"
import { getGcd } from "./get-gcd.js"

describe("getGCD (Greatest Common Divisor)", () => {
    test.each([
        [1, 2, 3],
        [2, 2, 4],
        [3, 3, 9],
    ])("returns %i for %i and %i", (expected, a, b) => {
        const result = getGcd(a, b)
        expect(result).toBe(expected)
    })
})
