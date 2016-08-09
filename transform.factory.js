(function() {
    function factory() {
        console.log('factory working')
        //your code goes here, this return statement is just a placeholder to 
        // avoid angular error
        // return a function or functions to transform the data as specified in the 
        // README.md
        return {};
    }
    
    angular.module('takeHomeApp').factory('transformFactory', factory)
})();
