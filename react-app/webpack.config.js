(function() {
    'use strict';

    module.exports = [
        {
            name: 'react-app',
            entry: './react-app/app.js',
            output: {
                filename: './react-app/bundle.js',
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
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
            },
            node: {
                console: true,
                fs: 'empty',
                tls: 'empty',
                net: 'empty'
            }
        }
    ];

})();
