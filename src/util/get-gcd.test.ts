import assert from "node:assert";
import { describe, test } from "node:test";
import { getGcd } from "./get-gcd.js";

describe("getGCD (Greatest Common Divisor)", () => {
    const scenarios: [[number, number], number][] = [
        [[2, 3], 1],
        [[2, 4], 2],
        [[3, 9], 3],
    ];
    scenarios.forEach(opt => {
        test(`returns ${opt[1]} for ${opt[0]}`, () => {
            const result = getGcd(...opt[0]);
            assert.deepStrictEqual(result, opt[1]);
        });
    });
});