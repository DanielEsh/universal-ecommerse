module.exports = {
    darkMode: 'class',
    content: [
        "../../packages/components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    500: 'var(--primary-500)',
                    400: 'var(--primary-400)',
                    300: 'var(--primary-300)',
                    200: 'var(--primary-200)',
                    100: 'var(--primary-100)',
                },
                secondary: {
                    500: 'var(--secondary-500)',
                    400: 'var(--secondary-400)',
                    300: 'var(--secondary-300)',
                    200: 'var(--secondary-200)',
                    100: 'var(--secondary-100)',
                },
            },
        },
    },
    plugins: [],
};
