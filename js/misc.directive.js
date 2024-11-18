var app = angular.module('app');
app.directive('misc', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template/misc.html'
    }
});