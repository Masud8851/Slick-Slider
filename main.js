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
$(".multiple-items").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
});
