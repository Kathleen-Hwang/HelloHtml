$(document).ready(function() {
	var num = $('.menu>ul>li').size();
	var arr_Img = [ "red", "orange", "yellow", "green", "blue" ];

	console.log("size : " + num);

	for (i = 0; i < num; i++) {
		console.log(arr_Img[i]);
	}
	var num = $('.menu>ul>li').size();

	var arr_Num = [];
	var arr_Img = [ "red", "orange", "yellow", "green", "blue" ];

	for (i = 0; i < num; i++) {
		console.log('start >> .s' + (i + 1));
		arr_Num.push($('.s' + (i + 1)).eq(0).offset().top);

		$('.section').eq(i).css({
			'background' : arr_Img[i],
			'background-size' : '100% 100%'
		});

		console.log('end >> .s' + (i + 1));
	}

	$('.menu>ul>li').on('click', function() {

		var idx = $(this).index();

		$('html,body').stop().animate({
			scrollTop : arr_Num[idx]
		}, 1000);

	});

	$('div.layer').css({
		'display' : 'none'
	});

	$('div.layer>div.box').on('click', function(e) {
		if ($(e.target).is('div.layer>div.box')) {
			$(this).parent().fadeOut();
		}

	});

	$('span.popup').on('click', function(e) {
		$('div.layer').fadeIn();
	});

});