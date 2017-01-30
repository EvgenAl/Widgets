$(function(){
$('.click').click(function()
{
	$('.content, .hover').show('fast');
	$('.content').css({'top':'5%'});
});
	
$('.hover').click(function(){
	$('.content').hide('fast');
	$(this).hide('fast');
});


});