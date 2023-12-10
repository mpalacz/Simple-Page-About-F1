function ModalImg(myModal, myImg, mimg, caption, closeNumber) {
    var modal = document.getElementById(myModal);

    var img = document.getElementById(myImg);
    var modalImg = document.getElementById(mimg);
    var captionText = document.getElementById(caption);
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[closeNumber];

    span.onclick = function () {
        modal.style.display = "none";
    }
}

var zespol = "";
var skrot = "";
var lokacja = "";
var i = location.pathname.length - 1;

while (location.pathname[i] !== '/') {
    lokacja = location.pathname[i] + lokacja;
    i--;
}

switch (lokacja) {
    case "AlfaRomeo.html":
        zespol = "AlfaRomeo";
        skrot = "AR";
        break;
    case "Alpine.html":
        zespol = "Alpine";
        skrot = "A";
        break;
    case "AlphaTauri.html":
        zespol = "AlphaTauri";
        skrot = "AT";
        break;
    case "AMG.html":
        zespol = "Mercedes";
        skrot = "AMG";
        break;
    case "AstonMartin.html":
        zespol = "AstonMartin";
        skrot = "AM";
        break;
    case "Ferrari.html":
        zespol = "Ferrari";
        skrot = "F";
        break;
    case "Haas.html":
        zespol = "Haas";
        skrot = "H";
        break;
    case "McLaren.html":
        zespol = "McLaren";
        skrot = "M";
        break;
    case "RedBull.html":
        zespol = "RedBull";
        skrot = "RB";
        break;
    case "Williams.html":
        zespol = "Williams";
        skrot = "W";
        break;
    default:
        console.log("Coś poszło nie tak");
        console.log(location.pathname);
}

console.log(lokacja);

ModalImg("modal" + skrot + "1", zespol + "1", "modal" + zespol + "1", "caption1", 0);
ModalImg("modal" + skrot + "2", zespol + "2", "modal" + zespol + "2", "caption2", 1);
ModalImg("modal" + skrot + "3", zespol + "3", "modal" + zespol + "3", "caption3", 2);