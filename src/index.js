import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './react-containers/Main';
import Store from './store';

ReactDOM.render(
	<Provider store={Store}>
		<Main />
	</Provider>
	,document.getElementById('root')
);