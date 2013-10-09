'use strict';

angular.module('components').
directive('ajTriStateButton', function() {
  var template =
      '<div class="btn-tristate">' +
      '<button class="btn left yes" ng-class="{selected:yes}" ng-click="toggleYes()"></button>' +
      '<button class="btn right no" ng-class="{selected:no}" ng-click="toggleNo()"></button>' +
      '</div>';

  var link = function(scope, element, attr, ngModel) {
    if (ngModel && ngModel.$viewValue != null) {
      scope.yes = ngModel.$viewValue == true;
      scope.no = ngModel.$viewValue == false;
    } else {
      scope.yes = scope.no = false;
    }

    var updateModel = function() {
      if (ngModel) {
        var value = scope.yes ? true : (scope.no ? false : null);
        ngModel.$setViewValue(value);
      }
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
    require: '?ngModel',
    restrict: 'AE',
    template: template,
    replace: true,
    link: link
  };
});
