angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth) {
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password) {
        mvAuth.authenticateUser(username, password).then(function(success) {
            if (success) {
                console.log("Auth success działa");
                mvNotifier.notify('You have succesfully logged in!');
            } else {
                console.log("Auth failure działa");
                mvNotifier.notify('Login/Password is incorrect!');
            }
        });
    };
});