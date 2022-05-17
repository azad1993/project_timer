window.onload = function () {
  var sec = "00";
  var mil = "00";
  var appendSec = document.getElementById("second");
  var appendMil = document.getElementById("milles");
  var buttonStart = document.getElementById("start");
  var buttonStop = document.getElementById("stop");
  var buttonReset = document.getElementById("reset");
  var Interval;
  

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    sec = "00";
    mil = "00";
    appendSec.innerHTML = sec;
    appendMil.innerHTML = mil;
  };

  function startTimer() {
    var x = true 
    document.getElementsByClassName('words')[0].style.backgroundColor = "red";
    mil++;
    if(sec%2 == 0){
      x = false;
      document.getElementsByClassName('words')[0].style.backgroundColor = "yellow";
    }
    if (mil < 9) {
      appendMil.innerHTML = "0" + mil;
    }
    if (mil > 9) {
      appendMil.innerHTML = mil;
    }
    if (mil > 99) {
      sec++;
      mil = "00";
      appendSec.innerHTML = '0' + sec;
      appendMil.innerHTML = mil;
    }
    if(sec > 9){
        appendSec.innerHTML = sec;
    }
  };
};
