/**
 * Created by alexrewrew on 15.02.17.
 */
$(document).ready(function () {

    $('.item-comment').click(function(){
        event.preventDefault();
        $(this).toggleClass('open');
    });

    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: (top - 100)}, 1500);
    });

    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.nav-display').slideToggle();
    });

    //responsive scripts
    if (window.matchMedia('(max-width: 767px)').matches) {
        
    }
})


