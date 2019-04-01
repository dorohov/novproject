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