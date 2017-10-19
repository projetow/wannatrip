$(document).ready(function(){
	$('#dropbtn').on('click',function(){
		$('.dropdown-content').show(500);
		$('.upper_content').css("z-index","-1");
	});
	$('#closebtn').on('click',function(){
		$('.dropdown-content').hide(500);
		$('.upper_content').css("z-index","auto");
	});

	$(function () {
        $(window).scroll(function () {

            if ($(this).scrollTop() > 100) {
                $('.dropdown').addClass('navbar_move');
            } else {
                $('.dropdown').removeClass('navbar_move');
            }
        });
    });

	$('.question_box p').hide();
	$('.question_box h3').on('click', function() {
		$(this).next('.question_box p').toggle(400);
	})

	$('.upper_content, .middle_content').slick({
    centerMode: true,
		centerPadding: '20px',
		arrows: false,
		zIndex: 0,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0
				}
			}
		]
  });

  $('.jumbotron').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider_photo_img_wrapper'
	});

	$('.slider_photo_img_wrapper').slick({
		arrows: false,
		zIndex: 0,
		infinite: false,
		slidesToShow: 4,
		asNavFor: '.jumbotron',
		focusOnSelect: true
	});

});
