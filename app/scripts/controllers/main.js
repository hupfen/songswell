'use strict';

angular.module('songswellApp')
  .controller('DashCtrl', function ($scope) {
      $scope.albums = [{name: 'Album Name', artist: 'Artist', cover:'http://31.media.tumblr.com/bb384f6c84f31f7b527b2ec94e56def3/tumblr_muodhfFk1N1s9cgtdo1_500.jpg'}];
    }).directive('ssThumb', function() {
    return {
      restrict: 'E',
      scope: {
        album: '=album'
      },
      templateUrl: 'directives/ss-thumb.html'
    };
  });
