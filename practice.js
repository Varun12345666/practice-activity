
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzLIg4vgA8JkDgH-BT8HK1kHukLAe0fg0",
    authDomain: "kwitter-43c57.firebaseapp.com",
    projectId: "kwitter-43c57",
    storageBucket: "kwitter-43c57.appspot.com",
    messagingSenderId: "11693731578",
    appId: "1:11693731578:web:e89cb6c2931e9d96256343"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
     purpose:"adding user"
    });
}