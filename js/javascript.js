// function headerMenu() {
//     var windowWidth = jQuery(window).width();
//     var wH = jQuery(window).height();
//     if (windowWidth > 767) {
//         $("header .menu_topnav").removeAttr("style");
//     } else {
//         var rh = 90;
//         $("header .menu_topnav").css("max-height",wH-rh);
//     }
// }

function mainpage() {
    var windowWidth = jQuery(window).width();
    var widthContainer = $('.container').width();
    var windowHeight = jQuery(window).height();
    var heightHeader = $('header').height();
    var heightFooter = $('footer').height();
    $(".main-page").css("min-height",windowHeight - heightHeader - heightFooter);
    $(".go-top").css("right",(windowWidth - widthContainer) / 2);
    $(".header .menu-level-2").css("width",widthContainer);
}

$(document).ready(function () {
    $('header .navbar-toggle').click(function () {
        $('body').toggleClass('overflow');
    });

    $('.box-cart-fast').click(function () {
        $('body').toggleClass('show-popup-cart');
    });

    $('body').click(function () {
        $('.box-add-item').hide();
    });
    // Tuan update 
    $('.box-material .add-item').click(function(){
        $(this).find('.box-add-item').show();
    });
    $('.box-properties-other .add-item').click(function(){
        $(this).find('.box-add-item').show();
    });
    // end update 
    
    $('.add-item').click(function (event) {
        event.stopPropagation();
    });

    // $('.add-item .icon-add-item').click(function () {
    //     $(this).parents().find('.box-add-item').show();
    // });

    $('.header .fa-angle-right').click(function () {
        $(this).parent().toggleClass('show-menu');
    });

    $('.header .icon-toggle-menu').click(function () {
        $(this).parent().parent().toggleClass('toggle-menu');
    });

    $('.add-item .close-form').click(function () {
        $(this).parents().parents().find('.box-add-item').hide();
    });

    $('.close-popup').click(function () {
        $('body').removeClass('show-popup-cart');
    });

    $('.btn-show-detail').click(function () {
        $(this).parent().parent().toggleClass('show-info');
    });

    // -------------------Dropdown ------------------ //
    $('.dropdown-custom .dropdown-custom-control').click(function () {
        $(this).parent().toggleClass('show-list');
    })

    $('.dropdown .dropdown-control .form-control').click(function() {        
        $(this).parent().parent().toggleClass('show-list');
    })

    // -------------------End Dropdown ------------------ //

    $('.carousel').each(function(){
        $(this).carousel({
            pause: true,
            interval: false
        });
    });
   

    $('.datepicker').datepicker();

    $(window).scroll(function () {
        $(window).scrollTop() > 300 ? $(".go_top").addClass("go_tops") : $(".go_top").removeClass("go_tops")
    });

    //headerMenu();
    mainpage();
    jQuery(window).resize(function () {
        //headerMenu();
        mainpage();
    });

    $('.owl-carousel-1').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true
            }
        }
    });
    $('.owl-carousel-4').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                dots:false,
                nav:false
            },

            1024:{
                items:4,
                dots:false,
                nav:true
            },
            1200:{
                items:4,
                dots:false,
                nav:true
            },
            1440:{
                items:4,
                margin:39,
                nav:true,
                dots:false,
            }
        }
    });

    $('.owl-carousel-4-small').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                dots:false,
                nav:true
            },
            600:{
                items:4,
                dots:false,
                nav:false
            },
            800:{
                items:6,
                dots:false,
                nav:false
            },

            1024:{
                items:4,
                dots:false,
                nav:true
            }
        }
    });

    $('.owl-carousel-3').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:true
            },

            1024:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:true
            },
            1440:{
                items:3,
                margin:20,
                nav:true
            }
            // 1600:{
            //     items:3,
            //     margin: 20,
            //     nav:true
            // }
        }
    });

    $('.owl-carousel-5').owlCarousel({
        // loop:true,
        margin: 10,
        responsiveClass:true,
        responsive:{
            0:{
                items:5,
                nav:true
            },
            600:{
                items:5,
                nav:false
            },

            1024:{
                items:3,
                nav:false
            },
            1200:{
                items:5,
                nav:true
            },
            1440:{
                items:5,
                nav:true
            }
        }
    });

    $('.owl-carousel-7').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            320:{
                items:2,
                nav:false
            },
            600:{
                items:4,
                nav:false
            },
            800:{
                items:4,
                nav:false
            },
            1024:{
                items:5,
                nav:false
            },
            1200:{
                items:7,
                nav:true
            }
        }
    });

    $('.owl-carousel-9').owlCarousel({
        loop:true,
        margin: 1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            320:{
                items:3,
                nav:false
            },
            600:{
                items:4,
                nav:false
            },
            800:{
                items:4,
                nav:false
            },
            1024:{
                items:6,
                nav:false
            },
            1200:{
                items:9,
                nav:true
            }
        }
    });

    $('.owl-carousel-10').owlCarousel({
        loop:true,
        margin: 1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            320:{
                items:3,
                nav:false
            },
            600:{
                items:4,
                nav:false
            },
            800:{
                items:4,
                nav:false
            },
            1024:{
                items:7,
                nav:false
            },
            1200:{
                items:8,
                nav:true
            },
            1440:{
                items:10,
                nav:true
            }
        }
    });

});





function outside_click($dropdown_control, $dropdown_target, $dropdown_active  ) {
    window.onclick = function (e) {
        if(!e.target.matches($dropdown_control)) {
            var target = $(`${$dropdown_target}`);
            if(target.hasClass($dropdown_active));
            target.removeClass($dropdown_active);
        }
    }
}

outside_click('.dropdown-custom-control .dropdown-custom-control-title', '.dropdown-custom', 'show-list');


window.onclick = function (e) {
    dropdown = '.dropdown .dropdown-control .form-control';
    if (!e.target.matches(dropdown)) {        
        var target_dropdown = $(`${dropdown}`).parent().parent();
        if(target_dropdown.hasClass('show-list')) {
            target_dropdown.removeClass('show-list');
        }
    }

    dropdown_custom = ".dropdown-custom .dropdown-custom-control .dropdown-custom-control-title";
    if(!e.target.matches(dropdown_custom)) {
        target_dropdown_custom = $(`${dropdown_custom}`).parent().parent();
        if(target_dropdown_custom.hasClass('show-list')) {
            target_dropdown_custom.removeClass('show-list');
        }
    }
    
}

