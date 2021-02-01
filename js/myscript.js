/* слайд-шоу bxSlider */ 
$(function(){
    $('.lead-slider').bxSlider({
        startSlide: 0,
        infiniteLoop: true,
        caption: true,
        touchEnabled: true,
        swipeThreshold: 50,
    });


    /* Изменение цвета svg */
    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            var $svg = jQuery(data).find('svg');

            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            $svg = $svg.removeAttr('xmlns:a');

            $img.replaceWith($svg);

        }, 'xml');
    });

    
    /* Открывающиеся списки */
    $('.list_wrapp').click(function() {
        $(this).siblings('.list_wrapp').children("p.list_item__hide").hide();
        $(this).siblings('.list_wrapp').children(".arrow").removeClass('arrow_top');
        $(this).children("p.list_item__hide").toggle();
        $(this).children('.arrow').toggleClass('arrow_top');
    });


    /* Изменение заголовков h2 при изменении размера экрана */
    if(window.matchMedia('(min-width: 798px)').matches){
        $('.h2_right').text('adipisicing');
        $('.h2_left').text('adipisicing');
    } else {
        $('.h2_right').text('amet consectetur');
        $('.h2_left').text('');
    }

});

