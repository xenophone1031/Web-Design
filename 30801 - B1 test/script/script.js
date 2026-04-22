$(".menu>li").mouseenter(function(){
    $(".sub-menu").show();
})

$(".menu>li").mouseleave(function(){
    $(".sub-menu").hide();
})

$(".tab2").hide();

$(".btn-gallery").click(function(){
    $(".tab2").show();
    $(".tab1").hide();
})

$(".btn-notice").click(function(){
    $(".tab2").hide();
    $(".tab1").show();
})

$(".open-pop").click(function(){
    $(".pop").fadeIn();
})

$(".close-pop").click(function(){
    $(".pop").fadeOut();
})