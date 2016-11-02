function resize() {

	//console.log("Resizing!");

	// measuring global dimensions

	winH = $(window).height();
	winW = $(window).width();
	genPadding = Math.floor(0.03*winW);

	// how strong the parallax offset is

	if (winW > winH) {
		parallaxOffset = Math.floor(winH/1.5);
	} else {
		parallaxOffset = 50;
	}

	// checking helper elements

	isMedium = $(".medium").is(":visible");
	isLarge = $(".large").is(":visible");
	isXlarge = $(".xlarge").is(":visible");
	isXXlarge = $(".xxlarge").is(":visible");

	// cover borders resizing

	$(".header-cover").each(function() {
		var elem = $(this);
		$(this).find("div").css({
			"border-left-width": Math.ceil(elem.outerWidth(false)/2) + 1,
			"border-right-width": Math.ceil(elem.outerWidth(false)/2) +1
		});
	});

	// processing section headers

	$(".page").each(function() {

		// adjusting section header width

		$(this).find("header .holder").css("width", "");
		$(this).find("header .holder").css("width", $(this).find("header h1").textWidth());

		// positioning header text

		var headerH = $(this).find("header .holder").outerHeight(false);

		if (isXlarge) headerH += $(this).find(".header-cover").outerHeight(false);

		$(this).find("header .wrapper").css("min-height", Math.floor(headerH)+"px");
		var startPos = Math.floor(($(this).find("header").outerHeight(false) - $(this).find(".holder").outerHeight(false))/2);
		if (isXlarge) startPos += 30;

		if (mobileParallax || isLarge) {
			$(this).find("header .holder").css("top",Math.floor(startPos-(parallaxOffset/2)));
		} else {
			$(this).find("header .holder").css("transform","");
			$(this).find("header .holder").css("top",Math.floor(startPos));
		}

		// centering header content

		var headerW = $(this).find("header").outerWidth(false);
		$(this).find(".holder").css("left", Math.floor((headerW-$(this).find(".holder").outerWidth(false))/2));

	});

	// project list	positioning
	
	$(".works-list li").each(function() {

		$(this).find(".brand, .project-name").css("margin-top", "");
		
		if (isXlarge) {
			if ($(this).find(".project-name").outerHeight(false) >= $(this).find(".brand").outerHeight(false)) {
				var diff = $(this).find(".project-name").outerHeight(false)-$(this).find(".brand").outerHeight(false);
				$(this).find(".brand").css("margin-top", Math.floor(diff/2));
				$(this).find(".project-name").css("margin-top", 0);
			} else {
				var diff = $(this).find(".brand").outerHeight(false)-$(this).find(".project-name").outerHeight(false);
				$(this).find(".brand").css("margin-top", 0);
				$(this).find(".project-name").css("margin-top", Math.floor(diff/2));
			}
		}

		$(this).find("a").css("padding-top", "");
		$(this).find(".alt").css("margin-top", "");

		if (isMedium) {
			var top = $(this).outerHeight(false) - $(this).find("h3").outerHeight(false);
			if (!isXlarge) top += Math.floor($(".logo").outerHeight(false)/3);
			$(this).find("a").css("padding-top", Math.floor(top/2));
			$(this).find(".alt").css("margin-top", Math.floor(top/2));
		}

		
		
	});

	// project viewer

	$(".main-img, .end-img, .left-img, .right-img").find("div").css("height", "");
	if (isMedium) {
		$(".main-img, .end-img, .left-img, .right-img").find("div").css("height", $(".right-img").find("div").outerHeight(false));
	}

	if (isXlarge) {
		$(".project-info").css("height", $(".project-images").outerHeight(false));
	} else {
		$(".project-info").css("height", "");
	}

	// skillset

	if (isXlarge) {

		$(".todo .skillset li").each(function() {
			$(this).find(".wrap").css("width", $(".skills .skillset li .wrap").outerWidth(false));
			$(this).css("width", "auto");
		});

	} else {

		$(".todo .skillset li").each(function() {
			$(this).find(".wrap").css("width", "");
			$(this).css("width", "");
		});
	}
	$(".skillset li").each(function() {
		$(this).find(".wrap").css("height", $(".skillset li").find(".wrap").outerWidth(false));
	});

	// profile-data

	$(".profile-image").find("div").css("height", "");
	$(".profile-image").find("div").css("height", Math.ceil($(".profile-image").outerHeight(false)));
	$(".profile-head > div").each(function() {
		$(this).find("a, div").css("height", "");
		$(this).find("a").css("height", "");
		if (!$(this).hasClass("profile-cv") || isLarge) {

			$(this).find("div").css("height", Math.floor($(".profile-image div").outerHeight(false)));

			// ie table-cell height hack
			$(this).find("a").css("height", "");
			$(this).find("a").css("height", Math.floor($(".profile-image div").outerHeight(false))-2);
		}
	});


	updatePosition(true);

}

function enableInteractions() {

	// cross-browser 60 fps (fingers crossed!)
	//window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(f){setTimeout(f, 1000/60)}

	$('body').on('touchmove', function() { updatePosition(false) });
	$(window).on("scroll", function() { updatePosition(false) });

	// project list item click
	$(".works-list a").on("click", function(e) {
		e.preventDefault();

		// ea.works.js
		openProject({ elem: $(this).parents("li").data("id"), direction: 0});
	});

	// project close
	$(".project-holder .project-info").on("click", function(e) {
		e.preventDefault();

		closeProjects();
	});

	$(".menu-toggle").on("click", function(e) {
		e.preventDefault();
		$("nav").toggleClass("opened");
	});

}

function updatePosition(force) {

	// only when current scroll position changed or if forced (on window resize)
	if (currentScroll !== $(window).scrollTop() || force) {

		// track current scroll position
		currentScroll = $(window).scrollTop();

		// section headers parallax

		$(".page").each(function() {

			if ($(this).find(".wrapper").length !== 0) {

				var elem = $(this);

				// denotes parallax enabled area
				var sectionStart = Math.floor(	$(this).offset().top-(winH*1.1)	);
				var sectionEnd = Math.floor(	$(this).offset().top+(winH*1.1)	);

				if (currentScroll >= sectionStart && currentScroll <= sectionEnd) {

					if (mobileParallax || isLarge) {

						// calculate percentage of the parallax enabled area already scrolled
						var perc = (currentScroll-sectionStart)/(sectionEnd-sectionStart);

						// redraw using translateY
						requestAnimationFrame(function() {redrawParallax(elem, Math.floor(perc*parallaxOffset)) });

					} else {
						requestAnimationFrame(function() {redrawParallax(elem, 0) });
					}
				} else {
					requestAnimationFrame(function() {redrawParallax(elem, 0) });
				}

			}

			

		});

	}

}

function redrawParallax(elem, num) {
	elem.find("header .holder").css("transform","translateY("+num+"px)");
	elem.find(".wrapper .holder").css("background-color","#fefefe");
	elem.find(".wrapper .holder").css("background-color","");
}