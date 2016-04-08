var app = angular.module('poliApp', []);

app.controller('winnerMaker', function($scope, $http){

$scope.showing = false;
$scope.showCand = false;

  $scope.revealCandidates = function(){
    $http.get('/lefties').then(function(response){
      $scope.lefties = response.data;
    });

    $http.get('/righties').then(function(response){
      $scope.righties = response.data;
    });

    $scope.showCand = $scope.showCand ? false : true;
  };


  $scope.getPresident = function(){
    $http.get('/randomIndex').then(function(response){
      $scope.winner = response.data;
      $scope.showing = $scope.showing ? false : true;
    });
  };





})
