// globals

var currentScroll = 0, 
	winH = 0, 
	winW = 0, 
	navH = 0,
	genPadding = 0, 
	particlesEnabled = false, 
	isMedium = false, 
	isLarge = false, 
	isXlarge = false, 
	isXXlarge = false, 
	projectsOpened = false, 
	parallaxOffset = 0,
	lastPosition = 0;

// some people browse their internets on a tasty potato, short of measuring fps it's probably best to take it easy on them
var mobileParallax = false;
var mobileProjectImages = false;

//////////////////////////////////////////////////////////////////////

$(document).ready(init);
$(window).load(onload);

function init() {

	// ea.dom.js - append required html elements throughout the site
	processDom();

	console.log("\n\nWelcome to Evident Agenda.\nFeel free to tinker.\nYou can also give me a shout at "+atob('aGVsbG9AbGouaWU=')+"\n\n");

}

function onload() {

	$(window).resize(resize);	
	setTimeout(function() {

		$(".mailto span").html(atob('aGVsbG9AbGouaWU='));
		$(".mailto").attr("href", "mailto:"+atob('aGVsbG9AbGouaWU='));

		// ea.ui.js - on window resize handlers
		resize();

		// ea.ui.js - enable click, scrolling event handlers
		enableInteractions();

		// play out the preloader
		setTimeout(function() { 
			$(".loader").addClass("loaded"); 
			$(window).scrollTop(0);
			setTimeout(function() { $(".loader").remove(); }, 3000);
		}, 1000);



	}, 500);

}