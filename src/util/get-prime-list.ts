import { checkPrimeSync } from "node:crypto";

function getPrimeList(max: number): number[] {
    const list: number[] = [];

    for (let i = 2; i <= Math.abs(max); i += 1) {
        if (checkPrimeSync(BigInt(i))) {
            list.push(i);
        }
    }

    return list;
}

export {
    getPrimeList,
};