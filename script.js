
var css = document.querySelector("h3");
var input1 = document.getElementsByName("color1")[0];
var input2 = document.getElementsByName("color2")[0];
var body = document.getElementById("gradient");



input1.addEventListener("input", changeBackground)

input2.addEventListener("input", changeBackground)

function changeBackground() {
    body.style.background =
        "linear-gradient(to right, "
        + input1.value + " , " + input2.value + ")";
    css.textContent = body.style.background + ";";
};

changeBackground();