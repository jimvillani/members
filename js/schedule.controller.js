var app = angular.module('app');
app.controller('scheduleCtrl', function ($scope, $http) {
    $http.get("data/schedule.min.json")
        .then(function (response) {
            $scope.scheduleData = response.data.schedule;
            $scope.schedLength = $scope.scheduleData.length;
            //if not divisible by 3, add 1 to the column
            $scope.colLength = Math.floor((response.data.schedule.length / 3) + (response.data.schedule.length % 3 > 0));
        });
});