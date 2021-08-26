var app = angular.module('app');
app.controller('rosterCtrl', function ($scope, $http, $filter) {
    $http.get("data/roster.min.json")
        .then(function (response) {
            $scope.rosterData = response.data.instruments;
        });
});