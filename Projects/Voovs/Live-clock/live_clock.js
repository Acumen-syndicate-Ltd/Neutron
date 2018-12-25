var sheet_welcome = document.styleSheets[0]
var sheet_app = document.styleSheets[1]






var realTime = function(){
  var currentTime2 = new Date()
  var time = {
    currentTime: currentTime2,
    hours: currentTime2.getHours(),
    mins: currentTime2.getMinutes(),
    secs: currentTime2.getSeconds()
  }
  return time
}

var liveTime = function(){
  /*var stateM
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var mins = currentTime.getMinutes()
  var secs = currentTime.getSeconds()*/
  var time = realTime()

  mins = prettyTime(time.mins)
  secs = prettyTime(time.secs)

  if (time.hours >= 12){
    stateM = "PM"
    time.hours = time.hours - 12
  }else if (time.hours < 12){
    stateM = "AM"
  }
  if (time.hours == 0){
    time.hours = 12
  }
  document.getElementById("dateHere").innerHTML = (time.hours + " : " + mins + " : " + secs + "  " + stateM)
  //return (time.hours + " : " + mins + " : " + secs + "  " + stateM)

}

function prettyTime(num){
  if (num < 10){
    num = "0" + num
    return num
  }else{
    return num
  }
}
var setTime = function(){
  setInterval(liveTime, 500)
}
var timeConversion = function(){

}







var circleSVG = document.getElementById("circleSVG")
var body = document.getElementById("body")
var clock = document.getElementById("dateHere")

var nightMode = function(){
  clock.classList.toggle("clock-day")
  clock.classList.toggle("clock-night")
  body.classList.toggle("body-day")
  body.classList.toggle("body-night")
  circleSVG.classList.toggle("circleSVG-day")
  circleSVG.classList.toggle("circleSVG-night")
}





/*
<a id="site-title" href="/">Acumen Syndicate</a>

<!-- Nagigation bar -->
<ul id="header">
   <li><a href="/" title="Top of the home page">Home</a></li>
   <li><a href="/Learn">Learn</a></li>
   <li><a href="/Version" title="Another page with our version history">Update</a></li>
   <li><a href="https://github.com/Acumen-syndicate-Ltd" title="Our organization on Github">Github</a></li>
   <li><a href="/Suggestions" title="Our hand picked, or randomly chosen, list of songs">Audio</a></li>
   <li><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=acumenofknowledge@gmail.com&tf=1" target="_blank" title="Opens Gmail with our email address typed in">Contact</a></li>
   </ul>
   */
