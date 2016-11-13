var app = angular.module('app');
app.controller('contactsCtrl', function ($scope, $http) {
    $http.get("data/contacts.json")
        .then(function (response) {
            $scope.contactsData = response.data.contacts;
        });
});