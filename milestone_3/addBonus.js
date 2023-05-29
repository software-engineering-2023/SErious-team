document.getElementById("submit-Bonus").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var address = document.getElementById("Bonus-Ammount").value;
    if (name == "" || id == ""  || address == "" || Bonus-Ammount == "" ) {
        alert("Please fill in all fields");
    }
    else if (! /^\d+$/.test(id)) {
        alert("ID must be all numbers.")
    }
    else if (! /^\d+$/.test(phone)) {
        alert("Phone must be all numbers.")
    }
    else if (! /^\d+$/.test(Bonus-Ammount)) {
        alert("Bonus must be all numbers.")
    }
    else {
        alert("Bonus added successfully.")
    }

})

document.getElementById("back").addEventListener("click", function() {
    window.location.href = "BankerDashBoard.html";

    
})

