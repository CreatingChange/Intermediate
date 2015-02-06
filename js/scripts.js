$(document).ready(function() {
    $(".image_1").click(function() {
        $("#click_image").show();
        $(".hide_this").hide();
    });

    $("#click_image").click(function() {
        $(".hide_this").show();
        $("#click_image").hide();
    });

    $(".font-size-up").click(function() {
        $(".container").css("font-size", function() {
            return parseInt($(this).css('font-size')) + 1 + 'px';
        });
    });

    $(".font-size-down").click(function() {
        $(".container").css("font-size", function() {
            return parseInt($(this).css('font-size')) - 1 + 'px';
        });
    });
});

 

// function match_senator(state) {
//   var senetors = {
//     "OR" : "Jeff Merkley",
//   };
// }

// $(function) {
//   $('form#button').submit(function() {
//     $('form').hide()
//     var state = $(input).val()
//     var lookup = match_senator(state)
//     return false
//   })
// });



