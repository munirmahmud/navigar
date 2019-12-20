(function($){
	"use strict";
	
    // On click-event listener
	$("#header .navbar-nav li a").on("click", function(){
		// Remove the current class from all a tags
		$("#header .navbar-nav li a").removeClass("current");
		// Add the current class to the clicked a
		$(this).addClass("current");
	});

	$("#testimonials").owlCarousel({
	    slideSpeed : 1000,
	    paginationSpeed : 400,
	    singleItem:true,
		pagination:true,
		navigation : false,
		transitionStyle : "goDown"
	});

	var slider = new MasterSlider();
	// adds Arrows navigation control to the slider.
	slider.control('arrows');
	slider.control('bullets');
	slider.setup('masterslider' , {
		width:1600,    // slider standard width
		height:750,   // slider standard height
		space:0,
		speed:45,
		layout:'fullwidth',
		loop:true,
		preload:0,
		autoplay:false,
		view:"parallaxMask"
	});

})(jQuery);