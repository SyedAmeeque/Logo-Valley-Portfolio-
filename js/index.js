$(document).ready(function(){

    $('.popup-overlay').show(1000)

    $('#close').click(function(){
        $('.popup-overlay').hide(1000)
    })

    $('#contact').click(function(){
        $('.popup-overlay').show(1000)
    })
    $('.navbar .nav-item .nav-link').click(function(){
        $(this).css({
            'color':'#000'
        })
    })
   
    $('.navbar-toggler').click(function(){
        $(this).css({
            'outline':'none',
            'border':'none',
        })
    })
})