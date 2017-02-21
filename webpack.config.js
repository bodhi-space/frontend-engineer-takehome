(function() {

    'use strict';

    var CopyWebpackPlugin = require('copy-webpack-plugin');

    module.exports = [
        {
            name: 'modal',
            entry: './src/react-components/component.api.js',
            output: {
                filename: './dist/component_bundle.js',
                library: ['Components'],
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
            name: 'angular_container',
            entry: './src/angular_container.js',
            output: {
                filename: './dist/index.js',
                libraryTarget: 'umd'
            },
            plugins: [
                new CopyWebpackPlugin([
                    { from: './src/angular_container.html', to: './dist/angular_index.html' }
                ])
            ]
        },

        // {
        //     name: 'react_container',
        //     entry: './src/react_container.js',
        //     output: {
        //         filename: './dist/index.js',
        //         libraryTarget: 'umd'
        //     },
        //     plugins: [
        //         new CopyWebpackPlugin([
        //             { from: './src/react_container.html', to: './dist/react_index.html' }
        //         ])
        //     ]
        // }

    ];

})();
