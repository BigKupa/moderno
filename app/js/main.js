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
		arrows: false,
		responsive: [
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1441,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
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
	$('.menu__btn').on('click',function(){
		$('.menu__list').slideToggle();
	});

	$('.header__btn-menu').on('click',function(){
		$('.header__box').toggleClass('active');
	});

	$('.product-one__tabs .tab,.settings__tabs .tab').on('click', function(event) {
		var id = $(this).attr('data-id');
			$('.product-one__tabs,.settings__tabs').find('.tab-item').removeClass('active-tab').hide();
			$('.product-one__tabs .tabs,.settings__tabs .tab').find('.tab').removeClass('tab-active');
			$(this).addClass('tab-active');
			$('#'+id).addClass('active-tab').fadeIn();
			return false;
		});
	$('input[type="file"], select').styler();
	var mixer = mixitup('.products__inner-box');
});