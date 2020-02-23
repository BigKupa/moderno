$(function(){
	$(".rate__star").rateYo({
		rating: 3.5,
		starWidth: "12px",
		readOnly: true
	});
	$('.product__slider-inner').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false
	});
	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 1000,
		from: 0,
		to: 600,
		prefix: "$"
	});
	$('.icon-th-list').on('click', function(){
		$('.product__item').addClass('list');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$('.icon-th-large').on('click', function(){
		$('.product__item').removeClass('list');
		$('.icon-th-list').removeClass('active');
		$('.icon-th-large').addClass('active');
	});
	var mixer = mixitup('.products__inner-box');
});