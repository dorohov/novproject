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

        $('form').parsley()

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

        $('.mdropd').on('click', function() {
            var id = $(this).data('mdid')

            $('.dropdown[data-mdid="' + id + '"]').slideToggle();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2Vscy5qcyIsImZvcm0uanMiLCJuYXZiYXIuanMiLCJ0YWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5jYXJvdXNlbF9fbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuaW5kZXgyX19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuaXMtLXByZXYuX19jcnMyJyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmlzLS1uZXh0Ll9fY3JzMicsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnZm9ybScpLnBhcnNsZXkoKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBzZXROYXZiYXIoKVxyXG4gICAgICAgIGZpeGVOYXZiYXIoJCh3aW5kb3cpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE5hdmJhcigpIHtcclxuICAgICAgICAgICAgdmFyIG5hdmJhckhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ3BhZGRpbmctdG9wJywgbmF2YmFySGVpZ2h0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZU1vYmlsZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2JpbGVfbWVudS0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJyNtb2JpbGVfbWVudScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICBoaWRlT3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3dNb2JpbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9iaWxlX21lbnUtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCcjbW9iaWxlX21lbnUnKS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgc2V0T3ZlcmxheSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRPdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1vdmVybGF5JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVPdmVybGF5KCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLS1vdmVybGF5JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgaWYoISQoJ2JvZHknKS5oYXNDbGFzcygnbW9iaWxlX21lbnUtLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd01vYmlsZU5hdmJhcigpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGhpZGVNb2JpbGVOYXZiYXIoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaXhlTmF2YmFyKHNjcm9sbCkge1xyXG4gICAgICAgICAgICB2YXIgbmF2YmFySGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICBpZihzY3JvbGwgPiBuYXZiYXJIZWlnaHQpICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLWZpeGVkJylcclxuICAgICAgICAgICAgZWxzZSAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1maXhlZCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmaXhlTmF2YmFyKCQodGhpcykuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TmF2YmFyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjbW9iaWxlX21lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTW9iaWxlTmF2YmFyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoaWRlTW9iaWxlTmF2YmFyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubWRyb3BkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnbWRpZCcpXHJcblxyXG4gICAgICAgICAgICAkKCcuZHJvcGRvd25bZGF0YS1tZGlkPVwiJyArIGlkICsgJ1wiXScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGFjdGl2ZUlkID0gJCgnLl9fdGFiLXRhcmdldC5pcy0tYWN0aXZlJykuZGF0YSgndGFiaWQnKVxyXG5cclxuICAgICAgICBzZXRUYWIoYWN0aXZlSWQpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFRhYihpZCkge1xyXG4gICAgICAgICAgICBoaWRlVGFicygpXHJcblxyXG4gICAgICAgICAgICAkKCcuX190YWItY29udGFpbmVyW2RhdGEtdGFiaWQ9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCgnLl9fdGFiLXRhcmdldFtkYXRhLXRhYmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlVGFicygpIHtcclxuICAgICAgICAgICAgJCgnLl9fdGFiLWNvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpO1xyXG4gICAgICAgICAgICAkKCcuX190YWItdGFyZ2V0JykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLl9fdGFiLXRhcmdldCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRUYWIoJCh0aGlzKS5kYXRhKCd0YWJpZCcpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
