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