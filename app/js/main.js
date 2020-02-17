$(function(){
	var mixer = mixitup('.products__inner-box');
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
	})
});