$(function(){
			$('.gallery a').click(function(evt) {
		//отменяем действие по умолчанию - переход на ссылку
		evt.preventDefault();
		 //получаем адрес большой картинки и сохраняем в переменную
		 var imgPath = $(this).attr('href');
		 //получаем старую картинку и сохраняем в переменную
		 var oldImage = $('.photo img');

			 //создаем новую картинку, добавив в src ссылку на большу картинку
			 var newImage = $('<img src="' + imgPath +'">');
			 //скрываем новую картинку
			 newImage.hide();
			 //добавляем новую катинку в блок
			 $('.photo').prepend(newImage);
			 //показываем ее
			 newImage.fadeIn(1000);
			 
			 //скрываем старую картинку и удаляем ее
			 oldImage.fadeOut(1000,function(){
			 	$(this).remove();
			 });		 
	}); // end click
			//запускаем событие автоматически вызывав клик, чтоб добавилась картинка первой ссылки
			$('.gallery a:first').click();
});//end ready