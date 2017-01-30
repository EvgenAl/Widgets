$(function(){
	//кликаем по пункту меню
	$('a[href^="#"]').click(function () { 
					//сохраняем значение атрибута ссылки, кот является id для целевого блока
					elementClick = $(this).attr("href");
					//считаем верхний отступ целевого блока от окна
					destination = $(elementClick).offset().top;
					//анимируем прокрутку страницы к целевому блоку
					$('html').animate( { scrollTop: destination }, 1200 );		
					return false;
				});
});