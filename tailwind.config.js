const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: false,
    theme: {
        fontFamily: {
            display: ['Archivo Black', 'Impact', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
        },
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: {
                default: '#375fc0',
                dark: '#284893',
            },
            pink: {
                default: '#ff304f',
                dark: '#db2944',
            },
        },
        extend: {
            spacing: {
                'screen-4/5': '80vh',
            }
        }
    },
};