jQuery(document).ready(function($){
    $('.main-nav, .social-nav').hide();
    $('.main-header__button').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.main-nav, .social-nav').slideToggle();
        //$('nav').slideToggle();
        //$('nav').animate({width:'toggle'},350);
    });

    $('#sucursal').on('change', function() {
        console.log( this.value );
    });

    // Todas las funciones se ejecutan al cambiar el tamaño de la pantalla
    $(window).resize(function() {
        if ($(window).width() >= 576) {
            // INICIO FUNCION CAMBIAR IMAGENES BANNER EN MOBIL CON RESPECTO A LAPTOP
            // Borramos todos los slides del container
            $(".carousel-container-js").empty();
            for(var i = 1; i <= 3; i++){
                // si es la primera foto , en div class agregar active
                if(i == 1) {
                    $(".carousel-container-js" ).append( `<div class="carousel-item active"><img src="img/banner${i}.jpg" class="d-block w-100 img-carousel" alt="imagen banner ${i}"></div>` );
                } else {
                    $(".carousel-container-js" ).append( `<div class="carousel-item "><img src="img/banner${i}.jpg" class="d-block w-100 img-carousel" alt="imagen banner ${i}"></div>` );
                }
            }
        } else {
            $(".carousel-container-js").empty();
            for(var i = 1; i <= 3; i++){
                // si es la primera foto , en div class agregar active
                if(i == 1) {
                    $(".carousel-container-js" ).append( `<div class="carousel-item active"><img src="img/banner-mobile${i}.jpg" class="d-block w-100 img-carousel" alt="imagen banner ${i}"></div>` );
                } else {
                    $(".carousel-container-js" ).append( `<div class="carousel-item "><img src="img/banner-mobile${i}.jpg" class="d-block w-100 img-carousel" alt="imagen banner ${i}"></div>` );
                }
            }
            
        }
        // Cuando hacemos resize que tambien cambie el espacio del top del sitio
        var height1 = $('.main-header').height();
        var height2 = $('.top-header').height();
        $('body').css('margin-top',(height1 + height2) + 'px');

    }).resize();

    // Sucursales footer
    $('#sucursal').on('change', function() {
        var sucursal = this.value;
        for (var i = 0; i < 3 ; i++) {
            $(`.contacto-footer-${i}`).html(sucursales[sucursal][i]);
        }
    });
});