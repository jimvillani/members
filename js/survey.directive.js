var app = angular.module('app');
app.directive('survey', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template/survey.html'
    }
});