(function() {
	angular.module('app').controller('authController', function($scope, httpToolsService, $state) {
		const serverRoute = 'http://localhost:3000/';

		this.user = {
			email: '',
			password: ''
		}

		$scope.login = function(user) {
			const requestBody =  {
				email: user.email,
				password: user.password
			};

			httpToolsService.request('POST', serverRoute + 'authenticate', requestBody)
			.then(function success(res) {
				console.log("Request made successfully!");
				console.log("For debugging reasons, this is your response:");
				console.log(res);

				if (res.status === 200) {
					$state.go('loggedIn');
				}
			}, function error(res) {
				console.log("An error ocurred while sending your POST request to /authenticate");
				console.log("For debugging reasons, this is your response:");
				console.log(res);
			});
		}

		$scope.register = function(user) {
			const requestBody =  {
				email: user.email,
				password: user.password,
			};

			httpToolsService.request('POST', serverRoute + 'register', requestBody)
			.then(function success(res) {
				console.log("Request made successfully!");
				console.log("For debugging reasons, this is your response:");
				console.log(res);

				if (res.status === 201) {
					alert('Usuário cadastrado com sucesso!');
					$state.go('login');
				} else {
					alert('Não foi possível registrar o usuário. Tente novamente com outro endereço de e-mail.');
				}
			}, function error(res) {
				console.log("An error ocurred while sending your POST request to /register");
				console.log("For debugging reasons, this is your response:");
				console.log(res);
			});
		}
	});
})()