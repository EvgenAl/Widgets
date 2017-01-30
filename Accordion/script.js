$(document).ready(function(){
	//скрываем блоки описания
	$('.forBorder > .sent').hide();
	//сохраняем в переменную объект всех блоков с контентом
	var otherContent = $('.sent'),
	//сохраняем время длительности анимации
	duration = 1000,
	//сохраняем все блоки по которым делаются клики
	nameBlock = $('.forBorder > h5');
	//запускаем функцию-обработчик клика по одному из заголовков
	$('.forBorder > h5').click(function(){
		//сохраняем в переменную объект блока описания по кот был клик
		var $answer = $(this).next('.sent');
		//пишем условие:если блок скрыт то:
		if($answer.is(':hidden')){
			//скрываем все блоки контента
			otherContent.slideUp(duration);
			//из всех заголовков удаляем класс с минусом
			nameBlock.removeClass('close_bl');
			//а блок по которому был клик показываем
			$answer.slideDown(duration);
			//в заголовок добавляем класс, кот вместо начального фона плюса добавляет минус
			$(this).addClass('close_bl');
			
		}
		else{
			//если блок описания не скрыт то скрывем его
			$answer.slideUp(duration);
			//удаляем класс с минусом в фоне
			$(this).removeClass('close_bl');
		}
	});
});