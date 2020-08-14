// ini membuat gambar menjadi bergerak menggunakan jquery dengan function mouse move
$(document).mousemove(function(e){
    $('#gambar2').css({
        'left' : -e.pageX / 20,
        'top' : -e.pageY / 20 + 70
    })
    $('#gambar1').css({
        'left' : e.pageX / 20,
        'top' : e.pageY / 20 + 70
    })
})

// bermain discroll
var nilai = 0;
var arah = ''

$(window).scroll(function(){
    var nScroll = $(this).scrollTop();
    // console.log(nScroll);
    if (nilai < nScroll) {
        nilai = nScroll
        arah = 'down'
    } else if (nilai > nScroll){
        nilai = nScroll
        arah = 'up'
    }

    if (nScroll > $('#mov').offset().top - 500) {
        $("#mov h1").css({
            'left' : nScroll / 4,
            'transition': 'left 0.1 ease'
        })
        if (arah == 'down') {
            if ($('.frame').offset().left > 180) {
                $('.frame').css({
                    'left' : 180
                })
            } else {
                $('.frame').css({
                    'left' : nScroll /3.5
                })
            }
        } else if (nScroll / 3.5 < 180) {
            $('.frame').css({
                'left' : nScroll / 3.5
            })
        }
        $('#data1').css({
            'top' : nScroll / 2 + 650,
            'left' : 500
        })
        $('#data2').css({
            'top' : nScroll / 3 + 650,
            'left' : 600
        })
    }
})

