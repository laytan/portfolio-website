const plugins = [
    require('tailwindcss'),
    require('autoprefixer'),
];


if (process.env.NODE_ENV !== 'development') {
    plugins.push(require('@fullhuman/postcss-purgecss')({
        content: ['src/*.html'],
    }));
}

module.exports = {
    plugins,
};