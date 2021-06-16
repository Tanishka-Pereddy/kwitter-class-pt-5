var firebaseConfig = {
      apiKey: "AIzaSyDQmj3ctwfdgBUn8h6ERxE8NK58vybEzeM",
      authDomain: "kwiter-82ec3.firebaseapp.com",
      databaseURL: "https://kwiter-82ec3-default-rtdb.firebaseio.com",
      projectId: "kwiter-82ec3",
      storageBucket: "kwiter-82ec3.appspot.com",
      messagingSenderId: "58426848095",
      appId: "1:58426848095:web:fbd17cd74130bfbcd9fcea",
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");

document.getElementById("user_name").innerHTML="welcome " +user_name+" !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("roomname-"+ Room_names);
                  row = "<div class='room_name' id= "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
