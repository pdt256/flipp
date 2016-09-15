$(document).ready(function(){

  flipp.init();

});

var flipp = {

  init: function(){

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        slideBy: 100,
        dots: false
    });

    $('.vote-icon').on('click', function(event) {
      console.log('clicked item id', event.target.id);

      //event.target = image tag, not the wrapping div... need to handle propogating events so this doesn't suck
      flipp.castVote($(event.target).parent().attr("id"));
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

  castVote: function(itemId) {
    var colorOption = firebase.database().ref("Lights/option" + itemId);

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
  }
}
