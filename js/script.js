"use strict";

// burger
$(window).on("load resize", function(){
	if ($(window).width() < 768){
		if (document.querySelector(".menu__button.active"))
			$('.menu__box,.menu__button').addClass('active');
			$('body').add('lock');
	} else {
		if (document.querySelector(".menu__button.active"))
			$('.menu__box,.menu__button').removeClass('active');
			$('body').removeClass('lock');
  }

});
$(document).ready(function(){
	$('.menu__button').click(function(event) {
		$('.menu__button,.menu__box').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// ibg
$(document).ready(function(){
	let ibg = document.getElementsByClassName("ibg");
	for (let i = 0; i < ibg.length; i++) {
  		let item = $(ibg[i]);
  		let child = item.children("img");
		let link = child.attr("src");
		let background = item.css("background-image");
		item.css("background", `${background} 100% 100% no-repeat, url(${link}) 50% 50% no-repeat`);
		item.css("background-size", "cover");
		child.remove();
	}
});

// sliders
$(document).ready(function(){
    $('.places__slider').slick({
        slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
	});
});

//videoplayer
$(".list__item").click(function(){
	$(".list__video").attr("src", "videos/" + $(this).attr("data-video"));
	$(".list__video").attr("poster", "images/videos/" + $(this).attr("data-poster")); 
});