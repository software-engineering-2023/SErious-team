document.getElementById("registerButton").addEventListener("click", function() {
  // Perform registration logic here

  var username = document.getElementById("username").value;
  var newPassword = document.getElementById("newPassword").value;
  var confirmNewPassword = document.getElementById("confirmNewPassword").value;

  if (username !== "" && newPassword !== "" && confirmNewPassword !== "") {
    if (newPassword === confirmNewPassword) {
      alert("Registration successful for username: " + username);
      window.location.href = "login.html";
    } else {
      alert("Passwords do not match");
    }
  } else {
    alert("Please fill in all fields");
  }
});

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "login.html";


})