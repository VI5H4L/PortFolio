$(".int2").hide(1000);
$(".int3").hide(1000);
$(".int4").hide(1000);
$(".int5").hide(1000);
$(".int1").show(1000);

$(".1").on("click",function(){
    $(".int2").hide(1000);
    $(".int3").hide(1000);
    $(".int4").hide(1000);
    $(".int5").hide(1000);
    $(".int1").show(1000);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".1").addClass("active");
});

$(".2").on("click",function(){
    $(".int1").hide(1000);
    $(".int3").hide(1000);
    $(".int4").hide(1000);
    $(".int5").hide(1000);
    $(".int2").show(1000);
    $(".1").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".2").addClass("active");
});

$(".3").on("click",function(){
    $(".int2").hide(1000);
    $(".int1").hide(1000);
    $(".int4").hide(1000);
    $(".int5").hide(1000);
    $(".int3").show(1000);
    $(".2").removeClass("active");
    $(".1").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".3").addClass("active");
});

$(".4").on("click",function(){
    $(".int2").hide(1000);
    $(".int3").hide(1000);
    $(".int1").hide(1000);
    $(".int5").hide(1000);
    $(".int4").show(1000);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".1").removeClass("active");
    $(".5").removeClass("active");
    $(".4").addClass("active");
});

$(".5").on("click",function(){
    $(".int2").hide(1000);
    $(".int3").hide(1000);
    $(".int4").hide(1000);
    $(".int1").hide(1000);
    $(".int5").show(1000);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".1").removeClass("active");
    $(".5").addClass("active");
});



