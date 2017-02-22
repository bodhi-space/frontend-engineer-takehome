import React from 'react';
import ReactDOM from 'react-dom';

import ThemeHOCFactory from '../ThemeHOC/Theme.HOC.js';

// Components
import ButtonComponent from './Button.component.js';

export default {

    // Use one or the other:
    getClass: (config) => {                 // react, ngreact
        config      = config || {};
        let theme   = config.theme;
        return ThemeHOCFactory(theme)(ButtonComponent);

    },
    new: (config) => {                  // other
        // TODO: test!

        config      = config || {};
        let theme   = config.theme;

        let ThemedButtonComponent = ThemeHOCFactory(theme)(ButtonComponent);

        return {

            // TODO: need other methods!

            render: (props) => {
                ReactDOM.render(
                    <ThemedButtonComponent props={props} />
                    );
            }
        };

    }

};