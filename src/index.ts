import select from "@inquirer/select"

try {
    const method = await select(
        {
            message: "Please select command",
            choices: [
                {
                    name: "Prime Factors",
                    value: "prime-factors",
                    description:
                        "Returns the prime factors of the entered number",
                },
                {
                    name: "Prime Numbers",
                    value: "prime-numbers",
                    description:
                        "Returns all prime numbers that are bellow the entered number",
                },
                {
                    name: "Greatest Common Divisor (GCD)",
                    value: "gcd",
                    description:
                        "Returns the greatest common divisor of two numbers",
                },
                {
                    name: "Lowest Common Multiple (LCM)",
                    value: "lcm",
                    description:
                        "Returns the lowest common multiple of the entered numbers",
                },
            ],
        },
        {
            clearPromptOnDone: true,
        },
    )
    const module = `./commands/${method}.js`
    await import(module)
} catch (err) {
    console.error(err)
}
