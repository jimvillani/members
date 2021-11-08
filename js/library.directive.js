var app = angular.module('app');
app.directive('library', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template/library.html'
    }
});