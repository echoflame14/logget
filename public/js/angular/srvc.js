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
});
