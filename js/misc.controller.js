var app = angular.module('app');
app.controller('miscCtrl', function ($scope, linksService) {
    linksService.getLinks().then(function (links) {
        $scope.photos = links.photos;
    });
});