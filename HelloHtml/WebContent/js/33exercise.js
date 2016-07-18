$(document).ready(function() {
	var count = 0;

	function galleryTimer() {
		var width = $('.section').width();

		var size = $('.section').size();

		// for (var i = 0; i < size; i++) {
		// $('.section').eq(i).css({
		// 'left' : -(width * count)
		// });
		// }

		$("#wrap").animate({
			left : -(width * count)
		}, 3000, "swing");

		count++;

		count %= 3;

	}

	setInterval(galleryTimer, 1000);
});