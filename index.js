var numberofButtons = document.querySelectorAll(".drum").length;

var audio;

// Loops through all buttons and add a Event-Listener to each button
// Once a button is clicked, function playSound will be called a specific sound will be played
for (let i = 0; i < numberofButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var clickedButton = this.innerHTML;
    playSound(clickedButton);
    buttonAnimation(clickedButton);
  });
}

// Detecting if keyboard is pressed
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

// Play sound base on the key
function playSound(key) {
  switch (key) {
    case "a":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "f":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
