$(function(){
	//ТАБЫ

 (function(){
 		/*
$('.tabs__item').click(function(){
	var $this = $(this);//если элемент  в алгоритме встречается более 2х раз, кэшируем его в переменную
	var tabsConent = $('.tabs__content-item');
	var ndx = $this.index();//index() - метод объекта выборки jq. возвращает индекс элемента в наборе
	//какой индекс элемента this в наборе $('.tabs__item')

	$this.addClass('active').siblings().removeClass('active');
	tabsConent.eq(ndx).addClass('active').siblings().removeClass('active');
});
*/
//index() отличается от eq() тем, что index() возвращает индекс элемента в наборе,
//а eq() - возвращает элемент под заданным индексом
//АЛГОРИТМ ВИДЖЕТА
/*
1.Выбираем элемент и при клике запускаем функцию - обработчик события
2.Сохраяняем в переменные объекты, которые будут вызываться по ходу алгоритма боле 1 раза
2.Получаем индекс элемента в выборке, по которому произошел клик
3.Этому элементу добавляем класс, а у соседних элементов его удаляем
4.Получаем элемент другой выборки нужного индекса, добавляем класс а у сосдених элементов удаляем
*/

$('.tabs__link').on('click', function(e){
e.preventDefault();
//отменяем переход по ссылке
var $this = $(this),
//сохраняем элемент по которому был клик(ссылка)
item = $this.closest('.tabs__item'),
//сохраняем элемент к которому будем добавляеть класс - один из табов
container = $this.closest('.tabs'),
//сохраняем контейнер 
content = container.find('.tabs__content-item'),
//сохраняем элементы с контентом которые будем скрывать или показывать
ndx = item.index(),
//сохраняем индекс элемента по котрому был клик в наборе относительно соседних
activeItem = content.filter('.active');
//сохраняем элемент контента который отображается
reqItem = content.eq(ndx);
//сохраняем тот элемент с контентом в выборке, индекс которого равен индексу кликнутого таба
item.addClass('active').siblings().removeClass('active'),
//кликнутому табу добавляем класс а у его соседних элементов удаляем
activeItem.fadeOut(1000,function(){
//элемент контента который виден(имеет класс active) скрываем за 1000ms
reqItem.fadeIn(1000, function(){
//после этого вызываем ф-цию, которая 
	reqItem.addClass('active').siblings().removeClass('active');
//элемент контента с подходящим индексом показывает, а соседние элементы скрывает
});
});
//content.eq(ndx).addClass('active').siblings().removeClass('active');
});

/*отличие первого скрипта от второго в том, 
что в первом в выборку попадали все блоки с контентом табов, и их количество 
было больше чем самих блоков табов относительно друг друга(3 и 6),
а во втором мы через контейнер определяем контекст индексов. в каждом контейнере 3 таба и 3 блока контента
и мы получаем те элементы, которые находятся в контейнере относительно котрого был вызван this
*/
 }());

//СЛАЙДШОУ


(function(){

$('.slideshow__thumbs-link').on('click', function(e){

e.preventDefault();//отмена действия по умолчанию - переход по ссылке
//сохраняем нужные значение в переменные
var $this = $(this),//сохраняем элемент this
container = $this.closest('.slideshow'),//сохраняем главный контейнер виджета
display = container.find('.slideshow__display'),//сохраняем блок со слайдом
item = $this.closest('.slideshow__thumbs-item'),//сохраняем блоки маленьких картинок
path = $this.attr('href'),//сохраняем значение атрибута - пути к картинке 
preloader = container.find('.slideshow__preloader'),//сохраняем блок прелоадера
duration = 600;//сохраняем длительность анимации

preloader.show();//показываем прелоадер
display.fadeOut(duration, function(){//скрываем блок со слайдом, вызывая ф-цию callback
$(this).attr('src', path).load(function(){//в ней меняем атрибут пути к картинке у блока display
	//и при загрузке этого эелемента
$(this).fadeIn(duration);//this меняет контекст. теперь он берется относительно объекта, к которому применяют анимацию
//показываем его
preloader.hide();//скрываем preloader
});

});

item.addClass('active').siblings().removeClass('active');
});

}());



//Аккордеон


(function(){

$('.acco__trigger').on('click', function(e){
e.preventDefault();
var $this = $(this),
container = $this.closest('.acco'),
item = $this.closest('.acco__item'),
currentContent = item.find('.acco__content'),
duration = 600;

//currentContent.slideToggle(duration);

if(!item.hasClass('active')){
item.addClass('active').siblings().removeClass('active').find('.acco__content').slideUp(duration);
currentContent.slideDown(duration);
}
else{
item.removeClass('active');
currentContent.slideUp(duration);
}
});


}());
});