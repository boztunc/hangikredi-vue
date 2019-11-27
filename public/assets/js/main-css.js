function cssLoad() {
    $('.main__product_price button').each(function (i, e) {
        var prodInfo = $('.main__product_info').eq(i)
        $(this).appendTo(prodInfo);
    });
    $('.header__right_block img').insertAfter($('.header__left_block p'));
    
}


window.onload = function () {
    if (window.innerWidth <= 776) {
        cssLoad();
    }
}
window.onresize = function () {
    if (window.innerWidth <= 776) {
        cssLoad();
    }

}


