$(window).scroll(function(){
    var data = $(window).scrollTop();
    console.log(data);
    $('section').css({
        'background-position-x' : - data + "px" // ini untuk paralax menggunakan jquery
    })
})