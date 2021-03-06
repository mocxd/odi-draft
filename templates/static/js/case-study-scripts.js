$(function() {
    // inline references
    $('.b-sticky').hide();
    $('a[data-open]').click(function() {
        event.preventDefault();
        $($(this).attr('data-open')).removeClass('m-closed');
        $($(this).attr('data-open')).fadeIn('fast');
    });

    // more button
    $('.js-more-toggle').click(function() {
        $(this).parent().toggleClass('m-active');
    });

    // sidebar dynamic position behavior
    var sidebar = $('.b-sidebar');
    var offset = sidebar.offset().top;

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > offset) {
            if (!sidebar.hasClass('js-scroll-fixed')) {
                sidebar.addClass('js-scroll-fixed');
            }
        }
        else if (scroll < offset) {
            if (sidebar.hasClass('js-scroll-fixed')) {
                sidebar.removeClass('js-scroll-fixed');
            }
        }
    });

    // hash based 'next' case study filtering
    var nextParameter = document.location.hash.replace('#', ''); // should be either 'impact' or 'sector'
    var caseImpact = $('.js-next').attr('js-impact');
    var caseSector = $('.js-next').attr('js-sector');
    $('.js-next a').hide();
    if (nextParameter === 'impact') {
        $('.js-next a.' + nextParameter + '-' + caseImpact).first().show();
    } else if (nextParameter === 'sector') {
        $('.js-next a.' + nextParameter + '-' + caseSector).first().show();
    } else {
        $('.js-next a').first().show();
    }
});