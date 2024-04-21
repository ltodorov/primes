import { checkPrimeSync } from "node:crypto"

function getPrimeFactors(inputNum: number, result: number[] = []): number[] {
    const number = Math.abs(inputNum)
    for (let i = 2; number > 1; i++) {
        if (checkPrimeSync(BigInt(i)) && number % i === 0) {
            result.push(i)
            return getPrimeFactors(number / i, result)
        }
    }

    return result
}

export { getPrimeFactors }
