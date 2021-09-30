

$(document).ready(function () {
    
    $("#menu1").click(function () {
        $("article").show();
    });
    
    $("#menu2").click(function () {
        $("article").hide();
        $("#article1").show();
        $("#article2").show();
    });
    
    $("#menu3").click(function () {
        $("article").hide();
        $("#article1").show();
        $("#article3").show();
    });
    
    $("#menu4").click(function () {
        $("article").hide();
        $("#article1").show();
        $("#article4").show();
    });
});