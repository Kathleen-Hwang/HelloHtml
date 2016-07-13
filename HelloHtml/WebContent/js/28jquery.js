$(document).ready(function() {
	var arrColors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'red' ];
	var size = $('ul>li').size();

	for (i = 0; i < size; i++) {
		$('ul>li').eq(i).css({
			'background' : arrColors[i],
		});
	}

	var num = 0;
	var size = $('ul>li').size();

	function autoGallery() {
		var width = $('ul>li').width();

		$('ul').animate({
			left : -width * num
		}, 1000, function() {
			console.log("end : " + num);
			if (num == size) {
				$('ul').css({
					'left' : '0'
				});
				num = 0;
			}

		});

		num++;
		console.log(num);
	}

	var setIn = setInterval(autoGallery, 2000);
});