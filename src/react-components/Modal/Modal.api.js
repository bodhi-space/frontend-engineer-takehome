import React from 'react';
import ReactDOM from 'react-dom';
import ModalComponent from './Modal.component.js';
import ThemeHOCFactory from '../ThemeHOC/Theme.HOC.js';
// import Emitter from "./emitters/Emitter";

export default {

    modal: {
        setConfig: function (config) {
            // TODO: make this work
            this.config = config || {};
        },
        self: (config) => {
            config      = config || {};
            let theme   = config.theme;
            
            return ThemeHOCFactory(theme)(ModalComponent);

            // return ModalComponent;
        },

        new: (config) => {

            // TODO

            // return {
            //     render: ''
            // };

        }

    }

};