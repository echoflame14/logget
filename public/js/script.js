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
});
