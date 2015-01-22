$(document).ready(function() {
    $(".image_1").click(function() {
        $("#click_image").show();
        $(".hide_this").hide();
    });

    $("#click_image").click(function() {
        $(".hide_this").show();
        $("#click_image").hide();
    });
});