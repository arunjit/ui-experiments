'use strict';

angular.module('index', ['ngRoute', 'components']).
config(function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(false);
  $routeProvider.
      when('/', {templateUrl: 'views/home.html'}).
      when('/components', {templateUrl: 'views/components.html'}).
      otherwise({redirectTo: '/'});
});
