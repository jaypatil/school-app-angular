'use strict';

angular.module('myApp.result', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/result', {
    templateUrl: 'result/result.html',
    controller: 'resultCtrl', 
    reloadOnSearch: false
  });
}])

.controller('resultCtrl', [function() {

}]);