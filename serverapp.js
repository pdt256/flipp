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

    firebase.database().ref("Lights").on('child_changed', function (snapshot, prevChildKey) {
      var result = $("<div>");
      result.text(JSON.stringify(snapshot.val()));
      $("#results").prepend(result);

      // TODO: Call PHP here and make lights blink

      var optionNumber = parseInt(prevChildKey.substr(-1)) + 1;
      console.log(prevChildKey);
      console.log(optionNumber);
      var request = $.ajax({
        headers: {'Content-Type': "application/x-www-form-urlencoded; charset=utf-8"},
        method: 'GET',
        url: 'http://10.14.1.227:8082/vote/' + optionNumber,
        dataType: 'json'
      });

      request.then(function (res) {

      });
    })
  },

  firebaseConfig: {
    apiKey: "AIzaSyA04tjciyskuIuWrPGKoArEqe9hD0Qyk4U",
    authDomain: "flipp-a77fe.firebaseapp.com",
    databaseURL: "https://flipp-a77fe.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "636127035750"
  }
 }
