'use strict';

angular.module('components').
directive('ajTriStateButton', function() {
  var template =
      '<div class="btn-tristate">' +
      '<button class="btn left yes" ng-class="{selected:yes}" ng-click="toggleYes()"></button>' +
      '<button class="btn right no" ng-class="{selected:no}" ng-click="toggleNo()"></button>' +
      '</div>';

  var link = function(scope, element, attr, ngModel) {
    scope.yes = scope.ngModel === true;
    scope.no = scope.ngModel === false;

    var updateModel = function() {
      scope.ngModel = scope.yes ? true : (scope.no ? false : null);
    };

    scope.toggleYes = function() {
      scope.yes = !scope.yes;
      scope.yes && (scope.no = false);
      updateModel();
    };

    scope.toggleNo = function() {
      scope.no = !scope.no;
      scope.no && (scope.yes = false);
      updateModel();
    };
  };

  return {
    scope: {ngModel: '='},
    restrict: 'AE',
    template: template,
    replace: true,
    link: link
  };
});
