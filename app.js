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
      apiKey: "<API_KEY>",
      authDomain: "<PROJECT_ID>.firebaseapp.com",
      databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
      storageBucket: "<BUCKET>.appspot.com",
    };
    firebase.initializeApp(config);

    $('.owl-carousel').owlCarousel({
      loop: true
    });
  },

  firebase: {},

  castVote: function(item) {
    var request = $.ajax({
				data: item,
				method: 'PUT',
				url: 'SOMEURL',
			});

		request.then(function (res) {
			if (res && res.result) {
				// success

			} else {
				console.log('something went wrong', res);
			}
		});
  }

}
