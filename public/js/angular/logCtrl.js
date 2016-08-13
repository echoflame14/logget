angular.module("app").controller("logCtrl",function($scope,srvc){
	$scope.test = "hey from the logCtrl";
	$scope.people = srvc.people;
});
