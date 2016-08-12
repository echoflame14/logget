angular
.module("app", ["ui.router"])
.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
	console.log($urlRouterProvider);
	console.log($stateProvider);

	$urlRouterProvider.otherwise("/"); // bounces the user back to / when the http request does not match a state
	$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "../html/views/home.html"
		})
		.state("log",{
			url: "/log",
			templateUrl: "../html/views/log.html"
		});

}]);
