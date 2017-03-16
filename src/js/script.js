
/*==============slick=============*/

$('.main-4__body').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  dots: false,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function() {
$('.footer__select').styler();  
$(".main-5__item").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		showNavArrows : false,
		overlayShow : true,
		
		padding : 0,
		helpers : {
			media : {}
		},
		thumbs	: {
				width	: 400,
				height	: 400
			}	

	});

  $('#singup').click(function(){
    $('.layout, .popupwrapper').show();
  })

   $('#popupclose').click(function(){
    $('.layout , .popupwrapper').hide();
  })

/*================#=====================*/
	$('#about-b').click(function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        console.log(123);
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
   });
	$('#features-b').click(function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        console.log(123);
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
   });
	$('#ideas-b').click(function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        console.log(123);
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
   });
	
	
});