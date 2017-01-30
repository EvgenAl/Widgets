$(function(){
	$('.nav li').hover(function(){
		$(this).children('.insert').stop().fadeIn(300);
	},
	function(){
		$(this).children('.insert').stop().fadeOut(300);
	});
});