
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {

    apiKey: "AIzaSyBafKkR2IQCrt3L7Qi1SWzHZS_iqUzQFJ0",
  
    authDomain: "kwitter-997f1.firebaseapp.com",
  
    databaseURL: "https://kwitter-997f1-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-997f1",
  
    storageBucket: "kwitter-997f1.appspot.com",
  
    messagingSenderId: "771928383473",
  
    appId: "1:771928383473:web:f24ec9f42ea204b34bae50",
  
    measurementId: "G-H4KBR82GV9"
  
  };
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      }

      );
  }
  
  