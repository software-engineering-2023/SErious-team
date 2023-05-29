document.getElementById("login-button").addEventListener("click", function() {
  // Perform registration logic here

  var username = document.getElementById("username").value;
  var Password = document.getElementById("password").value;
  var login = document.getElementById("login-button").value;
  var register = document.getElementById("registerButton").value;
  if (username !== "" && Password !== "") {
    if (username == "client") {
      window.location.href = "ClientDashBoard.html";
    }
    else if (username == "admin") {
       window.location.href = "AdminDashBoard.html";
    }
    else if (username == "banker") {
       window.location.href = "BankerDashBoard.html";
    }
}else{
alert("please fill out all the fields");
}
});

document.getElementById("registerButton").addEventListener("click",function(){
      window.location.href="register.html";
})