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

	//createPixelBorders();

}

function createPixelBorders() {

	var pixelArray = [
		["f", "f bt", "f bt", "f rt", "bt tp rt lf", "f lf bt rt", "tp lf", "tp rt", "f lf bt", "f", "f", "f bt rt", "lf bt rt tp", "f lf", "f bt rt", "tp lf", "tp rt", "f bt lf", "f", "f bt", "f", "f", "f", "f"],
		["f rt", "tp lf", "tp rt", "f lf bt", "f rt tp bt", "tp lf", "", "", "tp rt", "f lf bt", "f rt", "lf tp rt bt", "f bt tp lf", "f bt rt", "tp lf", "", "", "tp rt", "f bt lf rt", "tp lf rt", "f bt lf", "f", "f", "f bt"],
		["f bt rt", "lf", "", "tp", "tp", "", "", "", "rt", "f lf bt", "f bt", "f tp bt rt", "tp lf", "", "", "", "f bt lf tp rt", "lf", "tp", "", "tp rt", "f lf bt", "f bt", "tp lf"]
	];

	var pixelStr = "";
	for (var i=0;i<pixelArray.length;i++) {

		pixelStr += "<div class='pixelrow'>";
		for (var p=0;p<pixelArray[i].length;p++) {
			pixelStr += "<span class='"+pixelArray[i][p]+"'></span>";
		}
		pixelStr += "</div>";
	}

	$(".projects").prepend("<div class='pixels'>"+pixelStr+"</div>");
	$(".profile").prepend("<div class='pixels'>"+pixelStr+"</div>");

	resize();

}