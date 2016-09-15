$(document).ready(function(){

  flipp.init();

  $('.vote-icon').on('click', function(event) {
        console.log('clicked item id', event.target.id);
        flipp.castVote(event.target.id);
    });

});

// jquery module pattern, call flipp.methodName() above via event listeners
var flipp = {

  init: function(){

    // initialize: init firebase and carousel
    var config = {
      apiKey: "AIzaSyAEZ6cdb0fIZ8mTpaZAcj0xthkdUOVfztA",
      authDomain: "flipp-a77fe.firebaseapp.com",
      databaseURL: "https://flipp-a77fe.firebaseio.com",
      storageBucket: "",
      messagingSenderId: "636127035750"
    };
    firebase.initializeApp(config);

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30
    });
  },

  firebase: {},

  castVote: function(item) {
    var params = {"item": item};
    var request = $.ajax({
				data: JSON.stringify(params),
				method: 'POST',
				url: 'https://flipp-a77fe.firebaseio.com/.json',
			});

		request.then(function (res) {
			if (res) {
				console.log('success', res);

			} else {
				console.log('something went wrong', res);
			}
		});
  }

}
