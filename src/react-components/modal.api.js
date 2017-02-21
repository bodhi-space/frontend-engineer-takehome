import React from 'react';
import ReactDOM from 'react-dom';

import ThemeHOCFactory from './ThemeHOC/Theme.HOC.js';

// Components
import ModalComponent from './Modal/Modal.component.js';

export default {

    // Use one or the other:
    self: (config) => {
        config      = config || {};
        let theme   = config.theme;
        
        return ThemeHOCFactory(theme)(ModalComponent);

        // return ModalComponent;
    },
    new: (config) => {
        // TODO: test!

        config      = config || {};
        let theme   = config.theme;

        let ThemedModalComponent = ThemeHOCFactory(theme)(ModalComponent);

        return {
            render: (props) => {
                ReactDOM.render(
                    <ThemedModalComponent props={props} />
                );
            }
        };

    }

};