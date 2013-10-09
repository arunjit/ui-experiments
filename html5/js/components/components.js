'use strict';

angular.module('components', []).
filter('canIHaz', function() {
  return function(value) {
    return value == null ? "Dunno.." : (value ? "Yes!" : "No!");
  };
});
