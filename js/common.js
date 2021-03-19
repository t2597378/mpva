$(function() {
    //lnb
    var $window = $(window),
        $html = $('html');

    var $lnb = $('#lnb'),
        $lnbMenu = $lnb.find('.menu'),
        $lnbMenuItem = $lnb.find('.depth1_item'),
        $lnbDepth1Text = $lnbMenu.find('.depth1_text');

    $lnb.on('mouseover focusin', function (){
        $html.addClass('lnbOpen');
    });
    $lnb.on('mouseleave focusout', function (){
        $html.removeClass('lnbOpen');
    });
    $lnbDepth1Text.on('mouseover focusin', function (){
        var $this = $(this);
        $lnbMenuItem.removeClass('active');
        $this.parent('.depth1_item').addClass('active');
    });

    $lnbDepth1Text.on('focusout mouseleave', function (){
        $lnbMenuItem.removeClass('active');
    });
});
