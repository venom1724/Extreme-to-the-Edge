var asd = function ()
{
	$(".nava li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenuz").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nava").toggle();
		console.log("asd");
		adjustMenuz();
	});
	adjustMenuz();
	adjustMenuz();
}



var adjustMenuz = function() {
		console.log("bds");
		$(".toggleMenuz").css("display", "inline-block");
		if (!$(".toggleMenuz").hasClass("active")) {
			$(".nava").hide();
		} else {
			$(".nava").show();
		}
		$(".nava li").unbind('mouseenter mouseleave');
		$(".nava li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	
	/*
	else if (ww >= 800) {
		$(".toggleMenuz").css("display", "none");
		$(".nava").show();
		$(".nava li").removeClass("hover");
		$(".nava li a").unbind('click');
		$(".nava li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
	*/
}


var adjustMenu = function() {

		$(".toggleMenuz").css("display", "inline-block");
		if (!$(".toggleMenuz").hasClass("active")) {
			$(".nava").hide();
		} else {
			$(".nava").show();
		}
		$(".nava li").unbind('mouseenter mouseleave');
		$(".nava li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});

		if(ww>=800){
			$(".toggleMenu").css("display", "none");
			$(".nav").show();
			$(".nava").css("margin","0 0 0");
		}

		if(ww<800){

		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});

		$(".nava").css("margin","150px 0 0");

		}
}

asd();
