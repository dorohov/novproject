(function($) {
    "use strict"
    $(function() {

        setNavbar()
        fixeNavbar($(window).scrollTop())
        
        function setNavbar() {
            var navbarHeight = $('.navbar').innerHeight()
            $('main').css('padding-top', navbarHeight)
        }

        function hideMobileNavbar() {
            $('body').removeClass('mobile_menu--open')
            $('#mobile_menu').removeClass('is-active')
            hideOverlay()
        }
        function showMobileNavbar() {
            $('body').addClass('mobile_menu--open')
            $('#mobile_menu').addClass('is-active')
            setOverlay()
        }

        function setOverlay() {
            $('body').addClass('is--overlay')
        }

        function hideOverlay() {
            $('body').removeClass('is--overlay')
        }

        function toggleMobileNavbar() {
            if(!$('body').hasClass('mobile_menu--open')) {
                showMobileNavbar()
            }else {
                hideMobileNavbar()
            }
        }

        function fixeNavbar(scroll) {
            var navbarHeight = $('.navbar').innerHeight();

            if(scroll > navbarHeight) $('.navbar').addClass('is--fixed')
            else $('.navbar').removeClass('is--fixed')
        }

        $(window).scroll(function() {
            fixeNavbar($(this).scrollTop())
        })

        $(window).resize(function() {
            setNavbar()
        })

        $('#mobile_menu').on('click', function() {
            toggleMobileNavbar()
        })

        $('#overlay').on('click', function() {
            hideMobileNavbar()
        })

        $('.mdropd').on('click', function() {
            var id = $(this).data('mdid')

            $('.dropdown[data-mdid="' + id + '"]').slideToggle();
        })
        

    })
})(jQuery);