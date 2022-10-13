//calculator app

var getButtons = document.getElementsByTagName("button");

for (var i = 0; i < getButtons.length; i++) {
  getButtons[i].addEventListener("click", print);
}
function print() {}

document.getElementById("result").innerText = "test";
