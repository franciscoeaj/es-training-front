(function() {
	angular.module('app').directive('login', function() {
		return {
			restrict: 'E',
			templateUrl: './js/directives/views/loginView.html',
			controller: 'authController'
		};
	})
})()