import chalk from "chalk"

async function command<T>(name: string, result: () => Promise<[string, T]>) {
    console.log(chalk.greenBright(name))
    try {
        const [input, output] = await result()
        console.log(`${input} ${chalk.yellow(chalk.bold(output))}`)
    } catch (err) {
        console.error(err)
    }
}

export { command }
