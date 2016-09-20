$(document).ready(function(){
  flipp.init();
});

// jquery module pattern, call flipp.methodName() above via event listeners
var flipp = {

  init: function(){
    firebase.initializeApp(this.firebaseConfig);

    firebase.auth().signInAnonymously().catch(function(error) {
      // No op
    });

    firebase.database().ref("Lights").on('value', function (snapshot) {
      var result = $("<div>");
      result.text(JSON.stringify(snapshot.val()));
      $("#results").prepend(result);

      // TODO: Call PHP here and make lights blink

          var request = $.ajax({
            headers: {'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"},
            method: 'GET',
            url: '10.14.1.227:8082/vote/1',
            dataType: 'json'
          });

          request.then(function (res) {
           alert('hi');
          })
    );
  },

  firebaseConfig: {
    apiKey: "AIzaSyA04tjciyskuIuWrPGKoArEqe9hD0Qyk4U",
    authDomain: "flipp-a77fe.firebaseapp.com",
    databaseURL: "https://flipp-a77fe.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "636127035750"
  }
}
