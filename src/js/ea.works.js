function openProject(id) {

	// open project overlay
	if (!$(".project-wrapper").hasClass("opened")) {

		$(".project-wrapper").addClass("opened");
		lastPosition = currentScroll;
		$(".site").css("height", 0);		
		$(window).scrollTop(0);
		resize();

	}

	$(".project-holder").find(".main-image").find("span").removeClass("loaded");
	$(".project-holder").find(".image-list").removeClass("loaded");

	// add images

	$(".project-holder").find(".main-image").find("img").remove();
	var imgArr = $(".project."+id).data("images").split(",");
	console.log(imgArr);

	var imageStr = "";
	var thumbStr = "";
	for (var i=0;i<imgArr.length;i++) {
		imageStr += "<img src='img/"+imgArr[i]+"' class='img"+(i+1)+"'/>";
		thumbStr += "<li><a data-num='"+(i+1)+"'><img src='img/"+imgArr[i]+"' class='thumb"+(i+1)+"'/></a></li>";
	}

	$(".project-holder").find(".main-image").append(imageStr);
	$(".project-holder").find(".image-list").html(thumbStr);

	$(".project-holder").find('.main-image').imagesLoaded( function() {
		setTimeout(function() { 
			$(".project-holder").find(".main-image").find("span").addClass("loaded"); 
			$(".project-holder").find(".image-list").addClass("loaded"); 
		}, 500);
		console.log("loaded!");
	});

	$(".project-holder").find(".image-list").find("li").first().addClass("active");
	$(".project-holder").find(".image-list").find("a").on("click", function(e) {
		e.preventDefault();
		$(".project-holder").find(".image-list").find("li").removeClass("active");
		$(this).parents("li").addClass("active");

		var num = $(this).data("num");
		$(".project-holder").find(".main-image").find("img").css("z-index", "3000");
		$(".project-holder").find(".main-image").find(".img"+num).css("z-index", "3001");
	});

}

function closeProjects() {

	$(".site").css("height", "");
	$(window).scrollTop(lastPosition);
	$(".project-wrapper").removeClass("opened");

}