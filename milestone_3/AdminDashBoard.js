
var elements = document.getElementsByClassName("resolveaction");

var removeElement = function() {
    this.parentNode.parentNode.removeChild(this.parentNode);

};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', removeElement, false);
}


var elements = document.getElementsByClassName("takeonbutton");

var moveTakeOn = function() {
    
    let list1 = document.getElementById("reports");
    let list2 = document.getElementById("acceptedReports");
    let item = this.parentElement;
    this.innerText = 'Resolved';
    this.className = "resolveaction";

    let buttons = this.parentNode.querySelectorAll("button")
    let otherbutton = buttons[0] != this ? buttons[0] : buttons[1];
    otherbutton.innerText = 'Cannot Resolve'

    this.addEventListener('click', removeElement, false);
    list2.appendChild(item);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', moveTakeOn, false);
}

document.getElementById("addBanker").onclick = function () {
    window.location.href = "addBanker.html";
};

