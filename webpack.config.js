(function() {

    'use strict';

    var CopyWebpackPlugin = require('copy-webpack-plugin');

    module.exports = [
        // {
        // 	entry: './src/index.js',
        // 	output: {
        // 		filename: './dist/bundle.js',
        // 		library: ['MyLib'],
        // 		libraryTarget: 'umd'
        // 	}
        // },
        {
            name: 'modal',
            entry: './src/react-components/Modal/Modal.api.js',
            output: {
                filename: './dist/modal_bundle.js',
                library: ['Modal'],
                libraryTarget: 'umd'
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                        loader: "file"
                    },
                    {
                        test: /\.scss$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'style-loader'  // creates style nodes from JS strings
                            },
                            {
                                loader: 'css-loader',   // translates CSS into CommonJS
                                options: {
                                    modules: true,
                                    localIdentName: 'echo-component-[name]-[hash:base64:5]'
                                }
                            },
                            {
                                loader: "sass-loader"   // compiles Sass to CSS
                            }
                        ]
                    }
                ]
            }
        },

        {
            name: 'modal_container',
            entry: './src/modal_container.js',
            output: {
                filename: './dist/index.js',
                libraryTarget: 'umd'
            },
            plugins: [
                new CopyWebpackPlugin([
                    { from: './src/modal_container.html', to: './dist/index.html' }
                ])
            ]
        }

    ];

})();
