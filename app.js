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

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        slideBy: 100,
        dots: false
    });

    firebase.initializeApp(this.firebaseConfig);

    firebase.auth().signInAnonymously().catch(function(error) {
      // No op
    });
  },

  firebaseConfig: {
    apiKey: "AIzaSyAEZ6cdb0fIZ8mTpaZAcj0xthkdUOVfztA",
    authDomain: "flipp-a77fe.firebaseapp.com",
    databaseURL: "https://flipp-a77fe.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "636127035750"
  },
  castVote: function(item) {
    // item is the clicked object

    var colorOption = firebase.database().ref("Lights/option0");

    colorOption.transaction(function(post) {
      if (post == null) {
        return 0;
      }

      return ++post;
    }).then(function (stuff) {
        console.log(stuff);
      }).catch(function (error) {
        console.log(error);
  });

    // var request = $.ajax({
		// 		data: JSON.stringify(params),
		// 		method: 'POST',
		// 		url: 'https://flipp-a77fe.firebaseio.com/',
		// 	});
    //
		// request.then(function (res) {
		// 	if (res) {
		// 		console.log('success', res);
    //
		// 	} else {
		// 		console.log('something went wrong', res);
		// 	}
		// });
  }

}
