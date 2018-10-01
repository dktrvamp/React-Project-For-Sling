const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('app.css');
const packageData = require('./package');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
const buildConfig = {
    environment: 'dev',
    platform: 'browser',
    brand: 'sling',
    buildDate: new Date().toISOString(),
    title: 'React Project'
};
// It is responsible for rendering the `index.ejs` template with
// the config passed into it. It also automatically inserts
// all js and css bundles outputted by Webpack. Magic!
// https://github.com/ampedandwired/html-webpack-plugin#basic-usage
const htmlEntry = new HtmlPlugin({
    title: buildConfig.title,
    template: 'index.ejs',
    inject: 'body',
    buildConfig
});

const plugins = [
    extractCSS,
    htmlEntry,
    new OptimizeCssAssetsPlugin()
];

// Keeps Webpack from being so verbose in its logging.
// https://webpack.js.org/configuration/stats/#stats
const stats = {
    // Add asset Information
    assets: false,
    // Add build date and time information
    builtAt: true,
    // Show cached assets (setting this to `false` only shows emitted files)
    cachedAssets: true,
    // Add children information
    children: false,
    chunks: false,
    // Add collors
    colors: true,
    // Add chunk information (setting this to `false` allows for a less verbose output)
    chunks: false,
    // Add built modules information
    modules: false
};

module.exports = {
    mode: 'development',
    stats,
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },

            // For all referenced .css and scss files, use the sass-loader and
            // then pipe its output to the css-loader. Finally pipe the output
            // to our instance of the ExtractTextPlugin.
            // https://github.com/jtangelder/sass-loader#sass-loader-for-webpack
            // https://github.com/webpack/css-loader#css-loader-for-webpack
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
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
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins
};
