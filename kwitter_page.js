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
room_name = localStorage.getItem("roomname");
 
function send()
{
    msg = document.getElementById("msg").value
    firebase.database().ref(roomname).push({
        name : username, 
        message : msg,
        like : 0
    });
    document.getElementById("msg").value = "";
}
function getData(){
firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
        childData = childSnapshot.val();
    if(childKey != "purpose")}{
        firebase_message_id = childKey;
        message_data = childData;

        console.log(firebase_message_id);
        console.log(message_data);
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>"+ name + "<img class = 'user_tick' src = 'tick.png'></h4>";
        message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
        like_button = 'button class = btn btn-warning' id= "+firebase_message_id+" value="+like+" onclick= 'updateLike(this.id)'>"
        spam_with_tag = "<span class= 'glyphicon glyphicon-thunbs-up'>Like:"+like+"</span></button></hrs>";
        row = name_with_tag + message_with_tag +like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;

    }}); }); }
    getData();

    function updateLike(firebase_message_id)
    {
        console.log("clicked on like button - " + message_id);
        button_id = message_id;
        likes = document.getElementById(button_id.value);
        updated_likes = Number(likes) + 1;
        console.log(updated_likes);
        firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
        });
    }
    function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("kwitter.html");
    }
   