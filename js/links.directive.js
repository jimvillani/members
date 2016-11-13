var app = angular.module('app');
app.directive('links', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template/links.html'
    }
})