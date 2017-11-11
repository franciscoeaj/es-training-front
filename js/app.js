(function() {
	angular.module('app', ['ui.router']);

	angular.module('app').config(function($urlRouterProvider) {
		$urlRouterProvider
		.when('/', '/login')
		.otherwise('/login');
	});

	angular.module('app').config(function($stateProvider) {
		const loginState = {
			name: 'login',
			url: '/login',
			template: '<login></login>'
		}

		const registerState = {
			name: 'register',
			url: '/register',
			template: '<register></register>'
		}

		const loggedInState = {
			name: 'loggedIn',
			url: '/dashboard',
			template: '<dashboard></dashboard>'
		}

		$stateProvider.state(loginState);
		$stateProvider.state(registerState);
		$stateProvider.state(loggedInState);
	});
})()