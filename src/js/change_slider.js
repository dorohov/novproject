(function($) {
    "use strict"
    $(function() {

        changeSlider()

        $(window).resize(function() {
            changeSlider()
        })

        function changeSlider() {

            if($(document).innerWidth() < 769) {

                $('.slick-slider').slick('resize');

                var images = $('.__iim')

                images.each(function(item) {
                    var _thisMobSrc = $(this).data('mobsrc')
                    $(this).attr('src', _thisMobSrc)
                })
            }

        }

        $('.index1__wrap__right__video').on('click', function() {
            $('.index1__wrap__right iframe').show();
            $(this).hide();
        })

    })
})(jQuery);