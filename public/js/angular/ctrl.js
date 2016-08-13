angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.test = "Hey I'm working!!";
	$scope.peopleList = srvc.people;
	$scope.placeList = srvc.places;
	$scope.timeList = srvc.times;
	$scope.thingList = srvc.things;
	$scope.actionList = srvc.actions;
});
