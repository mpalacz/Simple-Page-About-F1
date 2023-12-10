var modal = document.getElementById("myModal");
var opinia = document.getElementById("opinia");
var button = document.getElementById("button");
var span = document.getElementsByClassName("close")[3];

opinia.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

button.onclick = function () {
    document.getElementById("input01").value = null;
    modal.style.display = "none";
}