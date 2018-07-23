
var now = moment()

var getTime = function(){
  var now = moment()
  return now
}

//var refreshTime = function(){
//  setInterval(function(){var now = moment(); document.getElementById("clock").innerHTML = now}, 1000)
//}
/*
currTime = moment().format("hh:mm:ss a")
trial = moment().startOf("day")
one = moment().format("LTS")
secs = now.seconds()
mins = now.minutes()
hours = now.hours()
another = now.subtract((59/3), "hours").seconds()
day = now.days()
ms = now.millisecond()
setTime = moment({hours: 5, minutes: 15, seconds: 50, miliseconds: 43})

//document.getElementById("clock").innerHTML = hours*/

var converter = function(Rnow){
  var hours = Rnow.hours() * 3.6e6
  var mins = Rnow.minutes() * 60000
  var secs = Rnow.seconds() * 1000
  var mil = Rnow.milliseconds()
  return sumUp(mil, secs, mins, hours)
}

function sumUp(){
  var i
  var sum = 0
  for (i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}


var millisecondTime = converter(now) - converter(moment({hours: 20, minutes: 15}))
trialTime = moment({hours: 5, minutes: 15})
if (Math.sign(millisecondTime) == -1){
  millisecondTime = false
  document.getElementById("clock").innerHTML = millisecondTime
  }else{
  document.getElementById("clock").innerHTML = millisecondTime
}

//refreshTime()
