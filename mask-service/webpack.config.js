var path = require('path');

module.exports = {
    entry: './src/index.ts',
    target: "web",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve("../src/main/resources", 'js-code'),
        filename: 'json-mask.js',
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/
            }
        ]
    },

}