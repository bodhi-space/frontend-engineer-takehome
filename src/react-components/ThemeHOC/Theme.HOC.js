import React from 'react';

// theme classes:
	// primary_color
	// secondary_color
	// logo


function ThemeHOCFactory(theme) {

	return function ThemeHOC(WrappedComponent) {

		class ThemedComponent extends React.Component {


			render() {
				return (<WrappedComponent theme={theme} {...this.props}/>);
			}

		}

		// Set displayName
		ThemedComponent.displayName = `ThemeHOC(${getDisplayName(WrappedComponent)})`;

		return ThemedComponent;



		// Helper Function
		function getDisplayName(WrappedComponent) {
			return WrappedComponent.displayName || 
			WrappedComponent.name || 
			'Component';
		}
		
	};

}

export default ThemeHOCFactory;