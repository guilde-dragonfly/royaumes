var timer;
$(".perso ul li").mouseenter(function() {
    var that = this;
    timer = setTimeout(function(){
        $('.perso ul li').removeClass('hovered').addClass('adapt');
        $(that).addClass('hovered');
    }, 300);
}).mouseleave(function() {
    clearTimeout(timer);
});


$('.perso ul li:nth-of-type(1)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(1)').delay( 200 ).fadeIn(1000);
});
$('.perso ul li:nth-of-type(2)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(2)').delay(500).fadeIn(800);
});
$('.perso ul li:nth-of-type(3)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(3)').delay(200).fadeIn(1000);
});
$('.perso ul li:nth-of-type(4)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(4)').delay(300).fadeIn(1000);
});
$('.perso ul li:nth-of-type(5)').click(function(){
   $('.perso').fadeOut(800);
    $('article:nth-of-type(5)').delay(300).fadeIn(1000);
});

$('.close').click(function(){
    $('article').fadeOut(800);
  $('.perso').delay(300).fadeIn(800);
});

// deuxième partie

var timer;
$(".perso1 ul li").mouseenter(function() {
    var that = this;
    timer = setTimeout(function(){
        $('.perso1 ul li').removeClass('hovered').addClass('adapt');
        $(that).addClass('hovered');
    }, 300);
}).mouseleave(function() {
    clearTimeout(timer);
});


$('.perso1 ul li:nth-of-type(1)').click(function(){
   $('.perso1').fadeOut(800);
    $('article:nth-of-type(6)').delay( 200 ).fadeIn(1000);
});
$('.perso1 ul li:nth-of-type(2)').click(function(){
   $('.perso1').fadeOut(800);
    $('article:nth-of-type(7)').delay(500).fadeIn(800);
});
$('.perso1 ul li:nth-of-type(3)').click(function(){
   $('.perso1').fadeOut(800);
    $('article:nth-of-type(8)').delay(200).fadeIn(1000);
});
$('.perso1 ul li:nth-of-type(4)').click(function(){
   $('.perso1').fadeOut(800);
    $('article:nth-of-type(9)').delay(300).fadeIn(1000);
});
$('.perso1 ul li:nth-of-type(5)').click(function(){
   $('.perso1').fadeOut(800);
    $('article:nth-of-type(10)').delay(300).fadeIn(1000);
});

$('.close').click(function(){
    $('article').fadeOut(800);
  $('.perso1').delay(300).fadeIn(800);
});

// troisième partie

var timer;
$(".perso2 ul li").mouseenter(function() {
    var that = this;
    timer = setTimeout(function(){
        $('.perso2 ul li').removeClass('hovered').addClass('adapt');
        $(that).addClass('hovered');
    }, 300);
}).mouseleave(function() {
    clearTimeout(timer);
});


$('.perso2 ul li:nth-of-type(1)').click(function(){
   $('.perso2').fadeOut(800);
    $('article:nth-of-type(11)').delay( 200 ).fadeIn(1000);
});
$('.perso2 ul li:nth-of-type(2)').click(function(){
   $('.perso2').fadeOut(800);
    $('article:nth-of-type(12)').delay(500).fadeIn(800);
});
$('.perso2 ul li:nth-of-type(3)').click(function(){
   $('.perso2').fadeOut(800);
    $('article:nth-of-type(13)').delay(200).fadeIn(1000);
});
$('.perso2 ul li:nth-of-type(4)').click(function(){
   $('.perso2').fadeOut(800);
    $('article:nth-of-type(14)').delay(300).fadeIn(1000);
});
$('.perso2 ul li:nth-of-type(5)').click(function(){
   $('.perso2').fadeOut(800);
    $('article:nth-of-type(15)').delay(300).fadeIn(1000);
});

$('.close').click(function(){
    $('article').fadeOut(800);
  $('.perso2').delay(300).fadeIn(800);
});