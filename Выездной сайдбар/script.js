$(function(){
	var res = $('.sidebar');
	$('.btn').click(function(){
		if(res.css('left') == '-200px'){
		res.animate({
			'left':'0px'
		},500);
	}
	else{
		res.animate({
			'left':'-200px'
		});
	}
	});

});