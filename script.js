// Code goes here

var app = angular.module('app', [
    'app.controllers',
    'ui.date',
    'ui.bootstrap',
    'app.models'
  ]).
  config(['$routeProvider', function($routeProvider) {
  	// console.log('configuring routeprovider');
    $routeProvider.
    	when('/new', {templateUrl: 'detail.html', controller: 'AppointmentCreateController'}).
    	otherwise({redirectTo: '/new'});
  }]);