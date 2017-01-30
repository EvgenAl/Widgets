$(function(){
$('.hover').mousemove(function(event){
var res = $(this).attr('rel');
$('.forTooltip').css({'left':event.pageX-30, 'top':event.pageY -70}).text(res).show(500);
});

$('.hover').mouseout(function(event){
$('.forTooltip').hide();
});


});