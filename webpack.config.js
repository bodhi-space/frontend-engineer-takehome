module.exports = {
	entry: './src/index.js',
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(svelte|js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				loader: 'svelte-loader'
			},
			{
				test: /\.png|\.svg|\.ttf|\.woff2|\.woff|\.eot/,
				loader: require.resolve("file-loader")
			}
		],
		noParse: /\.svelte$/
	}
}