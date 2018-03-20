module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
                        // For all referenced image and font files, use the file-loader.
            // It will copy all of these files to the ./[output.path]/assets
            // folder and rename them with the the pattern [name]_[hash:7].[ext].
            // https://github.com/webpack/file-loader#file-loader-for-webpack
            {
                test: /\.(jpg|png|ico|svg|eot|ttf|otf|woff2?)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name]_[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};
