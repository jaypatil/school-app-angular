'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl', 
    reloadOnSearch: false
  });
}])

.controller('homeCtrl', [function() {

}]);