$(document).ready(function(){
    $(".hideit").click(function(){
        $(".overlay").hide();
    });
    $("#trigger-overlay").click(function(){
        $(".overlay").show();
    });
});

    $(document).ready(function(){

    var kawa = $('.top-bar');
    var back = $('#back-to-top');
    function scroll() {
    if ($(window).scrollTop() > 700) {
    kawa.addClass('fixed');
    back.addClass('show-top');

} else {
    kawa.removeClass('fixed');
    back.removeClass('show-top');
}
}

    document.onscroll = scroll;
});

<!--HHHHHHHHHHHH        Smooth Scrooling     HHHHHHHHHHHHHHHH-->

    $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
