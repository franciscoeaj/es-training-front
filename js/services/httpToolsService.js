(function () {
  angular.module('app').service('httpToolsService', function ($http, $window) {
    return {
      request: function(method, route, data) {
        return $http({
          method: method,
          url: route,
          data: data,
          headers: {'Content-Type': 'application/json'},
        })
      },

      redirect: function(path) {
        $window.location.href = path;
      }
    };
  });
})();