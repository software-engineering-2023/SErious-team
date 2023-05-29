document.getElementById("submit").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    if (name == "" || id == "" || phone == "" || address == "") {
        alert("Please fill in all fields");
    }
    else if (! /^\d+$/.test(id)) {
        alert("ID must be all numbers.")
    }
    else if (! /^\d+$/.test(phone)) {
        alert("Phone must be all numbers.")
    }
    else {
        alert("Banker added successfully.")
    }

})

document.getElementById("back").addEventListener("click", function() {
    window.location.href = "AdminDashBoard.html";

    
})

