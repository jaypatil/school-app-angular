'use strict';

angular.module('myApp.homework', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/homework', {
                    templateUrl: 'homework/homework.html',
                    controller: 'homeworkCtrl',
                    reloadOnSearch: false
                });
            }])

        .controller('homeworkCtrl', [function () {
             
            }]);