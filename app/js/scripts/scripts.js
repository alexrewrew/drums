/**
 * Created by alexrewrew on 15.02.17.
 */
$(document).ready(function () {

    $('.item-comment').click(function () {
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

    $('.sound-circle--play').click(function () {
        $('.sound-circle--mask').toggleClass('unmuted');
        $('.sound-circle--play svg').toggleClass('hidden-block');
    });

    var sound11 = $("#audio11")[0];
    var sound12 = $("#audio12")[0];
    var sound13 = $("#audio13")[0];
    var sound14 = $("#audio14")[0];
    var sound15 = $("#audio14")[0];
    var sound21 = $("#audio21")[0];
    var sound22 = $("#audio22")[0];
    var sound23 = $("#audio23")[0];
    var sound24 = $("#audio24")[0];
    var sound25 = $("#audio24")[0];

    $(".note-1").mouseenter(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound11.pause();
            sound11.currentTime = 0;
            sound11.play();
        }
    });
    $(".note-2").hover(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound12.pause();
            sound12.currentTime = 0;
            sound12.play();
        }
    });
    $(".note-3").mouseenter(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound13.pause();
            sound13.currentTime = 0;
            sound13.play();
        }
    });
    $(".note-4").mouseenter(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound14.pause();
            sound14.currentTime = 0;
            sound14.play();
        }
    });
    $(".note-5").mouseenter(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound15.pause();
            sound15.currentTime = 0;
            sound15.play();
        }
    });
    $(".note-6").mouseenter(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound21.pause();
            sound21.currentTime = 0;
            sound21.play();
        }
    });
    $(".note-7").hover(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound22.pause();
            sound22.currentTime = 0;
            sound22.play();
        }
    });
    $(".note-8").mouseenter(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound23.pause();
            sound23.currentTime = 0;
            sound23.play();
        }
    });
    $(".note-9").mouseenter(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound24.pause();
            sound24.currentTime = 0;
            sound24.play();
        }
    });
    $(".note-10").mouseenter(function () {
        if ($(this).parent().hasClass("unmuted")) {
            sound25.pause();
            sound25.currentTime = 0;
            sound25.play();
        }
    });
    $(".sound-circle--sound").click(function () {
            sound11.pause();
            sound11.currentTime = 0;
            sound11.play();

    });


    //responsive scripts
    if (window.matchMedia('(max-width: 767px)').matches) {

    }
})


