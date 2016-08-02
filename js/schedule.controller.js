var app = angular.module('app');
app.controller('scheduleCtrl', function ($scope, $http) {
    $http.get("data/schedule.json")
        .then(function (response) {
            $scope.scheduleData = response.data.schedule;
        });
});