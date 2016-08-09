(function() {
    function factory() {
        console.log('factory working')
        //your code goes here, this return statement is just a placeholder to 
        // avoid angular error
        return {};
    }
    
    angular.module('takeHomeApp').factory('transformFactory', factory)
})();
