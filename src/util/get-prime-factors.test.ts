import { describe, expect, test } from "vitest"
import { getPrimeFactors } from "./get-prime-factors.js"

describe("getPrimeFactors", () => {
    test("returns zero prime factors for 1", () => {
        const result = getPrimeFactors(1)
        expect(result).toEqual([])
    })

    test.each([
        [[2], 2],
        [[7, 11], 77],
        [[2, 2, 3, 5, 7], 420],
        [[5, 7], -35],
    ])("returns %o for %i", (expected, num) => {
        const result = getPrimeFactors(num)
        expect(result).toEqual(expected)
    })
})
