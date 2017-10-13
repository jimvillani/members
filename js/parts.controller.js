var app = angular.module('app');
app.controller('partsCtrl', function ($scope, $http) {
    $http.get("data/parts.txt")
        .then(function (response) {
            $scope.partsData = response.data.parts;
        });
});