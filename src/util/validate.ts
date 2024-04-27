function validateOneNumber(value: string) {
    return /^\d+$/.test(value)
}

function validateTwoNumbers(value: string) {
    return /^\d+, *\d+$/.test(value)
}

function validateTwoOrMoreNumbers(value: string) {
    return /^\d+(, *\d+)+$/.test(value)
}

export { validateOneNumber, validateTwoNumbers, validateTwoOrMoreNumbers }
