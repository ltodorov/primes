import { describe, expect, test } from "vitest"
import { getPrimeNumbers } from "../get-prime-numbers.js"

describe("getPrimeNumbers", () => {
    test("returns prime numbers between 1 and 20", () => {
        const result = getPrimeNumbers(20)
        expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
    })

    test("returns prime numbers if negative max", () => {
        const result = getPrimeNumbers(-10)
        expect(result).toEqual([2, 3, 5, 7])
    })
})
