var app = angular.module('myApp', ['react']);

app.value('ModalComponent', Modal.default.modal.self());

app.controller('appCtrl', function($scope) {

    $scope.props =  {
        text        : 'Example text goes here...',
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