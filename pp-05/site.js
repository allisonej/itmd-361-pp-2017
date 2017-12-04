function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}

/*button Audio*/
doorbellring.addEventListener("click", function() {
  ringDoorbell();
});

$(document).on("keypress", function(press) {
  if (press.key ==="d") {
    ringDoorbell();
  }
});
