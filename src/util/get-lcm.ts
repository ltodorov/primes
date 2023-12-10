import { getGcd } from "./get-gcd.js";

function getLcm(...params: number[]) {
    return params.reduce((acc, num) => getLcmOfTwo(acc, num));
}

function getLcmOfTwo(a: number, b: number) {
    const gcd = getGcd(a, b);
    return (a * b) / gcd;
}

export {
    getLcm,
};