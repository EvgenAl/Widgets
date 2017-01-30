$(function(){
//Ширина площади одной страницы
var contentwidth = $('.contentholder').width();
//Обще количество страниц
var totalcontent = $('.content').size();
//Общая ширина всего контента (всех страниц)
var allcontentwidth = contentwidth * totalcontent;
//Проскальзывание контента устанавливаем на ширину, которую получили выше
$('.contentslider').css({'width' : allcontentwidth});
//Теперь пишем новую функцию для проскальзывания и навигации
rotate = function(){
//Количество раз, на которое надо прокрутить контент
var slideid = $active.attr('rel') - 1;
//Устанавливаем дистанцию, на которую происходит единичная прокрутка
var slidedistance = slideid * contentwidth;
//Удаляем активный класс
$('.contentnav a').removeClass('active');
//Добавляем активный класс
$active.addClass('active');
//Анимация проскальзывания
$('.contentslider').animate({
        left: -slidedistance
    }, 500 );
}; 
 
//Устанавливаем время для проведения проскальзывания
rotation = function(){
play = setInterval(function(){
//Навигация следующего слайда
$active = $('.contentnav a.active').next();
if ( $active.length === 0) {
//Перемещаемся к первому слайду в навигации
$active = $('.contentnav a:first');
}
rotate();
//Таймер устанавливаем на 5 сек
}, 5000);
};
//Запускаем функцию вращения
rotation();
$('.contentnav a').click(function() {
$active = $(this);
clearInterval(play);
rotate();
rotation();
return false;
});
});

