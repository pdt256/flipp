$(document).ready(function(){

  flipp.init();

});

var flipp = {
  
  init: function(){
    $('.owl-carousel').owlCarousel({
      loop: true
    });
  },

  castVote: function(item) {
    $.post( "ajax/test.html", function( data ) {
      console.log(data)
    }, function(err) {
      console.log(err);
    });
  }
}
