import assert from "node:assert";
import { describe, test } from "node:test";
import { getLcm } from "./get-lcm.js";

describe("getLcm (Least Common Multiple)", () => {
    const scenarios: [number[], number][] = [
        [[2, 3], 6],
        [[4, 8], 8],
        [[3, 9], 9],
        [[3, 2, 9], 18],
        [[3, 4, 9], 36],
    ];
    scenarios.forEach(opt => {
        test(`returns ${opt[1]} for ${opt[0]}`, () => {
            const result = getLcm(...opt[0]);
            assert.deepStrictEqual(result, opt[1]);
        });
    });
});