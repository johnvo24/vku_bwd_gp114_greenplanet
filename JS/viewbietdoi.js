jQuery(document).ready(function() {
    $('.bietdoinoibat > .content > .bangxephang > div > div > a').click(function() {
        $('.info_bt').css("display", "block");
        $('body').css("overflow", "hidden");
        let picture = $(this).children().attr("src");
        let id = $(this).next().next().html();
        let name = $(this).next().next().next().html();

        $('.info_bt .view_info .content_t .content_bt div img').attr("src", picture);
        $('.info_bt .view_info .content_t .content_bt p').html(name);
        $('.info_bt .view_info .content_t .infomation_bd ul li:first-child span').html(id);
    });
    $('.bietdoinoibat > .content > ul > li').click(function() {
        $('.info_bt').css("display", "block");
        $('body').css("overflow", "hidden");
        let picture = $(this).children().children().attr("src");
        let text = $(this).children("div").children(".namegroup").html();
        var id = text.substr(0, 6);
        var name = text.substr(9);
        $('.info_bt .view_info .content_t .content_bt div img').attr("src", picture);
        $('.info_bt .view_info .content_t .content_bt p').html(name);
        $('.info_bt .view_info .content_t .infomation_bd ul li:first-child span').html(id);
    });
    $('.btn_close').click(function() {
        $('.info_bt').css("display", "none");
        $('body').css("overflow-y", "scroll");
    });
});