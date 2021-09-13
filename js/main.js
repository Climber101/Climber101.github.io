

$(document).ready(function () {
    $("article").hide();
    $("#article1").show();
    
    $("#menu1").click(function () {
        $("article").hide();
        $("#article1").show();
    });
    
    $("#menu2").click(function () {
        $("article").hide();
        $("#article2").show();
    });
    
    $("#menu3").click(function () {
        $("article").hide();
        $("#article3").show();
    });
    
    $("#menu4").click(function () {
        $("article").hide();
        $("#article4").show();
    });
});