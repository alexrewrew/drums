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

    var sound1 = $("#audio1")[0];
    var sound2 = $("#audio2")[0];
    var sound3 = $("#audio3")[0];
    var sound4 = $("#audio4")[0];
    $(".note-1").mouseenter(function() {
            sound1.pause();
            sound1.play();
        });
    $(".note-2").mouseenter(function() {
            sound2.pause();
            sound2.play();
        });
    $(".note-3").mouseenter(function() {
            sound3.pause();
            sound3.play();
        });
    $(".note-4").mouseenter(function() {
            sound4.pause();
            sound4.play();
        });
    $(".sound-circle--sound").click(function() {
            sound4.pause();
            sound4.play();
        });
    $('.sound-circle--play').click(function(){
        
    });

    //responsive scripts
    if (window.matchMedia('(max-width: 767px)').matches) {
        
    }
})


