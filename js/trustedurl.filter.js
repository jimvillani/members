var app = angular.module('app');
app.filter('trustedUrl', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
});
