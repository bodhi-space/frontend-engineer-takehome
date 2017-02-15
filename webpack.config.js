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
	}
];