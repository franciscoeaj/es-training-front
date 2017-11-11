(function() {
	angular.module('app').directive('register', function() {
		return {
			restrict: 'E',
			templateUrl: './js/directives/views/registerView.html',
			controller: 'authController'
		};
	})
})()