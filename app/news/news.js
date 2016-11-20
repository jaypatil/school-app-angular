'use strict';

angular.module('myApp.news', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', {
    templateUrl: 'news/news.html',
    controller: 'newsCtrl', 
    reloadOnSearch: false
  });
}])

.controller('newsCtrl', [function() {

}]);