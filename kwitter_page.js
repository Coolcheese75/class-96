//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA72PG7t7QtCVdWrK9p1e9u0AlkEFZ4f_g",
      authDomain: "kwitter-app-a56e7.firebaseapp.com",
      databaseURL: "https://kwitter-app-a56e7-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-a56e7",
      storageBucket: "kwitter-app-a56e7.appspot.com",
      messagingSenderId: "570551883604",
      appId: "1:570551883604:web:c1f1b05d2bd2fa616fdac1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 function send()
 {
       msg = document.getElementById("msg").nodeValue;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });

       document.getElementById("msg").value = "";
 }