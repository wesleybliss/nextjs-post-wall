import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ['selector', '[data-mode="dark"]'],
    theme: {},
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: ['garden', 'sunset'],
    },
}

export default config
