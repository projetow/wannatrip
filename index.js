$(document).ready(function(){
	$('#dropbtn').on('click',function(){
		$('.dropdown-content').show(500);
	});
	$('#closebtn').on('click',function(){
		$('.dropdown-content').hide(500);
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
});
