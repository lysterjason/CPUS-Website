var config = {
  apiKey: "AIzaSyDd1tYh_Imk_hwhGMCv6dN00xYVzXDZiXQ",
  authDomain: "cpus-71b7f.firebaseapp.com",
  databaseURL: "https://cpus-71b7f.firebaseio.com",
  projectId: "cpus-71b7f",
  storageBucket: "cpus-71b7f.appspot.com",
  messagingSenderId: "721028204994"
};

  firebase.initializeApp(config);
  var members = firebase.database().ref("members");
  var registerMember = function () {

    var name = ("#name").val();
    var email = ("#email").val();
    var ucid = ("#ucid").val();

    members.child(name).set({
      "name": name,
      "email": email,
      "ucid": ucid
    });
  };

  (window).load(function () {
    ("#signUp").submit(registerMember);
  });
