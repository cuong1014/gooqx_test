var ProbearbeitBlog = {};

ProbearbeitBlog.dropdown = function() {
	$(".blog-dropdown >div >a").click(function(e) {
		var element = $(this).parent().find(".blog-dropdown-inside");
		var active = element.hasClass("active");
		$(".blog-dropdown >div .blog-dropdown-inside").removeClass("active");
		if(active) {
			element.removeClass("active");
		} else {
			element.addClass("active");
		}
	    e.stopPropagation();
	});

	$(document).click(function() {
		$(".blog-dropdown >div .blog-dropdown-inside").removeClass("active");
	});
}

ProbearbeitBlog.latestSliderVar = {
	animation: false,
	currentItem: 0,
	delay: 400,
	disable: false,
}

ProbearbeitBlog.latestSlider = function() {
	var elementWidth = 0;
	var elementCount = 0;
	function beforeClick(e) {
		if(ProbearbeitBlog.latestSliderVar.animation || ProbearbeitBlog.latestSliderVar.disable) {
			return true;
		}
		ProbearbeitBlog.latestSliderVar.animation = true;
		var element = $(".blog-latest-post");
		elementWidth = element.outerWidth();
		elementCount = element.length;
	}

	function afterClick() {
		$("#latest_item").animate({
			scrollLeft: ProbearbeitBlog.latestSliderVar.currentItem * elementWidth
		}, ProbearbeitBlog.latestSliderVar.delay, 'swing', function() { 
			ProbearbeitBlog.latestSliderVar.animation = false;
		});
	}

	$("#latest_next").click(function() {
		if(beforeClick() || ProbearbeitBlog.latestSliderVar.disable) return;
		if(ProbearbeitBlog.latestSliderVar.currentItem++ >= elementCount - 1)
			ProbearbeitBlog.latestSliderVar.currentItem = 0;
		afterClick();
	});

	$("#latest_previous").click(function() {
		if(beforeClick()) return;
		if(ProbearbeitBlog.latestSliderVar.currentItem-- < 1)
			ProbearbeitBlog.latestSliderVar.currentItem = elementCount - 1;
		afterClick();
	});
}

ProbearbeitBlog.hamburger = function() {
	$("#hamburger").click(function() {
		$(this).toggleClass("active");
		$("#menu").toggleClass("active");
	});
};

ProbearbeitBlog.search = function() {
	$("#search_button").click(function() {
		$("#search_textbox").toggleClass("active");
	});
};

ProbearbeitBlog.floatIcon = function() {
	if($(window).width() < 768) {
		var top = ($(".blog-latest-thumbnail").height() - 24) / 2;
		$("#latest_previous").css("top", top);
		$("#latest_next").css("top", top);
	}
}

ProbearbeitBlog.goTop = function() {
	$("html, body").animate({scrollTop: 0}, 250);
}

ProbearbeitBlog.scrollTop = function() {
	var menuHeight = $(".blog-masthead").height();
	var x = $(window).scrollTop();
	var topElement = $("#top");
	if(x > menuHeight) {
		topElement.addClass("active");
	} else {
		topElement.removeClass("active");
	}
}

ProbearbeitBlog.init = function() {
	this.dropdown();
	this.latestSlider();
	this.hamburger();
	this.search();
	this.floatIcon();
	this.scrollTop();
	$("#top").click(this.goTop);
	$(window).scroll(this.scrollTop);
	$(window).resize(this.floatIcon);
}

ProbearbeitBlog.init();