function getGcd(x: number, y: number) {
    let res = x
    if (y > 0) {
        res = getGcd(y, x % y)
    }
    return res
}

export { getGcd }
