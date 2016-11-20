'use strict';

angular.module('myApp.aboutus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutus', {
    templateUrl: 'aboutus/aboutus.html',
    controller: 'aboutusCtrl', 
    reloadOnSearch: false
  });
}])

.controller('aboutusCtrl', [function() {

}]);