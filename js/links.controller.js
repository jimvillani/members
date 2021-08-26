var app = angular.module('app');
app.controller('linksCtrl', function ($scope, $http) {
    $http.get("data/links.min.json")
        .then(function (response) {
            $scope.linksData = response.data.links;
        });
});