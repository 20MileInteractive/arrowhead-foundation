$(document).ready(function() {
	$("a.filter-option").click(function(event){
		event.preventDefault();
		var elem = $(this);
		elem.addClass("loading");
		var t = setTimeout(function() {
			elem.removeClass("loading").toggleClass("selected");
		},350);
	});

	$("a.clear-selection").click(function(event){
		event.preventDefault();
		$("a.filter-option").removeClass("selected");

	});

});