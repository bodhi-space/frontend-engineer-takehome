import React from 'react';
import ReactDOM from 'react-dom';
import ModalComponent from './Modal.component.js';
// import Emitter from "./emitters/Emitter";

export default {

    config: function (config) {

    },

    modal: {

        self: () => {
            return ModalComponent;
        },

        new: (config) => {

            // TODO

            // return {
            //     render: ''
            // };

        }

    }

};