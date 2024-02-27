//------------------------------ for about me section // ---------------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {

    var isActive = document.getElementById(tabname).classList.contains("active-tab");


    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    if (!isActive) {
        document.getElementById(tabname).classList.add("active-tab");
        event.currentTarget.classList.add("active-link");
    }
}

function openmenu() {
    console.log("Open menu function called");
    sidemenu.style.right = "0";
}

function closemenu() {
    console.log("Close menu function called");
    sidemenu.style.right = "-200px";
}


