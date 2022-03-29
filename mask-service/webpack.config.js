var path = require('path');

module.exports = {
    entry: './src/index.ts',
    target: "node",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve("../src/main/resources", 'js-code'),
        filename: 'json-mask.js'
    },
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/
            }
        ]
    },

}