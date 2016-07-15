$(document).ready(function() {
	var size = $('div.section').size();

	var arrImgs = [ 'grey', 'orange', 'yellow', 'green', 'blue' ];
	var arrTops = [];
	
	for (i = 0; i < size; i++) {
		$('div.section').eq(i).css({
			'background' : arrImgs[i]
		});
		
		arrTops.push($('div.section').eq(i).offset().top);
		console.log(arrTops[i]);
	}
	
	var height = $('body').height();
	var iconHeight = $('div.icon').height();
	$('div.icon').css({'top':height/2 - iconHeight/2});
	$('body').css({'overflow':'hidden'});
	$('div.icon>ul>li').on('click', function(){
		
		var idx = $(this).index();
		
		$('html,body').stop().animate({scrollTop:arrTops[idx]});
	});
});
