<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
	$(document).ready(function() {
		$('*').css({
			'margin' : '0',
			'padding' : '0'
		});
		$('html, body').css({
			'width' : '100%',
			'height' : '100%'
		});
		$('.btn').click(function() {
			$('#wrap').css({
				'width' : '300px',
				'height' : '300px',
				'background' : 'red'
			});
		});
		$('div.gnb').css({
			'width' : '300px',
			'height' : '300px'
		});
		$('div.gnb>ul>li').css({
			'color' : '#ff0000'
		});
		$('div.gnb>ul>li').click(function() {
			var idx = $(this).index();
			alert(idx);
		});

	});
</script>
</head>

<body>
	<button class="btn">change color</button>
	<div id="wrap"></div>
	<div class="gnb">
		<ul>
			<li>1111</li>
			<li>2222</li>
			<li>3333</li>
		</ul>
	</div>
</body>
</html>