import theme from './theme.js';

// Create app
var app = angular.module('myApp', ['react']);

// Theming:
const USE_THEME = false;
if (USE_THEME) {
    app.value('ModalComponent', Modal.default.modal.self({theme}));

} else {
    app.value('ModalComponent', Modal.default.modal.self());
}

// Create controller
app.controller('appCtrl', function($scope) {

    // NOTE: container props are applied at runtime
        // those specified by the modal_bundle.js are applied at build time

    $scope.props =  {
        text        : 'Example text goes here. Something really long and informative would be great.',
        title       : 'Title of My Header',
        confirm_text: 'OK',
        cancel_text : 'CANCEL',
        handleClickConfirm: function(e) {
            console.log('CONFIRM', e);

        },
        handleClickCancel: function(e) {
            console.log('CANCEL', e);
        }
    };

});