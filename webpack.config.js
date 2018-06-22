

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    //import js as well as jsx by default
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //put it into dist/main.js
    output: {
        filename: 'main.js'
    }
};
