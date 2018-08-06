/*\ TODO:
|*| Check if setInterval() will work without being in a function
|*| Work with generating img tags after the fact
|*| Finish writeup explaining
|*| Integrate into the home page
\*/

/* Written description of document - /Extra/Time-visual/time_visual.js
  Here we have an app for a dynamic web-based background that will be preloaded to the user's RAM.
By manipulating two img elements, we're able to give a more gradual transition. "curr_back"
reffers to a foreground image, who's opacity will slowly near 1. "prev_back" is the background
image which will consistantly stay opaque, allowing the smooth transition for images.

  Users will be guided through the app experience with basic controls and informative messages. Upon
opening the app window, users will be greeted by 3 options: 1080 (16:9), 4k (16:9), raw (6000x4000).
These options will have a similar layout to the home page's cards, improving through user familiarity
to highly common subscription plan option layouts. 1080 will be positioned on the left, as a sort of
lower end option, while raw will be on the right. A rectangular notch, positioned centeralized at the
cards' top, will be coloured for more visual communication. Light green for 1080, light yellow for 4k
(#ffff99), and red for raw. Below the card image, zoomed in shots of different resolutions, a short
description informs the user of this choice and any potential consequences that may follow.
Additionally, clicking the raw option will throw up an alert() making certain users are prepared for
the RAM loss on their device. Mobile devices may have only sources_low available, for the users' sake

  Behind the scenes runs a powerful JS program running the frontend show. The global image{} object
stores the image links for all qualities and time of initialization. image[i].time shouldn't be used
as a second imgTime{} object stores the time in seconds. Both objects have corresponding indicies.
Three functions found below preform the exact same function, just for different image resolutions.
First a critical converter function is initialized. This converts a given time object into seconds.
getTime() is used for repeatedly initializing var now into seconds. Next an initialization run
swiftly initializes a foreground and background in the same way done by renderboot().
*/

//+++ Global static object/variable initiation +++
var image = {
   0: {time: moment({hours: 0, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
   1: {time: moment({hours: 0, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
   2: {time: moment({hours: 0, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
   3: {time: moment({hours: 0, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

   4: {time: moment({hours: 1, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
   5: {time: moment({hours: 1, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
   6: {time: moment({hours: 1, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
   7: {time: moment({hours: 1, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

   8: {time: moment({hours: 2, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
   9: {time: moment({hours: 2, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  10: {time: moment({hours: 2, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  11: {time: moment({hours: 2, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  12: {time: moment({hours: 3, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  13: {time: moment({hours: 3, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  14: {time: moment({hours: 3, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  15: {time: moment({hours: 3, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  16: {time: moment({hours: 4, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  17: {time: moment({hours: 4, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  18: {time: moment({hours: 4, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  19: {time: moment({hours: 4, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  20: {time: moment({hours: 5, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  21: {time: moment({hours: 5, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  22: {time: moment({hours: 5, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  23: {time: moment({hours: 5, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  24: {time: moment({hours: 6, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  25: {time: moment({hours: 6, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  26: {time: moment({hours: 6, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  27: {time: moment({hours: 6, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  28: {time: moment({hours: 7, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  29: {time: moment({hours: 7, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  30: {time: moment({hours: 7, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  31: {time: moment({hours: 7, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  32: {time: moment({hours: 8, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  33: {time: moment({hours: 8, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  34: {time: moment({hours: 8, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  35: {time: moment({hours: 8, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  36: {time: moment({hours: 9, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  37: {time: moment({hours: 9, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  38: {time: moment({hours: 9, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  39: {time: moment({hours: 9, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  40: {time: moment({hours: 10, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  41: {time: moment({hours: 10, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  42: {time: moment({hours: 10, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  43: {time: moment({hours: 10, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  44: {time: moment({hours: 11, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  45: {time: moment({hours: 11, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  46: {time: moment({hours: 11, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  47: {time: moment({hours: 11, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  48: {time: moment({hours: 12, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  49: {time: moment({hours: 12, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  50: {time: moment({hours: 12, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  51: {time: moment({hours: 12, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  52: {time: moment({hours: 13, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  53: {time: moment({hours: 13, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  54: {time: moment({hours: 13, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  55: {time: moment({hours: 13, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  56: {time: moment({hours: 14, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  57: {time: moment({hours: 14, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  58: {time: moment({hours: 14, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  59: {time: moment({hours: 14, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  60: {time: moment({hours: 15, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  61: {time: moment({hours: 15, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  62: {time: moment({hours: 15, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  63: {time: moment({hours: 15, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  64: {time: moment({hours: 16, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  65: {time: moment({hours: 16, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  66: {time: moment({hours: 16, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  67: {time: moment({hours: 16, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  68: {time: moment({hours: 17, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  69: {time: moment({hours: 17, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  70: {time: moment({hours: 17, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  71: {time: moment({hours: 17, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  72: {time: moment({hours: 18, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  73: {time: moment({hours: 18, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  74: {time: moment({hours: 18, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  75: {time: moment({hours: 18, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  76: {time: moment({hours: 19, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  77: {time: moment({hours: 19, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  78: {time: moment({hours: 19, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  79: {time: moment({hours: 19, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  80: {time: moment({hours: 20, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  81: {time: moment({hours: 20, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  82: {time: moment({hours: 20, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  83: {time: moment({hours: 20, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  84: {time: moment({hours: 21, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  85: {time: moment({hours: 21, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  86: {time: moment({hours: 21, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  87: {time: moment({hours: 21, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  88: {time: moment({hours: 22, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  89: {time: moment({hours: 22, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  90: {time: moment({hours: 22, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  91: {time: moment({hours: 22, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},

  92: {time: moment({hours: 23, minutes: 0}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  93: {time: moment({hours: 23, minutes: 15}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  94: {time: moment({hours: 23, minutes: 30}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
  95: {time: moment({hours: 23, minutes: 45}), source_low: "/images/time_vis/low/", source_high: "/images/time_vis/high/", source_raw: "/images/time_vis/raw/"},
}
//Has the time and sources for each quarter
var imgTime = {
  0: 0,
  1: 900,
  2: 1800,
  3: 2700,
  4: 3600,
  5: 4500,
  6: 5400,
  7: 6300,
  8: 7200,
  9: 8100,
  10: 9000,
  11: 9900,
  12: 10800,
  13: 11700,
  14: 12600,
  15: 13500,
  16: 14400,
  17: 15300,
  18: 16200,
  19: 17100,
  20: 18000,
  21: 18900,
  22: 19800,
  23: 20700,
  24: 21600,
  25: 22500,
  26: 23400,
  27: 24300,
  28: 25200,
  29: 26100,
  30: 27000,
  31: 27900,
  32: 28800,
  33: 29700,
  34: 30600,
  35: 31500,
  36: 32400,
  37: 33300,
  38: 34200,
  39: 35100,
  40: 36000,
  41: 36900,
  42: 37800,
  43: 38700,
  44: 39600,
  45: 40500,
  46: 41400,
  47: 42300,
  48: 43200,
  49: 44100,
  50: 45000,
  51: 45900,
  52: 46800,
  53: 47700,
  54: 48600,
  55: 49500,
  56: 50400,
  57: 51300,
  58: 52200,
  59: 53100,
  60: 54000,
  61: 54900,
  62: 55800,
  63: 56700,
  64: 57600,
  65: 58500,
  66: 59400,
  67: 60300,
  68: 61200,
  69: 62100,
  70: 63000,
  71: 63900,
  72: 64800,
  73: 65700,
  74: 66600,
  75: 67500,
  76: 68400,
  77: 69300,
  78: 70200,
  79: 71100,
  80: 72000,
  81: 72900,
  82: 73800,
  83: 74700,
  84: 75600,
  85: 76500,
  86: 77400,
  87: 78300,
  88: 79200,
  89: 80100,
  90: 81000,
  91: 81900,
  92: 82800,
  93: 83700,
  94: 84600,
  95: 85500}
// imgTime[i] === converter(image[i].time)
var res //Will gives image resolution value based on user selection
var lowCard = document.getElementById("lower")
var highCard = document.getElementById("higher")
var rawCard = document.getElementById("raw")


//+++ Global function initiation +++
var converter = function(Rnow){
  var hours = Rnow.hours() * 3.6e3
  var mins = Rnow.minutes() * 60
  var secs = Rnow.seconds()
  var sum = hours + mins + secs
  return sum
}
//Takes in time and returns the number of seconds present
var getTime = function(){
  var now = converter(moment())
  return now
}
//Recieves and convertes current time into seconds
var getRes = function(userRes){
  if(userRes == "low" || userRes == "high" || userRes == "raw"){
    return res = userRes
  }else{
    alert("Error: Invalid selection for image resolution.\nPlease reload the page and try again")
    return res = null
  }
}
//Defines what resolution of images users will recieve


//+++ Initial boot script +++
  lowCard.addEventListener("click", getRes("low"))
  highCard.addEventListener("click", getRes("high"))
  rawCard.addEventListener("click", getRes("raw"))
  lowCard.addEventListener("click", initalBoot())
  highCard.addEventListener("click", initalBoot())
  rawCard.addEventListener("click", initalBoot())

var initalBoot = function(){
  document.getElementById("card_layout").remove()
  var img_curr = document.createElement("img")
  var img_prev = document.createElement("img")
  img_curr.setAttribute('id', "curr_back")
  img_prev.setAttribute('id', "prev_back")
  document.appendChild(img_curr)
  document.appendChild(img_prev)

  var now = getTime()
  var i = renderboot()
  opacitySet()
}
//Initiation boot finds starting images, opacity, and resolution





//+++ Recursive updating to page +++
var renderboot = function(){
  var i = 0

  if (now === 0){    //For the midnight switch dillemma
    document.getElementById("curr_back").src = image[0]["source_" + res]
    document.getElementById("prev_back").src = image[95]["source_" + res]
    document.getElementById("curr_back").style.opacity = 0
    return i
  }

    while (true){                       //Gather reference time for current foreground
      if (imgTime[i] <= now < imgTime[i + 1]){
        break
      }else{
        i += 1
      }
    }
    document.getElementById("curr_back").src = image[i]["source_" + res]
    document.getElementById("prev_back").src = image[i-1]["source_" + res]
    return i
  }
//Activates every 15 mins- Changes curr_back and prev_back image sources

var opacitySet = function(){
  var setOpacity = (now - imgTime[i])/900
  document.getElementById("curr_back").style.opacity = setOpacity
}
//Runs every second- calculates and changes the opacity of curr_back

var run = function(){
  var now = getTime()
  if (now % 900 === 0){
    i = renderboot()
  }
  opacitySet()
}
//Initiates above functions        Note: 15 mins === 900 secs

setInterval(run, 1000) // !!!!!!!!!! Might not work without being in function form
//Sets an interval to run all the functions
