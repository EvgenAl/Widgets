$(function(){
//var
//сохраняем в переменную объект меню
var $nav = $('.nav-underline'),
//создаем элемент линии, вставляем его в меню
$line = $('<div>').appendTo($nav),
//создаем переменню для активного пункта меню
$activeLi,
//ширина пункта меню
lineWidth,
//переменная для отступа слева
liPos;

function refresh(){
	//находим пункт меню с классом active
	$activeLi = $nav.find('li.active');
	//получаем его ширину
	lineWidth = $activeLi.outerWidth();
	//получаем его отступ слева
	liPos = $activeLi.position().left;
};

refresh();
//присваиваем меню относитльеное позионирование
$nav.css('position','relative');
//line
//создаем линию и анимируем ее появление
  function lineSet() {
  	//
   $line.css({
     'position':'absolute',
     'background-color':'#ffffff',
     'bottom':'0',
     'height':'3px'
   }).animate({//
     'left':liPos,
     'width':lineWidth
   }, 200);
  }
  lineSet();  
  
  //on click
  // по клику вызываем функцию 
  $nav.find('li').on('click', function() {
  	//которая удаляет класс active у элементов
    $activeLi.removeClass('active');
    //и добавляет его тому пункту по кот блы щелчок
    $(this).addClass('active');
    //затем вызывается функция кот сохраняет ширину и отступ линии
    refresh();
    //и функция которая создает линию по полученным данным
    lineSet();
  });


//click
});