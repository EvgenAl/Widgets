$(function(){
$(document).scroll(function(){
	//если прокрутка больше 150 пикселей, отображаем блок скролла
if($(this).scrollTop() > 150){
$('.scroll').css({'display':'block'});
}
//если меньше, скрываем
if($(this).scrollTop() < 150){
	$('.scroll').css({'display':'none'});
}
//кликнув по блоку скролл, запускаем функцию, которая анимирует прокрутку вверх с заданным временем
$('.scroll').click(function(){
$('body,html').animate({scrollTop:0}, 800);
return false;
});
});//end scroll

});//end jq