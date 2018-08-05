/*\ TODO:
|*| Remove intallationRun from a function
|*| Check if setInterval() will work with being in a function
|*| Add a check for what quality the user wants (Probably just copy paste into 3 nested functions)
\*/

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

var initiationRun = function(){
  var now = getTime()
  var i = renderboot()
  opacitySet()
}
initiationRun() // Function is unnecessary though assists legibility
//Initiation boot to find starting images and opacity settings


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


var renderboot = function(){
  var i = 0

  if (now === 0){    //For the midnight switch dillemma
    document.getElementById("curr_back").src = image[0].source_low
    document.getElementById("prev_back").src = image[95].source_low
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
    document.getElementById("curr_back").src = image[i].source_low
    document.getElementById("prev_back").src = image[i-1].source_low
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
