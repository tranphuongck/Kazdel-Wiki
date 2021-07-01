$(function() {
    var txt = " ",
    button = $('<div/>', {
        'text': txt,
        'attr': {
            'title': txt,
            'class': 'backTop'
            },
        'css': {
            'user-select': 'none'
            },
        'on': {
            'click': function() {
               $("html, body").animate({
                    scrollTop: 0
                    }, 100);
                }
            }
        }).appendTo(document.body);
    $(window).on('scroll', function() {
        $(document).scrollTop() > 0 ? button.fadeIn() : button.fadeOut();
    }).scroll();
});
