document.getElementById("blcd").addEventListener("click", function() {
    jQuery("#boloc").slideToggle("slow");
});

document.getElementById("btncd").addEventListener("click", function() {
    jQuery(".content > .thanhcongcu").slideToggle();
    jQuery("#boloc").hide("slow");
});


jQuery(".pic_btn > a").click(function() {
    if(jQuery(this).text() === "THAM GIA NGAY") {
        if(jQuery(".dangthamgia > div").html() === "Bạn chưa tham gia chiến dịch nào!") {
            jQuery(".dangthamgia > div").remove();
        }
        jQuery(this).text("HỦY THAM GIA");
        jQuery(this).attr("class", "btn_htx btn-thamgia btn_huythamgia");
        let e = document.createElement("div");
        e.innerHTML = jQuery(this).parent().parent().html();
        e.firstElementChild.lastElementChild.className = "btn_htx btn-thamgia btn_huythamgia";
        jQuery(".dangthamgia").append(e);
    }else {
        jQuery(this).text("THAM GIA NGAY");
        let id_cd = jQuery(this).parent().next().children().children().next().children().next().html();
        let t = jQuery(".hienthichiendich > div > .pic_btn > .btn_huythamgia").length;
        for(let i = 0 + t; i < jQuery(".pic_btn > .btn_huythamgia").length; i++) {
            if(document.getElementsByClassName("btn_huythamgia")[i].parentElement.nextElementSibling
            .firstElementChild.firstElementChild.nextElementSibling.lastElementChild.innerHTML === id_cd) {
                document.getElementsByClassName("btn_huythamgia")[i].parentElement.parentElement.remove();
                if(jQuery(".dangthamgia > div").length == 0) {
                    let e = document.createElement("div");
                    e.innerHTML = "Bạn chưa tham gia chiến dịch nào!";
                    jQuery(".dangthamgia").append(e);
                    break;
                }
            }
        }
        jQuery(this).attr("class", "btn_htx btn-thamgia btn_thamgiangay");
    }
});


$("#btntcd").click(function() {
    $('.formthemchiendich').css("display", "block");
    $('body').css("overflow", "hidden");
});
$('.btn_close').click(function() {
    $('.btn_reset').click();
    $('.formthemchiendich').css("display", "none");
    $('body').css("overflow-y", "scroll");
});
$('.btn_create').click(function() {
    $('.btn_reset').click();
    $('.formthemchiendich').css("display", "none");
    $('body').css("overflow-y", "scroll");
});

