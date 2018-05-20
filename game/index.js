var mancols = [
["C", "C", "Bl", "Bl", "C", "C", "C"],
["C", "C", "Bl", "Bl", "Bl", "C", "C"],
["C", "C", "Y", "W", "C", "C", "C"],
["C", "C", "Y", "Y", "Y", "C", "C"],
["C", "C", "Y", "Y", "C", "C", "C"],
["G", "G", "G", "G", "G", "G", "G"],
["G", "C", "G", "G", "G", "C", "G"],
["G", "C", "B", "B", "B", "C", "G"],
["C", "C", "B", "C", "B", "C", "C"],
["C", "C", "B", "C", "B", "C", "C"]]
direction = "right";

xmanpos = 0;
ymanpos = 10;

var colors = ["red", "white", "black", "green", "blue", "yellow"]
var cmap = {"R": "red", "W": "white", "Bl": "black", "B": "blue", "G": "green", "Y": "yellow"}

function coorToIndex(x, y) {
  return String(x * 10000 + y);
}

$(document).ready(function() {


  htmlStr = "";
  base = '<div class="square" id="square{0}"></div>'
  for (y = 49; y >= 0; y--) {
    for (x = 0; x <= 99; x++ ) {
      htmlStr += base.replace("{0}", coorToIndex(x, y));
    }
  }
  $("#main").html(htmlStr);

  clearMan();
  drawMan();

  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode === 37 || e.keyCode === 65) {
       if (xmanpos != 0) {
         clearMan();
         xmanpos -= 1;
         direction = "left";
         drawMan();
       }
    }
    else if (e.keyCode === 39 || e.keyCode === 68) {
      if (xmanpos != 99 - 6) {
        clearMan();
        xmanpos += 1;
        direction = "right";
        drawMan();
      }
    }
  }

});

function clearMan() {
  for (y = 49; y >= 0; y--) {
    for (x = 0; x <= 99; x++ ) {
      if (y > 10) {
        color = "lightblue";
      }
      else {
        color = "green";
      }
      $("#square" + coorToIndex(x, y)).css("background-color", color);
    }
  }
}

function drawMan() {
  for (y = 0; y < 10; y++) {
    for (x = 0; x < 7; x++) {
      d = x;
      if (direction == "left") {
        d = 6-x;
      }
      $("#square" + coorToIndex(x + xmanpos, y + ymanpos)).css("background-color", cmap[mancols[9-y][d]]);
    }
  }
}
