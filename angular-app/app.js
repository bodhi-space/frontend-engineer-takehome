// Create app
var app = angular.module('myApp', ['react']);

// Create controller
app.controller('appCtrl', function($scope, $http) {
    $http.get('http://localhost:3000/PurchaseOrders').success(function(response) {
        console.log('response!', response);
        return response.data;
    });
});