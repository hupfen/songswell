'use strict';

angular.module('songswellApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dash.html',
        controller: 'DashCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
