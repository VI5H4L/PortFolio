$(".1").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i1.png");
        
    }, 200);
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".1").addClass("active");
});

$(".2").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i2.png");
        
    }, 200);
    
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    //$(".int1").addClass("nonhidden");
    $(".1").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".2").addClass("active");
});

$(".3").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i3.png");
        
    }, 200);
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    $(".2").removeClass("active");
    $(".1").removeClass("active");
    $(".4").removeClass("active");
    $(".5").removeClass("active");
    $(".3").addClass("active");
});

$(".4").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i4.png");
        
    }, 200);
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".1").removeClass("active");
    $(".5").removeClass("active");
    $(".4").addClass("active");
});

$(".5").on("click",function(){
    $(".int1").addClass("hidden");
    setTimeout(() => {
        
        $(".int1").attr("src","images/i5.png");
        
    }, 200);
    setTimeout(() => {
        
        $(".int1").removeClass("hidden");
        
    }, 200);
    $(".2").removeClass("active");
    $(".3").removeClass("active");
    $(".4").removeClass("active");
    $(".1").removeClass("active");
    $(".5").addClass("active");
});

const typeWriter = document.getElementById('type-text');
const text = 'Clubs';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);





