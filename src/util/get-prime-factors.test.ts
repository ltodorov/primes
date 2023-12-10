import { describe, test } from "node:test";
import assert from "node:assert";
import { getPrimeFactors } from "./get-prime-factors.js";

describe("getPrimeFactors", () => {
    test("returns zero prime factors for 1", () => {
        const result = getPrimeFactors(1);
        assert.deepStrictEqual(result, []);
    });

    const scenarios: [number, number[]][] = [
        [2, [2]],
        [77, [7, 11]],
        [420, [2, 2, 3, 5, 7]],
        [-35, [5, 7]],
    ];
    scenarios.forEach(opt => {
        test(`returns ${opt[1]} for ${opt[0]}`, () => {
            const result = getPrimeFactors(opt[0]);
            assert.deepStrictEqual(result, opt[1]);
        });
    });
});