//burger menu
$(document).ready(function () {
    $("#js-burger").click(function () {
        $("#js-top-line").toggleClass("active");
        $("#js-center-line").toggleClass("active");
        $("#js-bottom-line").toggleClass("active");
        $("#js-nav").toggleClass("show");
    });

    $('#js-nav *').click(function () {
        $('#js-nav').removeClass('show');
        $("#js-top-line").removeClass("active");
        $("#js-center-line").removeClass("active");
        $("#js-bottom-line").removeClass("active");
    })

    $('.main__btn').click(function () {
        $('html,body').animate({
            scrollTop: $('#programm').offset().top},500);
    });

})
// scroll down while the backgorund of header changes

$(document).ready(function () {
    let header = $('.header');
    let initialoffset = header.offset().top + 50;
    console.log(initialoffset);


    $(window).scroll(function (){
        let scrollPosition = $(this).scrollTop();
        if(scrollPosition > initialoffset) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    } )
});


//  readmore button
// const btnMore = document.querySelectorAll('.text__more-btn');
// const dots = document.querySelector('.dots');

//     btnMore.forEach(item=>{

//     item.style.setProperty("--before-left", item.clientWidth + 20 + "px");

//     item.addEventListener('click', (e)=> {
//         let target = e.target;
//         let textElem = target.previousElementSibling.lastElementChild;
//         let dotsElem = target.previousElementSibling.firstElementChild;
//       if(dotsElem.style.display === 'none') {
//           dotsElem.style.display = "inline";
//           textElem.style.display = "none";
//          target.textContent = "Читать далее";
//           let width = target.clientWidth ;
//           target.style.setProperty('--before-left', width + 10 + "px");
//       } else {
//           dotsElem.style.display = "none";
//           textElem.style.display = "inline";
//           target.textContent = "Скрыт";
//           let width = target.clientWidth;
//           target.style.setProperty('--before-left', width + 10 + "px");
//         }
// })});

$('.text__more-btn').each(function() {
    $(this).css("--before-left", $(this).outerWidth() + 20 + "px");

    $(this).on('click', function(e) {
      let target = e.target;
      let textElem = $(target).prev().children().last();
      let dotsElem = $(target).prev().children().first();
      if (dotsElem.css('display') === 'none') {
          dotsElem.css('display', 'inline');
          textElem.css('display', 'none');
          $(target).text("Читать далее");
         let width = $(target).outerWidth();
         $(target).css('--before-left', width + 10 + "px");
      } else {
        dotsElem.css('display', 'none');
        textElem.css('display', 'inline');
        $(target).text("Скрыт");
        let width = $(target).outerWidth();
        $(target).css('--before-left', width + 10 + "px");
      }
    });
  });



//slick slider
$(document).ready(function(){
    $('.schedule__slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite:  true,
                dots: true
                }
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: '20px'
                }
            }
        ]
    });
    $('.gallery').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: `<button type="button" class="prev-btn"><img src="app/images/prev-arrow2.png" alt="prev"></button>`,
        nextArrow: `<button type="button" class="next-btn"><img src="app/images/next-arrow2.png" alt="prev"></button>`,
        breakpoint: 568, 
        settings: {   
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,

        }
    });
    $('.feedback__cards').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        prevArrow: `<button type="button" class="prev-btn"><img src="app/images/prev-arrow2.png" alt="prev"></button>`,
        nextArrow: `<button type="button" class="next-btn"><img src="app/images/next-arrow2.png" alt="next"></button>`,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite:  true,
                    dots: true,
                    adaptiveHeight: true
                }   
            }]
    });

       
    let slider = $('.feedback__cards');

    $('.text__more-btn').click(function() {
        var currentSlide = slider.slick('slickCurrentSlide');
        var currentSlideContent = slider.find('.slick-slide').eq(currentSlide).find('.feedback__card');
        var newSlideHeight = currentSlideContent.outerHeight();

        slider.find('.slick-list').height(newSlideHeight);
        slider.slick('setPosition');
    });
});


//    popup magic
  $(document).ready(function() {
	$('.gallery__slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});
  const popup = $('.popup');
  $(document).ready(function() {

      // $('#btn-order').click(function () {
      //     $('.popup').addClass('active');
      // });
      $('.call-btn').click(function () {
          popup.css('top','0');
          popup.addClass('active');

      });
      $('.close-btn').click(function () {
          $('.popup').removeClass('active');
          popup.css('top','-150%');
      })
  });
$(document).ready(function() {
    $("#phone1").mask("+7-999-999-99-99");
    $("#phone").mask("+7-999-999-99-99");
})

$(document).ready(function() {
    const inputName = $('.input-name');
    const inputPhone = $('.input-phone');
    const inputError = $('.input-error');
    const adress = $('.input-adress');
    const msgPopup = $('.msg-popup');
    const form = $('.popup-form');
    // allow only letters
    inputName.keypress(function(event) {
        let key = event.which;
        if (key < 65 || key > 90 && key < 97 || key > 122) {
            event.preventDefault();
        }
    });
    inputPhone.keypress(function (event) {
        let key = event.which ;
        if(key < 48 || key > 57) {
            event.preventDefault();
        }
     });

    form.submit(function (e) {
        e.preventDefault();
        inputError.hide();
        let isError = false ;

        if(!inputName.val()){
            inputName.next().text("Поля нужно заполнят").show();
            isError = true ;
        } else if (inputName.val().length < 3) {
            inputName.next().text("Имя должен состоит не менее 3 символов").show();
            isError = true ;
        }
        if(!adress.val()){
            adress.next().show();
            isError = true ;
        } else if (adress.val().length < 3) {
            adress.next().text("Имя должен состоит не менее 3 символов").show();
            isError = true ;
        }
        if(!inputPhone.val()) {
            inputPhone.next().show();
            isError = true ;
        }
        let loader = $('.loader');
        if(!isError) {
            loader.css('display',"flex");
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { name: inputName.val(), adress: adress.val(), phone: inputPhone.val()}
            })
                .done(function( msg ) {
                    if(msg.success == 1 ) {
                        loader.hide();
                        popup.css('top', '-150%');
                        msgPopup.css('display', "flex");

                        setTimeout(function () {
                            msgPopup.css('display', "none");
                            form[0].reset();
                        },2000);
                    } else {
                        alert("Возникла ошибка при заполнении");
                        loader.css('display',"none");
                        form[0].reset();
                        setTimeout(function () {
                            popup.css('top', '-150%');
                        },1000);
                    }
                });
        }
    })
} );


$(document).ready(function() {
    const inputname = $('#name');
    const inputPhone = $('#phone');
   
    const form = $('#order-form');
    const inputError = $('.order-input-error');
    let loader = $('.loader');
    const msgPopup = $('.msg-popup');

    inputname.keypress(function(e) {
        let key = e.which;
        if (key < 65 || key > 90 && key < 97 || key > 122) {
            e.preventDefault();
        }
    });
    inputPhone.keypress(function (e) {
        let key = e.which ;
        if(key < 48 || key > 57) {
            e.preventDefault();
        }
    });
   


    form.submit(function (e) {
        e.preventDefault();
        inputError.hide();
        inputname.removeClass('border');
        inputPhone.removeClass('border');
        $('.error-invalid').hide(); 

        let isError = false ;

        if (!inputname.val()) {
            inputname.addClass('border')
            inputname.next().show();
            isError = true;
        }
        if(!inputPhone.val()) {
            inputPhone.next().show();
            isError = true ;
            inputPhone.addClass('border');
        }

        // if(!inputEmail.val()) {
        //     inputEmail.parent().next().show();
        //     isError = true ;
        //     $('.footer__input::before').addClass('error-border');
        // } else if (!validateEmail(inputEmail.val()))  {   
        //      $('.error-invalid').show(); 
        //      isError = true;
        // }
        
        if(!isError) {
            loader.css('display',"flex");
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { name: inputname.val(), phone: inputPhone.val()}
            })
                .done(function( msg ) {
                    if(msg.success == 1 ) {
                        loader.hide();
                        msgPopup.css('display', "flex");

                        setTimeout(function () {
                            msgPopup.css('display', "none");
                            form[0].reset();
                            inputEmail.val(""); 
                        },2000);
                    } else {
                        alert("Возникла ошибка при заполнении");
                        loader.css('display',"none");
                        form[0].reset();
                        inputEmail.val(""); 
                    }
                });
        }
    });
})

$(document).ready(function() {  
    const inputEmail = $('.footer__input-email');
    const footerForm = $('.footer__form');

    function validateEmail(email) {
        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Check if the email matches the regular expression
        return emailRegex.test(email);
      }
    footerForm.submit(function(e) {  
        e.preventDefault();
        let isError = false;

        if(!inputEmail.val()) {
            inputEmail.parent().next().show();
            isError = true ;
            $('.footer__input::before').addClass('error-border');
        } else if (!validateEmail(inputEmail.val()))  {   
             $('.error-invalid').show(); 
             isError = true;
        }
        if(isError) {  
            alert("Отправили вам ссылку на вашу почту");
        };

    })      
} ) ;



let wow = new WOW({
    animateClass: 'animate__animated',
    mobile: false
});

wow.init();







