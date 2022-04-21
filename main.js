$(document).ready(function () {
	$(".sectionOne_slider").slick({
		autoplay: true,
		// arrows: true,
		// dots: true,
		// adaptiveHeight: true,
		// slidesToShow: 3,
		// slidesToScroll: 1,
	});
});

// multiple items slides
if ($(window).width() <= 320) {
	$(".sectionTwo_slider").slick({});
} else {
	$(".sectionTwo_slider").slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 3,
	});
}

// Responsive Display
$(".sectionThree_slider").slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
