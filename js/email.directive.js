var app = angular.module('app');
app.directive('email', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template/email.html'
    }
});