module.exports = {
    mode: 'production',
    entry: './src/style.sass',
    output: {
        filename: 'style.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}