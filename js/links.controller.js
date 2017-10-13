var app = angular.module('app');
app.controller('linksCtrl', function ($scope, $http) {
    $http.get("data/links.txt")
        .then(function (response) {
            $scope.linksData = response.data.links;
        });
});