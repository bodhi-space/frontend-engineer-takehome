import React from 'react';
import ReactDOM from 'react-dom';
import Svelte from 'react-svelte-components';
import { HelloWorld } from './svelte-components/HelloWorld/HelloWorld.js';

ReactDOM.render(
	<Svelte src={HelloWorld} />
	,document.getElementById('root')
);