app.controller('MainCtrl', function($scope, beerService){
  // $scope.beersArray = beerService.beersArray;
  $scope.beersArray = beerService;
  //invoke my functions
$scope.addToBeersArray = function(){
  // take the input from "name" and push it to beersArray
    $scope.beersArray.push({

      beerName: $scope.name,
      beerStyle: $scope.style,
      beerABV: $scope.abv,
      beerImage: $scope.image

    });
    console.log($scope.name + $scope.style + $scope.abv + $scope.image);
    $scope.name = '';
    $scope.style = '';
    $scope.abv = '';
    $scope.image = '';
};


});

