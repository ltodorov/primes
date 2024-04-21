import { describe, expect, test } from "vitest"
import { getPrimeList } from "./get-prime-list.js"

describe("getPrimeList", () => {
    test("returns prime numbers between 1 and 20", () => {
        const result = getPrimeList(20)
        expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
    })

    test("returns prime numbers if negative max", () => {
        const result = getPrimeList(-10)
        expect(result).toEqual([2, 3, 5, 7])
    })
})
