import { describe, expect, test } from "vitest"
import { getLcm } from "./get-lcm.js"

describe("getLcm (Least Common Multiple)", () => {
    test.each([
        [6, [2, 3]],
        [8, [4, 8]],
        [9, [3, 9]],
        [18, [3, 2, 9]],
        [36, [3, 4, 9]],
    ])("returns %i for %o", (expected, params) => {
        const result = getLcm(...params)
        expect(result).toBe(expected)
    })
})
