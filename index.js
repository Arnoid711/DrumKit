//Detecting button press
var clickEvent = document.querySelectorAll(".drum");
var clickEventLength = clickEvent.length;
for (var i = 0; i < clickEventLength; i++) {

  clickEvent[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

//Detecting key press
document.addEventListener("keydown", function(e) {
  playSound(e.key);
  buttonAnimation(e.key);
});

//playSound based on key or button pressed
function playSound(a) {
  switch (a) {
    case 'w':
      audioObj = new Audio('sounds/tom-1.mp3');
      audioObj.play();
      break;
    case 'a':
      audioObj = new Audio('sounds/tom-2.mp3');
      audioObj.play();
      break;
    case 's':
      audioObj = new Audio('sounds/tom-3.mp3');
      audioObj.play();
      break;
    case 'd':
      audioObj = new Audio('sounds/tom-4.mp3');
      audioObj.play();
      break;
    case 'j':
      audioObj = new Audio('sounds/snare.mp3');
      audioObj.play();
      break;
    case 'k':
      audioObj = new Audio('sounds/crash.mp3');
      audioObj.play();
      break;
    case 'l':
      audioObj = new Audio('sounds/kick-bass.mp3');
      audioObj.play();
      break;
  }
}

function buttonAnimation(currentKey){
      var activeButton = document.querySelector("." + currentKey);
      activeButton.classList.add("pressed");

      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },100);
}
