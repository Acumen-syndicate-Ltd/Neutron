var audio;
function initiatePartyProtocol(){
  if (confirm("Are you sure you\'re ready to party?")){
    allTheBelow();
  }else{
    document.getElementById("button").innerHTML = "Try again";
  }
}
function allTheBelow(){
  partyTitle();
  backgroundChanges();
  bottomText();
}

function partyTitle(){
  document.getElementById("party1").innerHTML = "P";
  document.getElementById("party1").style.color = "red";
  document.getElementById("party2").innerHTML = "A";
  document.getElementById("party2").style.color = "yellow";
  document.getElementById("party3").innerHTML = "R";
  document.getElementById("party3").style.color = "green";
  document.getElementById("party4").innerHTML = "T";
  document.getElementById("party4").style.color = "blue";
  document.getElementById("party5").innerHTML = "Y";
  document.getElementById("party5").style.color = "purple";
}
function backgroundChanges(){
  document.getElementById("body").style.backgroundImage = "url('/images/unnecessary/confetti.gif')";
  document.getElementById("body").style.backgroundColor = "white";
  document.getElementById("aside").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("my_solution").style.padding = "0px";
  document.getElementById("button").style.display = "none";
  audio = new Audio("/images/music/190_full_glory-days_0204.mp3");
  audio.play();
}
function bottomText(){
  document.getElementById("bottom-text").image.src = "/image/unnecessary/swat_rave.gif";
  document.getElementById("bottom-text").style.color = "black";
  document.getElementById("bottom-text").style.width = "80%";
  document.getElementById("bottom-text").style.fontSize = "40px";
  document.getElementById("bottom-text").style.textAlign = "center";
}
