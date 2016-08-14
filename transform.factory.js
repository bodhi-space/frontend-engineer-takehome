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
        $scope.avgPerEmployee = calculateAvgTotalPerEmployee(response.data);
        $scope.msg = 'Please Click Below'
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
  var obj = {},
      result = {};
      // console.log(data);

  // create an object to hold
    // 1. net_total for each employee
    // 2. Number of quests
  for(var prop in data){
    if(data[prop]['employee'] !== undefined){

      var employeeID = data[prop]['employee'].id;
      var netVal = data[prop]['net_total'].value;
      var questCount = data[prop]['guest_count'];

      if(!obj[employeeID]){
        obj[employeeID] = {
          total: netVal,
          questCount: questCount
        }
      } else {
        obj[employeeID].total += netVal;
        obj[employeeID].questCount += questCount;
      }
    }
  }

  result = calculateAvg(obj);

  return result;
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

function calculateAvg(data){
  var res = [];

  for(var prop in data){
    // console.log(data[prop]);
    var id = prop;
    var avg = data[prop].total / data[prop].questCount;

    res.push([id, avg]);
  }

  return res;
}








