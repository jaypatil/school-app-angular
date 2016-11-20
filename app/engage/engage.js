'use strict';

angular.module('myApp.engage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/engage', {
    templateUrl: 'engage/engage.html',
    controller: 'engageCtrl', 
    reloadOnSearch: false
  });
}])

.controller('engageCtrl', [function() {

}]);