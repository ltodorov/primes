import { describe, expect, it } from "vitest"
import {
    validateOneNumber,
    validateTwoNumbers,
    validateTwoOrMoreNumbers,
} from "../validate.js"

describe("validate", () => {
    describe("one number", () => {
        it("should return false if the argument is not an integer", () => {
            const result = validateOneNumber("a")
            expect(result).toBe(false)
        })

        it("should return true if the argument is one digit", () => {
            const result = validateOneNumber("1")
            expect(result).toBe(true)
        })

        it("should return true if the argument is two digits", () => {
            const result = validateOneNumber("12")
            expect(result).toBe(true)
        })
    })

    describe("two numbers", () => {
        it("should return true if the argument has two numbers separated by comma", () => {
            const result = validateTwoNumbers("1,2")
            expect(result).toBe(true)
        })

        it("should return true if the argument has two numbers separated by space and comma", () => {
            const result = validateTwoNumbers("1, 2")
            expect(result).toBe(true)
        })

        it("should return false if the argument has not an integer", () => {
            const result = validateTwoNumbers("1,a")
            expect(result).toBe(false)
        })

        it("should return false if the argument has more than two numbers", () => {
            const result = validateTwoNumbers("1,2,3")
            expect(result).toBe(false)
        })
    })

    describe("two or more numbers", () => {
        it("should return true if the argument has two numbers separated by comma", () => {
            const result = validateTwoOrMoreNumbers("1,2")
            expect(result).toBe(true)
        })

        it("should return true if the argument has two numbers separated by space and comma", () => {
            const result = validateTwoOrMoreNumbers("1, 2")
            expect(result).toBe(true)
        })

        it("should return false if the argument has three numbers", () => {
            const result = validateTwoOrMoreNumbers("1,2,3")
            expect(result).toBe(true)
        })

        it("should return false if the argument has four numbers", () => {
            const result = validateTwoOrMoreNumbers("1, 2, 3, 4")
            expect(result).toBe(true)
        })

        it("should return false if the argument has not an integer", () => {
            const result = validateTwoOrMoreNumbers("1, 2.3, 2")
            expect(result).toBe(false)
        })
    })
})
