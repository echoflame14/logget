$(document).ready(function(){
	console.log("the Document is ready");
	var bars = $("#goToLog");
	var plus = $("#goToAdd");
	bars.click(function(){
		console.log("clicked the bars");
		plus.removeClass("active");
		bars.addClass("active");
	});
	plus.click(function(){
		console.log("plus clicked");
		bars.removeClass("active");
		plus.addClass("active");
	});
	//end viewSwitch

	//start accordian
	var common = $("#common");
	var otherCat = $("#otherCat");
	var otherCat1 = $("#otherCat1");

	otherCat.click(function(){
		if(otherCat.hasClass("collapsedMenu")){
			console.log("otherCat has been clickd");
			otherCat.removeClass("collapsedMenu");
			common.addClass("collapsedMenu");
			otherCat1.addClass("collapsedMenu");
		}
		else{
			otherCat.addClass("collapsedMenu");
		}
	});
	common.click(function(){
		if(common.hasClass("collapsedMenu")){
			console.log("common has been clickd");
			common.removeClass("collapsedMenu");
			otherCat.addClass("collapsedMenu");
			otherCat1.addClass("collapsedMenu");
		}
		else{
			common.addClass("collapsedMenu");
		}
	});
	otherCat1.click(function(){
		if(otherCat1.hasClass("collapsedMenu")){
			console.log("otherCat has been clickd");
			otherCat1.removeClass("collapsedMenu");
			common.addClass("collapsedMenu");
			otherCat.addClass("collapsedMenu");
		}
		else{
			otherCat1.addClass("collapsedMenu");
		}
	});
});
