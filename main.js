var audio, x;

/*function audio(){
  if(confirm("Would you like some background music on this page?")){
    audio = new Audio("/images/music/showtime.mp3");
    audio.play();
  }else{}
}*/

function altAudio(){
  if (x != 1){
  audio = new Audio("/images/music/showtime.mp3");
  audio.play();
  x = 1
}
}
