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


$(function() {
  $('.mail').click(function() {
  $('form').hide();

   Object.prototype.getKey = function(value){
    for(var key in this){
      if(this[key] == value){
        return key;
      }
    }
      return null;
    };

    var senators = {
    "Jeff Merkley & Ron Wyden": 'OR',
  };

  var state = $('#state-code').val();
  var key = senators.getKey(state);
  $('#your_senator').append(key);
  return false;
  });
});





