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
(function($) {
    "use strict"
    $(function() {

        $('form').parsley()

        $('#file').on('change', function(){
            var fn = $(this).val();
            var filename = fn.match(/[^\\/]*$/)[0];

            $('.form__group.is--file label').html(filename)
            $('.form__group.is--file label').addClass('is--active')

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2Vscy5qcyIsImNoYW5nZV9zbGlkZXIuanMiLCJmb3JtLmpzIiwibmF2YmFyLmpzIiwidGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5jYXJvdXNlbF9fbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuaW5kZXgyX19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuaXMtLXByZXYuX19jcnMyJyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLmlzLS1uZXh0Ll9fY3JzMicsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgY2hhbmdlU2xpZGVyKClcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2hhbmdlU2xpZGVyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VTbGlkZXIoKSB7XHJcblxyXG4gICAgICAgICAgICBpZigkKGRvY3VtZW50KS5pbm5lcldpZHRoKCkgPCA3NjkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcuc2xpY2stc2xpZGVyJykuc2xpY2soJ3Jlc2l6ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbWFnZXMgPSAkKCcuX19paW0nKVxyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlcy5lYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXNNb2JTcmMgPSAkKHRoaXMpLmRhdGEoJ21vYnNyYycpXHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCBfdGhpc01vYlNyYylcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuaW5kZXgxX193cmFwX19yaWdodF9fdmlkZW8nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmluZGV4MV9fd3JhcF9fcmlnaHQgaWZyYW1lJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpXHJcblxyXG4gICAgICAgICQoJyNmaWxlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBmbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IGZuLm1hdGNoKC9bXlxcXFwvXSokLylbMF07XHJcblxyXG4gICAgICAgICAgICAkKCcuZm9ybV9fZ3JvdXAuaXMtLWZpbGUgbGFiZWwnKS5odG1sKGZpbGVuYW1lKVxyXG4gICAgICAgICAgICAkKCcuZm9ybV9fZ3JvdXAuaXMtLWZpbGUgbGFiZWwnKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc2V0TmF2YmFyKClcclxuICAgICAgICBmaXhlTmF2YmFyKCQod2luZG93KS5zY3JvbGxUb3AoKSlcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXROYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXZiYXJIZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdwYWRkaW5nLXRvcCcsIG5hdmJhckhlaWdodClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhpZGVNb2JpbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlX21lbnUtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCcjbW9iaWxlX21lbnUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgaGlkZU92ZXJsYXkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzaG93TW9iaWxlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ21vYmlsZV9tZW51LS1vcGVuJylcclxuICAgICAgICAgICAgJCgnI21vYmlsZV9tZW51JykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgIHNldE92ZXJsYXkoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0T3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tb3ZlcmxheScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlT3ZlcmxheSgpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tb3ZlcmxheScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVNb2JpbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoJ21vYmlsZV9tZW51LS1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgIHNob3dNb2JpbGVOYXZiYXIoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlTW9iaWxlTmF2YmFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZml4ZU5hdmJhcihzY3JvbGwpIHtcclxuICAgICAgICAgICAgdmFyIG5hdmJhckhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgaWYoc2Nyb2xsID4gbmF2YmFySGVpZ2h0KSAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1maXhlZCcpXHJcbiAgICAgICAgICAgIGVsc2UgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tZml4ZWQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZml4ZU5hdmJhcigkKHRoaXMpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldE5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI21vYmlsZV9tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1vYmlsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI292ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGlkZU1vYmlsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm1kcm9wZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ21kaWQnKVxyXG5cclxuICAgICAgICAgICAgJCgnLmRyb3Bkb3duW2RhdGEtbWRpZD1cIicgKyBpZCArICdcIl0nKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBhY3RpdmVJZCA9ICQoJy5fX3RhYi10YXJnZXQuaXMtLWFjdGl2ZScpLmRhdGEoJ3RhYmlkJylcclxuXHJcbiAgICAgICAgc2V0VGFiKGFjdGl2ZUlkKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRUYWIoaWQpIHtcclxuICAgICAgICAgICAgaGlkZVRhYnMoKVxyXG5cclxuICAgICAgICAgICAgJCgnLl9fdGFiLWNvbnRhaW5lcltkYXRhLXRhYmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJy5fX3RhYi10YXJnZXRbZGF0YS10YWJpZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZVRhYnMoKSB7XHJcbiAgICAgICAgICAgICQoJy5fX3RhYi1jb250YWluZXInKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKTtcclxuICAgICAgICAgICAgJCgnLl9fdGFiLXRhcmdldCcpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5fX3RhYi10YXJnZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0VGFiKCQodGhpcykuZGF0YSgndGFiaWQnKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
