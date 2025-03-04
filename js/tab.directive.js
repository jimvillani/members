var app = angular.module('app');
app.directive('tab', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
        require: "^tabset",
        scope: {
            heading: '@'    // @ means this property should be a string
        },
        link: function (scope, elem, attr, tabsetCtrl) {
            scope.active = false;
            tabsetCtrl.addTab(scope)
        }
    }
});