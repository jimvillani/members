var app = angular.module('app');
app.directive('calendar', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: "template/calendar.html"
    }
});