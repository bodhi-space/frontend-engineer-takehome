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
            }]
        }
    }
    
    angular.module('takeHomeApp').directive('visualizeData', directive)
})();
