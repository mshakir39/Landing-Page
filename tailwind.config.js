module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/Components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-color": "var(--primary-color)",
                "primary-light-color": "var(--primary-light-color)",
                "secondary-color": "var(--secondary-color)"
            },
        },
    },
    plugins: [],
}