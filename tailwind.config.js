/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}', // if using Next.js
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // if using the app directory
    ],
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.200'),
                        a: { color: theme('colors.blue.400') },
                        h2: {
                            color: theme('colors.blue.300'),
                            marginTop: '2em',
                            marginBottom: '1em',
                        },
                        h3: {
                            color: theme('colors.blue.200'),
                            marginTop: '1.5em',
                            marginBottom: '0.75em',
                        },
                        strong: { color: theme('colors.gray.100') },
                        code: { color: theme('colors.pink.400') },
                        'ul > li::before': { backgroundColor: theme('colors.blue.500') },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: { color: theme('colors.blue.400') },
                        h2: { color: theme('colors.blue.300') },
                        h3: { color: theme('colors.blue.200') },
                        strong: { color: theme('colors.gray.100') },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
