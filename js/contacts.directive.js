var app = angular.module('app');
app.directive('contacts', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'template/contacts.html'
    }
});