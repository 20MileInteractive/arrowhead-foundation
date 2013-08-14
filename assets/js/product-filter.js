$(document).ready(function() {
	$("a.filter-option").click(function(event){
		event.preventDefault();
		console.log("loading");
		var elem = $(this);
		elem.addClass("loading");
		var t = setTimeout(function() {
			console.log("loaded");
			elem.removeClass("loading").toggleClass("selected");
		},400);
	});

});