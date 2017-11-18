/*-----------------------------------------------------------------------------------*/
/*      * global $, jQuery, alert  
/*-----------------------------------------------------------------------------------*/

(function ($) {

    'use strict';
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start Use Wow Js And mixItUp Js
    /*-----------------------------------------------------------------------------------*/
    
    new WOW().init();
    
    $("#container-mixItUp").mixItUp();

    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start NiceScroll
    /*-----------------------------------------------------------------------------------*/

    // Change Scroll Design For Mobile
    
    var blockNiceScroll = $(window).width();
    
    if(blockNiceScroll >= 768) {
    
        $("body").niceScroll({

            cursorcolor: "#d9bf77",
            cursorborder: "1px solid #d9bf77",
            cursorwidth: "6px",
            zindex:99999999

        });
  
        
    }else {
        
        $("body").getNiceScroll().remove();

    }
    
    // Repeat Code Change Design Scroll For Responsive

    $(window).resize(function(){ 
        
    var blockNiceScroll = $(window).width();
    
    if(blockNiceScroll >= 767) {
    
        $("body").niceScroll({

            cursorcolor: "#d9bf77",
            cursorborder: "1px solid #d9bf77",
            cursorwidth: "6px",
            zindex:99999999

        });

        
    }else {
        
        $("body").getNiceScroll().remove();

    }

        
    });    


    /*-----------------------------------------------------------------------------------*/
    /*  * Start Preloader
    /*-----------------------------------------------------------------------------------*/

    // Use frameworks Typed JS For Anomation
    
    var typed = new Typed('#loader-typed', {
        
    stringsElement: '#loader-typed-strings',
    backDelay: 180,
    typeSpeed: 190,
    loop: true
        
    });
    
    // loader Check
    
    var win = $(window);
    
    win.on('load',function() {
           
        $('#loader').delay(1500).fadeOut('slow', function(){
            $('#loader').remove();
        });
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Top Search 
    /*-----------------------------------------------------------------------------------*/  
    
    $('.navbar-default .navbar-nav>li>a i.ion-ios-search-strong').on('click', function(f) {
	
	if ( $(f.target).is('i.ion-ios-search-strong') ) {
        
        $(".top-search").fadeIn(1000);

	}
        
    });
    
    $('.top-search form label i.ion-close-circled').on('click', function(c) {
	
	if ( $(c.target).is('i.ion-close-circled') ) {
        
        $(".top-search").fadeOut(1000);

	}
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start NavBar Navigtion
    /*-----------------------------------------------------------------------------------*/      
        
    $(window).scroll(function () {

    var heightScroll = $(this).scrollTop();

    if(heightScroll >= 46){

        $(".menu-nav .navbar-default").attr("id","whiteFixed");
        $(".navbar>.container .navbar-brand").attr("id","brandColorFixed");
        $(".navbar-default .navbar-nav>li>a").attr("id","linkColorFixed");
        $(".navbar-default .navbar-toggle .icon-bar").attr("id","icon-barColor");

    }else{


        $("#whiteFixed").removeAttr("id");
        $("#brandColorFixed").removeAttr("id");
        $(".navbar-default .navbar-nav>li>a").removeAttr("id");
        $(".navbar-default .navbar-toggle .icon-bar").removeAttr("id");


    }
        
    });
    
    $(window).resize(function(){
        
    $(window).scroll(function () {

    var heightScroll = $(this).scrollTop();

    if(heightScroll >= 46){

        $(".menu-nav .navbar-default").attr("id","whiteFixed");
        $(".navbar>.container-fluid .navbar-brand").attr("id","brandColorFixed");
        $(".navbar-default .navbar-nav>li>a").attr("id","linkColorFixed");
        $(".navbar-default .navbar-toggle .icon-bar").attr("id","icon-barColor");

    }else{


        $("#whiteFixed").removeAttr("id");
        $("#brandColorFixed").removeAttr("id");
        $(".navbar-default .navbar-nav>li>a").removeAttr("id");
        $(".navbar-default .navbar-toggle .icon-bar").removeAttr("id");


    }
        
    });

    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start Home Page
    /*-----------------------------------------------------------------------------------*/
    
   $(".home, .home .contents-container").height($(window).height());
    
    $(window).resize(function(){ 
        
        $(".home, .home .contents-container").height($(window).height());
    });
    
    $(".arrow-slide .lines-break .arrow-left").on('click', function(){
        
        $(".home .img-home img#home1").fadeIn();
        $(".home .img-home img#home2, .home .img-home img#home3").fadeOut();
        $(".arrow-slide .lines-break span").siblings().removeAttr("id","active");
        $(".arrow-slide .lines-break .arrow-left").attr("id","active");
    });
    
    $(".arrow-slide .lines-break .arrow-center").on('click', function(){
        
        $(".home .img-home img#home2").fadeIn();
        $(".home .img-home img#home1, .home .img-home img#home3").fadeOut();
        $(".arrow-slide .lines-break span").siblings().removeAttr("id","active");
        $(".arrow-slide .lines-break .arrow-center").attr("id","active");
    });
    
    
    $(".arrow-slide .lines-break .arrow-right").on('click', function(){
        
        $(".home .img-home img#home3").fadeIn();
        $(".home .img-home img#home1, .home .img-home img#home2").fadeOut();
        $(".arrow-slide .lines-break span").siblings().removeAttr("id","active");
        $(".arrow-slide .lines-break .arrow-right").attr("id","active");
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start About Me
    /*-----------------------------------------------------------------------------------*/
        
    $(window).scroll(function () {

    var heightScrollAnimation = $(this).scrollTop();

    if(heightScrollAnimation >= 130){
        
        $(".lines-about span.line:nth-child(1)").attr("id","chnage-place-1");
        $(".lines-about span.line:nth-child(2)").attr("id","chnage-place-2");
        $(".lines-about span.line:nth-child(3)").attr("id","chnage-place-3");
        $(".lines-about span.line:nth-child(4)").attr("id","chnage-place-4");
        $(".lines-about span.line:nth-child(5)").attr("id","chnage-place-5");
        
    }else{
        
        $(".lines-about span.line:nth-child(1)").removeAttr("id","chnage-place-1");
        $(".lines-about span.line:nth-child(2)").removeAttr("id","chnage-place-2");
        $(".lines-about span.line:nth-child(3)").removeAttr("id","chnage-place-3");
        $(".lines-about span.line:nth-child(4)").removeAttr("id","chnage-place-4");
        $(".lines-about span.line:nth-child(5)").removeAttr("id","chnage-place-5");
    }
        
    });
    $(window).resize(function(){
        
    $(window).scroll(function () {

    var heightScrollAnimation = $(this).scrollTop();

    if(heightScrollAnimation >= 130){
        
        $(".lines-about span.line:nth-child(1)").attr("id","chnage-place-1");
        $(".lines-about span.line:nth-child(2)").attr("id","chnage-place-2");
        $(".lines-about span.line:nth-child(3)").attr("id","chnage-place-3");
        $(".lines-about span.line:nth-child(4)").attr("id","chnage-place-4");
        $(".lines-about span.line:nth-child(5)").attr("id","chnage-place-5");

    }else{
        
        $(".lines-about span.line:nth-child(1)").removeAttr("id","chnage-place-1");
        $(".lines-about span.line:nth-child(2)").removeAttr("id","chnage-place-2");
        $(".lines-about span.line:nth-child(3)").removeAttr("id","chnage-place-3");
        $(".lines-about span.line:nth-child(4)").removeAttr("id","chnage-place-4");
        $(".lines-about span.line:nth-child(5)").removeAttr("id","chnage-place-5");
    }
        
    });

    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  * Start Hire Me
    /*-----------------------------------------------------------------------------------*/
    
    $(".hire .overlay-hire-me").height($(".hire").height());
    
    $(window).resize(function(){ 
        
        $(".hire .overlay-hire-me").height($(".hire").height());
    });
    
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start My Portfolio
    /*-----------------------------------------------------------------------------------*/
    
    $(".portfolio .filter-section ul li a").on('click', function(){
        
        $(".portfolio .filter-section ul li a").children().fadeOut(1000);
        
        $(this).children().fadeIn(1000);
        
    });
    
    $(".portfolio-item .portfolio-media .work-contents").outerHeight($(".portfolio-item .portfolio-media .work-img img").outerHeight());
    
    $(window).resize(function(){ 
        
        $(".portfolio-item .portfolio-media .work-contents").outerHeight($(".portfolio-item .portfolio-media .work-img img").outerHeight());
        
    });
    
    /*-----------------------------------------------------------------------------------*/
    /*  Start Smooth Scroll To Sections
    /*-----------------------------------------------------------------------------------*/
    
    $(".scroll-home").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $("#home").offset().top
            
        },1000);
        
    });

    $(".scroll-about").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $("#about").offset().top - 65
            
        },1000);
        
    });
    
    $(".scroll-services").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $("#services").offset().top - 65
            
        },1000);
        
    });
    
    
    $(".scroll-resume").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $("#resume").offset().top - 65
            
        },1000);
        
    });

    $(".scroll-portfolio").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $("#portfolio").offset().top - 60
            
        },1000);
        
    });
    
    $(".scroll-blogs").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $("#blogs").offset().top - 60
            
        },1000);
        
    });
    
    $(".scroll-contact, .home .box-home button, .about .info-about button.btn").on('click', function() {
        
        $("html, body").animate({
            
            scrollTop: $("#contact").offset().top - 60
            
        },1000);
        
    });
    
    
})(jQuery);	

/*-----------------------------------------------------------------------------------*/
/*      * End  
/*-----------------------------------------------------------------------------------*/
