var app = angular.module('takeHomeApp', []);

app.controller('TakeHomeController', [
  '$scope',
  '$http',

  function($scope, $http){
    console.log('TakeHome Started');

    //  Requesting all data from our JSON Data file
    $http.get('SalesTransactions.json')
      .then(function(response) {
        // console.log('response', response);

        // 1) net_total for the entire collection
        $scope.NetTotal = calculateNetTotal(response.data);

        // 2) average net_total per guest for each employee
        $scope.avgNetTotalPerEmployee = calculateAvgTotalPerEmployee(response.data);
        // $scope.SalesTransactionData =
      });
  }]);

function calculateNetTotal(data){
  // Using helper function to extract
  // pieces we want from our JSON file
  var allValues = extractData(data, 'net_total'),
      total = 0;

  // Calculating the net_total of all orders
  for(var prop in allValues){
    total += allValues[prop].value;
  }
  return total;
}

function calculateAvgTotalPerEmployee(data){

}

function extractData(data, type){
  var result = [];

  for(var prop in data){
    // make sure we only extract data
    // equal to the type
    if(data[prop][type]){
      result.push(data[prop][type]);
    }
  }

  return result;
}









