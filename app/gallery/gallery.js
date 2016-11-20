'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'gallery/galleryhome.html',
    controller: 'galleryCtrl',
     reloadOnSearch: false
  });
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery1', {
    templateUrl: 'gallery/gallery.html',
    controller: 'galleryCtrl1',
     reloadOnSearch: false
  });
}])
.controller('galleryCtrl', [function() {

}])
.controller('galleryCtrl1', [function() {

}]);