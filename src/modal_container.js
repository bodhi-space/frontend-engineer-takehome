var app = angular.module('myApp', ['react']);

app.value('ModalComponent', Modal.default.button.self());

app.controller('appCtrl', function($scope) {
    $scope.props =  {
        text        : 'Example text goes here...',
        title       : 'Title of My Header',
        confirm_text: 'OK',
        cancel_text : 'CANCEL'
    };
});
