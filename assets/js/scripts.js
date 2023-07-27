$(function(){

    // $('[data-fancybox]').fancybox({
    //     protect: true
    // });


    $('.footer .fotLinks h4').click(function(){
        $(this).parents('.footer .fotLinks').find('ul').slideToggle();
        $(this).toggleClass('active')
      });



});







