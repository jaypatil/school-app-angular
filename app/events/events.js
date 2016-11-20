'use strict';

angular.module('myApp.events', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {
    templateUrl: 'events/events.html',
    controller: 'eventsCtrl', 
    reloadOnSearch: false
  });
}])

.controller('eventsCtrl', [function() {

}]);