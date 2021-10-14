module.exports = {
    extends: '@snowpack/app-scripts-react',
    mount: {
        assets: '/'
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-postcss',
        '@snowpack/plugin-optimize'
    ]
};