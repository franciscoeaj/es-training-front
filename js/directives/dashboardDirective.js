(function() {
	angular.module('app').directive('dashboard', function() {
		return {
			restrict: 'E',
			templateUrl: './js/directives/views/dashboardView.html',
			controller: 'authController'
		};
	})
})()