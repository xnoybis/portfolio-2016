function processDom() {

	// append or transform required html elements throughout the site
	//////////////////////////////////////////////////////////////////////////////////////////////

	// adding responsive helper elements

	$("body").append("<span class='medium'></span><span class='large'></span><span class='xlarge'></span><span class='xxlarge'></span>");
	
	// single line justification

	$(".justified").each(function() {

		var content = $(this).text();
		var contentChars = content.split("");
		var finishedString = "";

		for (var c=0;c<contentChars.length;c++) {
			if (contentChars[c] === " ") {
				finishedString += "&nbsp; ";
			} else {
				finishedString += contentChars[c];
				if (c<contentChars.length-1) finishedString += " ";
			}
		}
		$(this).html(finishedString);

	});

	// add header cover elements

	$(".page").each(function() {
		if ($(this).find(".wrapper").length !== 0) {
			$(this).prepend("<div class='header-cover'><div></div></div>");		
		}
	});

	// adding helper element to work list items
	
	$(".works-list li").each(function() {
		$(this).addClass($(this).data("id"));
		var title = $(this).find("h3").html();
		$(this).find("h3").html("<span class='project-name'>"+title+"</span><span class='brand'><span class='logo'></span></span>");
		$(this).find("h3").clone().addClass("alt").appendTo($(this).find("a"));
		$(this).find(".alt").wrap("<span class='althold'></span>");
		$(this).find(".althold").wrap("<span class='altwrap'></span>");
		$(this).find("a").prepend("<span class='backdrop'></span>");
	});

	// add full work list item functionality for mobile if enabled in ea.init.js

	if (mobileProjectImages) $(".works-list a").addClass("full");

	// set up project details page elements

	$(".project-wrapper").appendTo("body");
	$(".project-wrapper").find(".project").clone().appendTo(".projects-inner");
	$(".project-wrapper").find(".project").first().addClass("project-holder");
	$(".project-holder").find(".project-info").clone().addClass("top-info hide-for-xlarge").prependTo(".project-holder");

	// add folded corner element to skill items

	$(".skillset li").each(function() {
		$(this).html("<span class='wrap'><span class='corner'></span><span><span>"+$(this).html()+"</span></span></span>");
	});

}