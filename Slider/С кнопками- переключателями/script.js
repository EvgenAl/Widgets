
$(function(){
	var width = $('.viewport').width();
 //сохраняем в переменную ширину одного слайда
	$('.slidewrapper>li').width(width);
 //делаем так чтобы один слайд был шириной во всю видимую область контейнера слайдов
  $('.slidewrapper').width(width*$('.slidewrapper>li').length);
	//вычисляем полную ширину контейнера как произведение ширины 1 слайда на их количество


$('.slidewrapper').css('left',-width);
//смещаем слайдер влево на минус одно значение ширины слайда
$('.slidewrapper>li:last-child').prependTo('.slidewrapper');
//помещаем последний слайд в начало контейнера для слайдов


  //move slides forward
  function nextSlide() {
    $('.slidewrapper').animate({
      'margin-left':-width
  //смещаем весь контейнер влево на минус одно значение ширины слайда
    },500, function() {
      $('.slidewrapper>li:first-child').appendTo('.slidewrapper');
  //вставляем первый слайд в конец контейнера
      $('.slidewrapper').css('margin-left', 0);
  //выравниваем контейнер, чтобы не было смещения влево из за перемещения слайда в конец слайдера
    });
  }

  //move slides backwards
  function prevSlide() {
    $('.slidewrapper').animate({
      'margin-left':width
    },500, function() {
      $('.slidewrapper>li:last-child').prependTo('.slidewrapper');
      $('.slidewrapper').css('margin-left', 0);
    });
  }
    
  //controls
  $('.next').click(nextSlide);
  $('.prev').click(prevSlide)



});


