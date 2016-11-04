function openProject(id) {

	// open project overlay
	if (!$(".project-wrapper").hasClass("opened")) {
		$(".project-wrapper").addClass("opened");
		lastPosition = currentScroll;
		$(".site").css("height", 0);		
		$(window).scrollTop(0);
		resize();
	}

}

function closeProjects() {

	$(".site").css("height", "");
	$(window).scrollTop(lastPosition);
	$(".project-wrapper").removeClass("opened");

}