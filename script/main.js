$(function(){
    GNB();
    GNB2();
    SLIDE();
    LINK();
});
function GNB(){
    $("#gnb li").mouseover(function(){
        $('.lnb').stop().slideDown()
    });
    $("#gnb li").mouseout(function(){
        $('.lnb').stop().slideUp()
    });
}
function GNB2() {
    $("#tnb li").mouseover(function(){
        $('.tnb_lnb').stop().slideDown()
    });
    $("#tnb li").mouseout(function(){
        $('.tnb_lnb').stop().slideUp()
    });
}
function SLIDE(){
    $("#slideList").children("div:gt(0)").hide()
    var current=0;
    setInterval(function(){
        var next=(current+1) % 3
        $("#slideList").find("div").eq(current).fadeOut()
        $("#slideList").find("div").eq(next).fadeIn()
        current = next;
    },3000)
}
