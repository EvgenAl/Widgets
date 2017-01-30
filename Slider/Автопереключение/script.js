var slideWidth=321;
//создаем переменную ширины слайда, присвоив ей значение 300px
var sliderTimer;
//создаем переменную таймера
$(function(){
$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
//задаем ширину блоку слайдеров умножив количество слайдов на ширину 1 слайда
    sliderTimer=setInterval(nextSlide,2000);
//создаем таймер, который запускает ниже описанную функцию с интервалом в 1с
    $('.viewport').hover(function(){
        clearInterval(sliderTimer);
//запускаем обработчик событий который при наведении останавливает таймер
    },function(){
        sliderTimer=setInterval(nextSlide,2000);
//а при отведении таймер снова запускается
    });
});

function nextSlide(){
//создаем функцию, которую будем запускать в таймере
    var currentSlide=parseInt($('.slidewrapper').data('current'));
//сохраняем в переменную текущее значение атрибута data-current преобразовав ее в число
    currentSlide++;
//увеличиваем значение атрибута на 1
    if(currentSlide>=$('.slidewrapper').children().size())
//делаем проверку - если значние атрибута больше или равно количеству слайдов то
    {
         $('.slidewrapper').css('left',-(currentSlide-2)*slideWidth); 
//смещаем позицию контейнера 
        $('.slidewrapper').append($('.slidewrapper').children().first().clone());
//создаем и вставляем клон первого слайда в конец блока слайдеров
        $('.slidewrapper').children().first().remove();
  //удаляем первый слайд
        currentSlide--;
//уменьшаем значение атрибута так как после удаления первого слайда и добавки клона последний стал предпоследним  
    }
//обнуляем атрибут
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
    $('.slidewrapper li:first').appendTo($('.slidewrapper'));
//анимируем позиционирование слева видимой части блока слайдов, задав отрицательный сдвиг влево, который 
//равен ширине слайда умноженной на значение атрибута data-current,
//затем в атрибут подставляется значение переменной, увеличенное счетчиком
}