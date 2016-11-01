function openProject(projObj) {

	var elem = projObj.elem;
	var direction = projObj.direction;

	// open project overlay
	if (!$(".project-wrapper").hasClass("opened")) {
		$(".project-wrapper").addClass("opened");
		$(".site").css("height", 0);
		lastPosition = currentScroll;
		$(window).scrollTop(0);
		resize();
	}

}

function closeProjects() {

	$(".site").css("height", "");
	$(window).scrollTop(lastPosition);
	$(".project-wrapper").removeClass("opened");

}