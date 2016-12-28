var app = angular.module('app');
app.directive('seasons', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template/seasons.html'
    }
})
