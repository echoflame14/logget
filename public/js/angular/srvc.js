angular.module("app").service("srvc", function(){
	this.people = [
		{name:"josh"},
		{name:"tori"},
		{name:"dade"}
	];
	this.places = [
		{name:"provo"},
		{name:"kaysville"},
		{name:"devmountain"}
	];
	this.times = [
		{name:"now"},
		{name:"Morning"},
		{name:"Noon"},
		{name:"Evening"},
		{name:"Night"}
	];
	this.things = [
		{name:"Streetfighter 5"},
		{name:"The BFG"},
		{name:"Doom"},
		{name:"Suicide Squid"}
	];
	this.actions = [
		{name:"Eating"},
		{name:"Watching"},
		{name:"Sleeping"},
		{name:"Working"},
		{name:"Drawing"},
		{name:"Church"}
	];
	//END list declarations
	this.MakeEntry = function(str,otherStr){
		console.log(str);
		var strArr = str.split(" ");
		var otherStrArr = otherStr.split(" ");
		var matchesArr = [];
		for(var i = 0; i < strArr.length; i++){
			console.log(strArr[i]);
			for(var u = 0; u < otherStr.length; u++){
				if(strArr[i] === otherStr[u]){
					matchesArr.push(strArr[i],i);
				}
			}
		}
		console.log(matchesArr, "these are the matches i found");
		return matchesArr;
		};
});
