$(function(){
	//кликаем по ссылке, запускаем функцию on
$('.tabs_control-link').on('click', function(event){
//отменяем действие по умолчанию - переход по ссылке
event.preventDefault();
//сохраняем объект li в переменную
var item = $(this).closest('.tabs_control-item'),
//сохраняем li с контентом
contentItem = $('.tabs_item'),
//вовзращает порядковый номер нажатого элемента в наборе, начиная с 0
itemPosition = item.index();
//ячейке с контентом, чей порядковый номер равен порядковому номеру нажатой li в объекте item
//добавляем активный класс, а у братских элементов dom удаляем его
contentItem.eq(itemPosition).addClass('active').siblings().removeClass('active');
//при клике добавляем активный класс для li в объекте item
item.addClass('active_2').siblings().removeClass('active_2');

});


});