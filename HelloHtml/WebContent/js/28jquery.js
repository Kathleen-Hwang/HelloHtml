$(document).ready(
		function() {
			var arrColors = [ 'red', 'orange', 'yellow', 'green', 'blue',
					'aqua', 'purple', 'lime', 'teal', 'maroon', 'red' ];
			var size = $('.gallery>ul>li').size();

			for (i = 0; i < size; i++) {
				$('.gallery>ul>li').eq(i).css({
					'background' : arrColors[i],
				});
			}

			var num = 0;
			setIconIndexBg(num);

			function autoGallery() {
				var size = $('.gallery>ul>li').size();
				var width = $('.gallery>ul>li').width();

				$('.gallery>ul').animate({
					left : -width * num
				}, 1000, function() {
					console.log("end : " + num);
					if (num == size) {
						$('.gallery>ul').css({
							'left' : '0'
						});
						num = 0;
					}

				});

				console.log("num >>> " + num);
				console.log("size >>> " + size);
				setIconIndexBg(num == size - 1 ? 0 : num);

				num++;
				console.log(num);
			}

			var timer = undefined;

			startTimer();

			// $('.icon>ul>li').on('click', function() {
			$('.icon>ul>li').click(function() {
				num = $(this).index();
				startTimer();
			});

			$('.icon>ul>li').hover(function() {
				clearInterval(timer);
				timer = undefined;
			}, function() {
				startTimer();
			});

			function startTimer() {
				if (timer == undefined) {
					timer = setInterval(autoGallery, 2000);
				}
			}

			function setIconIndexBg(idx) {
				var size = $('.icon>ul>li').size();

				for (i = 0; i < size; i++) {
					$('.icon>ul>li').eq(i).css({
						'background' : 'silver'
					});
				}

				$('.icon>ul>li').eq(idx).css({
					'background' : 'aqua'
				});
			}
		});