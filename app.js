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
        margin: 30
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

    firebase.initializeApp(this.firebaseConfig);

    var params = {"item": item};

    firebase.transaction(function(post) {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
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
