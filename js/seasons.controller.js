var app = angular.module('app');
app.controller('seasonsCtrl', function ($scope, $http) {
    $http.get("data/seasons.json")
        .then(function (response) {
            $scope.seasonsData = response.data.seasons;
            $scope.dataWidth = (100 / response.data.seasons.length) + '%';
        });
});