var app = angular.module('app');
app.directive('absences', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template/absences.html'
    }
});