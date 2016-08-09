(function() {
    function directive() {
        return {
            templateUrl: 'visualize.data.tpl.html',
            scope: {
                //edit this             
            },
            restrict: 'E',
            controller: ['$scope', 'transformFactory', function($scope, transformFactory) {
                console.log('directive working') 
                // add your directive functionality here 
                // you  should pass in the raw SalesTransactions from the controller in scope
                // then call the transformFactory function or functions to transform the data
                // then pass it to the directive template (which you should also edit)
            }]
        }
    }
    
    angular.module('takeHomeApp').directive('visualizeData', directive)
})();
