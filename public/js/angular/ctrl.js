angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.test = "Hey I'm working!!";
	$scope.peopleList = srvc.people;
});
