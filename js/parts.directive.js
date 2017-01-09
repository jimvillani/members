var app = angular.module('app');
app.directive('parts', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: { },
        templateUrl: 'template/parts.html'
    }
});