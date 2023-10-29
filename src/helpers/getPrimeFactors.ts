import { checkPrimeSync } from "node:crypto"

function getPrimeFactors(inputNum: number, result: number[] = []): number[] {
    for (let i = 2; inputNum > 1; i++) {
        if (checkPrimeSync(BigInt(i)) && inputNum % i === 0) {
            result.push(i)
            return getPrimeFactors(inputNum / i, result)
        }
    }

    return result
}

export {
    getPrimeFactors,
}