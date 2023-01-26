const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/**/*.{svelte,html,js}',
    ],
    theme: {
        fontFamily: {
            display: ['Archivo Black', 'Impact', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            blue: {
                DEFAULT: '#375fc0',
                dark: '#284893',
            },
            pink: {
                DEFAULT: '#ff304f',
                dark: '#db2944',
            },
            tech: {
                golang: '#007d9c',
                vuejs: '#42b983',
                svelte: '#ff3e00',
                tailwind: '#38b2ac',
                csharp: '#662079',
                nodejs: '#026e00',
                feathers: '#D513A5',
                sql: '#e97b00',
                docker: '#003f8c',
            },
        },
        extend: {
            spacing: {
                'screen-4/5': '80vh',
            }
        }
    },
};
