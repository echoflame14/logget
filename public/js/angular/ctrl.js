angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.test = "Hey I'm working!!";
	$scope.peopleList = srvc.people;
	$scope.placeList = srvc.places;
	$scope.timeList = srvc.times;
	$scope.thingList = srvc.things;
	$scope.actionList = srvc.actions;
	//end srvc lists

	//start entryField
	$scope.textEntry;
	$scope.MakeEntry = srvc.MakeEntry;
	$scope.testFunc = function(str){
		if(str){
			$scope.MakeEntry(str,"T");
		}
		else{
			alert("log cannot be blank");
		}
	};
});
