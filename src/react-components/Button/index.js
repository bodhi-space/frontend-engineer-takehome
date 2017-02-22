import React from 'react';
import ReactDOM from 'react-dom';

import ThemeHOCFactory from '../ThemeHOC/Theme.HOC.js';

// Components
import EchoButton from './Button.component.js';

export default {

    // Use one or the other:
    getClass: (config) => {                 // react, ngreact
        config      = config || {};
        let theme   = config.theme;
        return ThemeHOCFactory(theme)(EchoButton);

    },
    new: (config) => {                  // other
        // TODO: test!

        config      = config || {};
        let theme   = config.theme;

        let ThemedEchoButton = ThemeHOCFactory(theme)(EchoButton);

        return {

            // TODO: need other methods!

            render: (props) => {
                ReactDOM.render(
                    <ThemedEchoButton props={props} />
                    );
            }
        };

    }

};