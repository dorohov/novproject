(function($) {
    "use strict"
    $(function() {

        setNavbar()
        
        function setNavbar() {
            var navbarHeight = $('.navbar').innerHeight()
            $('main').css('padding-top', navbarHeight)
        }

        $(window).resize(function() {
            setNavbar()
        })

    })
})(jQuery);