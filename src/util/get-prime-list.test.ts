import { describe, test } from "node:test";
import assert from "node:assert";
import getPrimeList from "./get-prime-list.js";

describe("getPrimeList", () => {
    test("returns prime numbers between 1 and 20", () => {
        const result = getPrimeList(20);
        assert.deepEqual(result, [2, 3, 5, 7, 11, 13, 17, 19]);
    });

    test("returns prime numbers if negative max", () => {
        const result = getPrimeList(-10);
        assert.deepEqual(result, [2, 3, 5, 7]);
    });
});