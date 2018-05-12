const path = require('path');

const tsRule = {
    test: /\.ts$/,
    use: 'ts-loader',
    exclude: /node_modules/
};

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [tsRule]
    },
    resolve: {
        extensions: ['.ts', '.js'] 
    }
}