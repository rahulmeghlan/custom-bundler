const isModern = process.env.BROWSERSLIST_ENV === 'modern';
const path = require('path');
const buildRoot = path.resolve(__dirname, "dist");

module.exports = {
    entry: [
        isModern ? './polyfills.modern.js' : './polyfills.legacy.js',
        "./example/entry.js"
    ],
    output: {
        path: path.join(buildRoot, isModern ? 'modern' : 'legacy'),
        filename: 'bundle.[hash].js',
    },
    module: {
        rules: [
            {test: /\.js?$/, use: "babel-loader"},
        ]
    }
};
