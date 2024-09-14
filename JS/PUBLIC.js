//MENU HOVER
$(".mini_menu").click(function() {
    jQuery("#menu_on_hover").slideToggle();
});
$(".main").mouseup(function(){
    $('#menu_on_hover').slideUp();
    
});

setInterval(checkwidth, 10);
function checkwidth() {
    if($('body').width() > 982) {
        $('#menu_on_hover').css("display", "none");
    }
}

setInterval(checkscrolltopmenu, 10);
function checkscrolltopmenu() {
    if($("#menu_on_hover").css("display") !== "none") {
        if($('.main').position().top != 0 && document.documentElement.scrollTop >= $('.main').position().top) {
            $('#menu_on_hover').css({
                "position":"fixed",
            });
        }else {
            $('#menu_on_hover').css({
                "position":"absolute",
            });
        }
    }
}


//CAP NHAT NGÀY
function currentDate() {
    var d = "";
    const weekday = ["CN","T2","T3","T4","T5","T6","T7"];
    var today = new Date();
    var day = weekday[today.getDay()];
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    d += day +" ngày "+ date +" - "+ (month+1) +" - "+ year;
    document.getElementById("ngay").innerHTML = d;
};
currentDate();
//CAP NHAT GIO
function currentTime() {    
    var today = new Date();
    var time = ""
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if(hours < 10) {
        time += "0"+ hours + ":";
    }else {
        time += hours + ":";
    }
    if(minutes < 10) {
        time += "0"+ minutes + ":";
    }else {
        time += minutes + ":";
    }
    if(seconds < 10) {
        time += "0"+ seconds;
    }else {
        time += "" + seconds;
    }
    document.getElementById("gio").innerHTML = time;
    if(parseInt(hours) == 0 && parseInt(minutes) == 0) {
        currentDate();
    }
    let t = setTimeout(function(){ currentTime() }, 1000);
};
currentTime();

// var $mouseposition = [0, 0];
// $(document).click(function(e) {
//     $mouseposition[0] = e.pageX;
//     $mouseposition[1] = e.pageY;
// });
