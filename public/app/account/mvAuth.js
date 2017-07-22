angular.module('app').factory('mvAuth', function($http, mvIdentity, $q, mvUser) {
  return {
    authenticateUser: function(username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response) {
        if(response.data.success) {
                console.log('response.data.success działa');
                dfd.resolve(true);
            } else {
                dfd.resolve(false);
                console.log('response.data.failure działa');
            }
        });
        return dfd.promise;
    }
  };
});