console.log("main.js has been called");

// variable user --> is an array


var user1 = "Silvia";
 var user2 = "Hannes";
 var user3 = "Johanna";
 
 var password1 = "Silvia123";
 var password2 = "Hannes123";
 var password3 = "Johanna123";

 function login(){
     var user = document.getElementById("username").value;
     var password = document.getElementById("password").value;


    if((user == user1) && (password == password1) || (user === user2) && (password === password2) || (user === user3) && (password === password3)){
        alert("You are in!");
        //return false;
    }else{
        alert("User or password wrong!");
    }

 }
