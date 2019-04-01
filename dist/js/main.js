(function($) {
    "use strict"
    $(function() {

        $('.carousel__list').slick({
            arrows: false,
            autoplay: true,
            dots: true
        })

        $('.index2__list').slick({
            prevArrow: '.is--prev.__crs2',
            nextArrow: '.is--next.__crs2',
        })

    })
})(jQuery);
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
        

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var activeId = $('.__tab-target.is--active').data('tabid')

        setTab(activeId)

        function setTab(id) {
            hideTabs()

            $('.__tab-container[data-tabid="' + id + '"]').addClass('is--open')
            $('.__tab-target[data-tabid="' + id + '"]').addClass('is--active')

        }

        function hideTabs() {
            $('.__tab-container').removeClass('is--open');
            $('.__tab-target').removeClass('is--active')
        }

        $('.__tab-target').on('click', function() {
            setTab($(this).data('tabid'))
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2Vscy5qcyIsIm5hdmJhci5qcyIsInRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuY2Fyb3VzZWxfX2xpc3QnKS5zbGljayh7XHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmluZGV4Ml9fbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLmlzLS1wcmV2Ll9fY3JzMicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5pcy0tbmV4dC5fX2NyczInLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHNldE5hdmJhcigpXHJcbiAgICAgICAgZml4ZU5hdmJhcigkKHdpbmRvdykuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TmF2YmFyKCkge1xyXG4gICAgICAgICAgICB2YXIgbmF2YmFySGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygncGFkZGluZy10b3AnLCBuYXZiYXJIZWlnaHQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlTW9iaWxlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vYmlsZV9tZW51LS1vcGVuJylcclxuICAgICAgICAgICAgJCgnI21vYmlsZV9tZW51JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIGhpZGVPdmVybGF5KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd01vYmlsZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdtb2JpbGVfbWVudS0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJyNtb2JpbGVfbWVudScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICBzZXRPdmVybGF5KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLW92ZXJsYXknKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW92ZXJsYXknKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTW9iaWxlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBpZighJCgnYm9keScpLmhhc0NsYXNzKCdtb2JpbGVfbWVudS0tb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TW9iaWxlTmF2YmFyKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGlkZU1vYmlsZU5hdmJhcigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpeGVOYXZiYXIoc2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZiYXJIZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNjcm9sbCA+IG5hdmJhckhlaWdodCkgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tZml4ZWQnKVxyXG4gICAgICAgICAgICBlbHNlICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZpeGVOYXZiYXIoJCh0aGlzKS5zY3JvbGxUb3AoKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXROYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNtb2JpbGVfbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVNb2JpbGVOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNvdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhpZGVNb2JpbGVOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBhY3RpdmVJZCA9ICQoJy5fX3RhYi10YXJnZXQuaXMtLWFjdGl2ZScpLmRhdGEoJ3RhYmlkJylcclxuXHJcbiAgICAgICAgc2V0VGFiKGFjdGl2ZUlkKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRUYWIoaWQpIHtcclxuICAgICAgICAgICAgaGlkZVRhYnMoKVxyXG5cclxuICAgICAgICAgICAgJCgnLl9fdGFiLWNvbnRhaW5lcltkYXRhLXRhYmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJy5fX3RhYi10YXJnZXRbZGF0YS10YWJpZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZVRhYnMoKSB7XHJcbiAgICAgICAgICAgICQoJy5fX3RhYi1jb250YWluZXInKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKTtcclxuICAgICAgICAgICAgJCgnLl9fdGFiLXRhcmdldCcpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5fX3RhYi10YXJnZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0VGFiKCQodGhpcykuZGF0YSgndGFiaWQnKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
