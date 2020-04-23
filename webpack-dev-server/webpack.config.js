const path = require('path')
const MiniCSSExtracPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js')
},
    output: {
    path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test:  /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtracPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Plugins'
        }),
        new MiniCSSExtracPlugin({
            filename: 'css/[name].css'
        })
    ]
}