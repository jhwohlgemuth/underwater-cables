module.exports = {
    env: {
        es6: true,
        jest: true,
        browser: true
    },
    extends: [
        'omaha-prime-grade',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:promise/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'jsx-a11y'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    }
};