import React from 'react';
import ReactDOM from 'react-dom';

import ThemeHOCFactory from './ThemeHOC/Theme.HOC.js';

// Components
import ModalComponent from './Modal/Modal.component.js';
import ButtonComponent from './Button/Button.component.js';
// import Emitter from "./emitters/Emitter";

export default {

    button: {
        // Use one or the other:
        self: (config) => {                 // react, ngreact
            // TODO: make theme-able
            // config      = config || {};
            // let theme   = config.theme;
            // return ThemeHOCFactory(theme)(ButtonComponent);

            return ButtonComponent;

        },
        new: (config) => {                  // other
            // TODO: test!

            config      = config || {};
            let theme   = config.theme;

            let ThemedModalComponent = ThemeHOCFactory(theme)(ButtonComponent);

            return {

                // TODO: need other methods!

                render: (props) => {
                    ReactDOM.render(
                        <ThemedModalComponent props={props} />
                    );
                }
            };

        }


    },

    modal: {

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

    }

};