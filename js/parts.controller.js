var app = angular.module('app');
app.controller('partsCtrl', function ($scope, $http) {
    $http.get("data/parts.min.json")
        .then(function (response) {
            $scope.partsData = response.data.parts;
        });
});