var editorBut = document.querySelector("#editor-but");
var screenBut = document.querySelector("#screen-but");
var editorr = document.querySelector("#editor")
var screen = document.documentElement;

editorBut.addEventListener('click',()=>{
  openFullscreen(editorr);
})

screenBut.addEventListener('click',()=>{
  openFullscreen(screen);
})


function openFullscreen(elem) {
  if (elem.requestFullscreen) {
  elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
  elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
  elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
  elem.msRequestFullscreen();
  }
  }