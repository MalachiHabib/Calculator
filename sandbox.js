//calculator app

let getNums = document.getElementsByName("num");
let getOps = document.getElementsByName("ops");

for (var i = 0; i < getNums.length; i++) {
  getNums[i].addEventListener("click", function () {
    if (document.getElementById("result").innerText != 0) {
      document.getElementById("result").innerText += this.innerText;
    } else {
      document.getElementById("result").innerText = this.innerText;
    }
  });
}

for (var i = 0; i < getOps.length; i++) {
  getOps[i].addEventListener("click", function () {
    document.getElementById("result").innerText += this.innerText;
    //clear calc
    if (document.getElementById("result").innerText.endsWith("C")) {
      document.getElementById("result").innerText = "0";
    }
  });
}

function caclulate(param1, op, param2) {
  if (op == "+") {
  }
}

function display(result) {}
