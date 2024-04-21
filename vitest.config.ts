import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        coverage: {
            include: ["src/util/**"],
            thresholds: {
                100: true,
            },
        },
    },
})
