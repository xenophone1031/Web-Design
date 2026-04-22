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
    $(".tab1").show();
    $(".tab2").hide();
})

$(".open-pop").click(function(){
    $(".pop").fadeIn();
})

$(".close-pop").click(function(){
    $(".pop").fadeOut();
})