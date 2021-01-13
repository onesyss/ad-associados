/* cria uma rolagem independente no menu aside bar */
$(document).ready(function (){

$(".toggler").on("click", function(){
    $(".menu-container").toggleClass("active");
});

$(".nav-toggler").on("click", function(){
    $(".navbar-toggler").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
});

    function setMenuHeight(){
        var navbarheight = $(".navbar").outerHeight();
        $(".menu-wrapper")
        .outerHeight(document.documentElement.clientHeight - navbarheight)
        .niceScroll({
            emulatetouch: true
        });
    }
    setMenuHeight();
    $(window).on("resize", function(){
        setMenuHeight();
    });
});