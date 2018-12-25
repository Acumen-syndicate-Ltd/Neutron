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
   0: {time: moment({hours: 0, minutes: 0}), source_low: "/images/time_vis/low/IMG_0", source_high: "/images/time_vis/high/IMG_0", source_raw: "/images/time_vis/IMG_0"},
   1: {time: moment({hours: 0, minutes: 15}), source_low: "/images/time_vis/low/IMG_1", source_high: "/images/time_vis/high/IMG_1", source_raw: "/images/time_vis/IMG_1"},
   2: {time: moment({hours: 0, minutes: 30}), source_low: "/images/time_vis/low/IMG_2", source_high: "/images/time_vis/high/IMG_2", source_raw: "/images/time_vis/IMG_2"},
   3: {time: moment({hours: 0, minutes: 45}), source_low: "/images/time_vis/low/IMG_3", source_high: "/images/time_vis/high/IMG_3", source_raw: "/images/time_vis/IMG_3"},

   4: {time: moment({hours: 1, minutes: 0}), source_low: "/images/time_vis/low/IMG_4", source_high: "/images/time_vis/high/IMG_4", source_raw: "/images/time_vis/IMG_4"},
   5: {time: moment({hours: 1, minutes: 15}), source_low: "/images/time_vis/low/IMG_5", source_high: "/images/time_vis/high/IMG_5", source_raw: "/images/time_vis/IMG_5"},
   6: {time: moment({hours: 1, minutes: 30}), source_low: "/images/time_vis/low/IMG_6", source_high: "/images/time_vis/high/IMG_6", source_raw: "/images/time_vis/IMG_6"},
   7: {time: moment({hours: 1, minutes: 45}), source_low: "/images/time_vis/low/IMG_7", source_high: "/images/time_vis/high/IMG_7", source_raw: "/images/time_vis/IMG_7"},

   8: {time: moment({hours: 2, minutes: 0}), source_low: "/images/time_vis/low/IMG_8", source_high: "/images/time_vis/high/IMG_8", source_raw: "/images/time_vis/IMG_8"},
   9: {time: moment({hours: 2, minutes: 15}), source_low: "/images/time_vis/low/IMG_9", source_high: "/images/time_vis/high/IMG_9", source_raw: "/images/time_vis/IMG_9"},
  10: {time: moment({hours: 2, minutes: 30}), source_low: "/images/time_vis/low/IMG_10", source_high: "/images/time_vis/high/IMG_10", source_raw: "/images/time_vis/IMG_10"},
  11: {time: moment({hours: 2, minutes: 45}), source_low: "/images/time_vis/low/IMG_11", source_high: "/images/time_vis/high/IMG_11", source_raw: "/images/time_vis/IMG_11"},

  12: {time: moment({hours: 3, minutes: 0}), source_low: "/images/time_vis/low/IMG_12", source_high: "/images/time_vis/high/IMG_12", source_raw: "/images/time_vis/IMG_12"},
  13: {time: moment({hours: 3, minutes: 15}), source_low: "/images/time_vis/low/IMG_13", source_high: "/images/time_vis/high/IMG_13", source_raw: "/images/time_vis/IMG_13"},
  14: {time: moment({hours: 3, minutes: 30}), source_low: "/images/time_vis/low/IMG_14", source_high: "/images/time_vis/high/IMG_14", source_raw: "/images/time_vis/IMG_14"},
  15: {time: moment({hours: 3, minutes: 45}), source_low: "/images/time_vis/low/IMG_15", source_high: "/images/time_vis/high/IMG_15", source_raw: "/images/time_vis/IMG_15"},

  16: {time: moment({hours: 4, minutes: 0}), source_low: "/images/time_vis/low/IMG_16", source_high: "/images/time_vis/high/IMG_16", source_raw: "/images/time_vis/IMG_16"},
  17: {time: moment({hours: 4, minutes: 15}), source_low: "/images/time_vis/low/IMG_17", source_high: "/images/time_vis/high/IMG_17", source_raw: "/images/time_vis/IMG_17"},
  18: {time: moment({hours: 4, minutes: 30}), source_low: "/images/time_vis/low/IMG_18", source_high: "/images/time_vis/high/IMG_18", source_raw: "/images/time_vis/IMG_18"},
  19: {time: moment({hours: 4, minutes: 45}), source_low: "/images/time_vis/low/IMG_19", source_high: "/images/time_vis/high/IMG_19", source_raw: "/images/time_vis/IMG_19"},

  20: {time: moment({hours: 5, minutes: 0}), source_low: "/images/time_vis/low/IMG_20", source_high: "/images/time_vis/high/IMG_20", source_raw: "/images/time_vis/IMG_20"},
  21: {time: moment({hours: 5, minutes: 15}), source_low: "/images/time_vis/low/IMG_21", source_high: "/images/time_vis/high/IMG_21", source_raw: "/images/time_vis/IMG_21"},
  22: {time: moment({hours: 5, minutes: 30}), source_low: "/images/time_vis/low/IMG_22", source_high: "/images/time_vis/high/IMG_22", source_raw: "/images/time_vis/IMG_22"},
  23: {time: moment({hours: 5, minutes: 45}), source_low: "/images/time_vis/low/IMG_23", source_high: "/images/time_vis/high/IMG_23", source_raw: "/images/time_vis/IMG_23"},

  24: {time: moment({hours: 6, minutes: 0}), source_low: "/images/time_vis/low/IMG_24", source_high: "/images/time_vis/high/IMG_24", source_raw: "/images/time_vis/IMG_24"},
  25: {time: moment({hours: 6, minutes: 15}), source_low: "/images/time_vis/low/IMG_25", source_high: "/images/time_vis/high/IMG_25", source_raw: "/images/time_vis/IMG_25"},
  26: {time: moment({hours: 6, minutes: 30}), source_low: "/images/time_vis/low/IMG_26", source_high: "/images/time_vis/high/IMG_26", source_raw: "/images/time_vis/IMG_26"},
  27: {time: moment({hours: 6, minutes: 45}), source_low: "/images/time_vis/low/IMG_27", source_high: "/images/time_vis/high/IMG_27", source_raw: "/images/time_vis/IMG_27"},

  28: {time: moment({hours: 7, minutes: 0}), source_low: "/images/time_vis/low/IMG_28", source_high: "/images/time_vis/high/IMG_28", source_raw: "/images/time_vis/IMG_28"},
  29: {time: moment({hours: 7, minutes: 15}), source_low: "/images/time_vis/low/IMG_29", source_high: "/images/time_vis/high/IMG_29", source_raw: "/images/time_vis/IMG_29"},
  30: {time: moment({hours: 7, minutes: 30}), source_low: "/images/time_vis/low/IMG_30", source_high: "/images/time_vis/high/IMG_30", source_raw: "/images/time_vis/IMG_30"},
  31: {time: moment({hours: 7, minutes: 45}), source_low: "/images/time_vis/low/IMG_31", source_high: "/images/time_vis/high/IMG_31", source_raw: "/images/time_vis/IMG_31"},

  32: {time: moment({hours: 8, minutes: 0}), source_low: "/images/time_vis/low/IMG_32", source_high: "/images/time_vis/high/IMG_32", source_raw: "/images/time_vis/IMG_32"},
  33: {time: moment({hours: 8, minutes: 15}), source_low: "/images/time_vis/low/IMG_33", source_high: "/images/time_vis/high/IMG_33", source_raw: "/images/time_vis/IMG_33"},
  34: {time: moment({hours: 8, minutes: 30}), source_low: "/images/time_vis/low/IMG_34", source_high: "/images/time_vis/high/IMG_34", source_raw: "/images/time_vis/IMG_34"},
  35: {time: moment({hours: 8, minutes: 45}), source_low: "/images/time_vis/low/IMG_35", source_high: "/images/time_vis/high/IMG_35", source_raw: "/images/time_vis/IMG_35"},

  36: {time: moment({hours: 9, minutes: 0}), source_low: "/images/time_vis/low/IMG_36", source_high: "/images/time_vis/high/IMG_36", source_raw: "/images/time_vis/IMG_36"},
  37: {time: moment({hours: 9, minutes: 15}), source_low: "/images/time_vis/low/IMG_37", source_high: "/images/time_vis/high/IMG_37", source_raw: "/images/time_vis/IMG_37"},
  38: {time: moment({hours: 9, minutes: 30}), source_low: "/images/time_vis/low/IMG_38", source_high: "/images/time_vis/high/IMG_38", source_raw: "/images/time_vis/IMG_38"},
  39: {time: moment({hours: 9, minutes: 45}), source_low: "/images/time_vis/low/IMG_39", source_high: "/images/time_vis/high/IMG_39", source_raw: "/images/time_vis/IMG_39"},

  40: {time: moment({hours: 10, minutes: 0}), source_low: "/images/time_vis/low/IMG_40", source_high: "/images/time_vis/high/IMG_40", source_raw: "/images/time_vis/IMG_40"},
  41: {time: moment({hours: 10, minutes: 15}), source_low: "/images/time_vis/low/IMG_41", source_high: "/images/time_vis/high/IMG_41", source_raw: "/images/time_vis/IMG_41"},
  42: {time: moment({hours: 10, minutes: 30}), source_low: "/images/time_vis/low/IMG_42", source_high: "/images/time_vis/high/IMG_42", source_raw: "/images/time_vis/IMG_42"},
  43: {time: moment({hours: 10, minutes: 45}), source_low: "/images/time_vis/low/IMG_43", source_high: "/images/time_vis/high/IMG_43", source_raw: "/images/time_vis/IMG_43"},

  44: {time: moment({hours: 11, minutes: 0}), source_low: "/images/time_vis/low/IMG_44", source_high: "/images/time_vis/high/IMG_44", source_raw: "/images/time_vis/IMG_44"},
  45: {time: moment({hours: 11, minutes: 15}), source_low: "/images/time_vis/low/IMG_45", source_high: "/images/time_vis/high/IMG_45", source_raw: "/images/time_vis/IMG_45"},
  46: {time: moment({hours: 11, minutes: 30}), source_low: "/images/time_vis/low/IMG_46", source_high: "/images/time_vis/high/IMG_46", source_raw: "/images/time_vis/IMG_46"},
  47: {time: moment({hours: 11, minutes: 45}), source_low: "/images/time_vis/low/IMG_47", source_high: "/images/time_vis/high/IMG_47", source_raw: "/images/time_vis/IMG_47"},

  48: {time: moment({hours: 12, minutes: 0}), source_low: "/images/time_vis/low/IMG_48", source_high: "/images/time_vis/high/IMG_48", source_raw: "/images/time_vis/IMG_48"},
  49: {time: moment({hours: 12, minutes: 15}), source_low: "/images/time_vis/low/IMG_49", source_high: "/images/time_vis/high/IMG_49", source_raw: "/images/time_vis/IMG_49"},
  50: {time: moment({hours: 12, minutes: 30}), source_low: "/images/time_vis/low/IMG_50", source_high: "/images/time_vis/high/IMG_50", source_raw: "/images/time_vis/IMG_50"},
  51: {time: moment({hours: 12, minutes: 45}), source_low: "/images/time_vis/low/IMG_51", source_high: "/images/time_vis/high/IMG_51", source_raw: "/images/time_vis/IMG_51"},

  52: {time: moment({hours: 13, minutes: 0}), source_low: "/images/time_vis/low/IMG_52", source_high: "/images/time_vis/high/IMG_52", source_raw: "/images/time_vis/IMG_52"},
  53: {time: moment({hours: 13, minutes: 15}), source_low: "/images/time_vis/low/IMG_53", source_high: "/images/time_vis/high/IMG_53", source_raw: "/images/time_vis/IMG_53"},
  54: {time: moment({hours: 13, minutes: 30}), source_low: "/images/time_vis/low/IMG_54", source_high: "/images/time_vis/high/IMG_54", source_raw: "/images/time_vis/IMG_54"},
  55: {time: moment({hours: 13, minutes: 45}), source_low: "/images/time_vis/low/IMG_55", source_high: "/images/time_vis/high/IMG_55", source_raw: "/images/time_vis/IMG_55"},

  56: {time: moment({hours: 14, minutes: 0}), source_low: "/images/time_vis/low/IMG_56", source_high: "/images/time_vis/high/IMG_56", source_raw: "/images/time_vis/IMG_56"},
  57: {time: moment({hours: 14, minutes: 15}), source_low: "/images/time_vis/low/IMG_57", source_high: "/images/time_vis/high/IMG_57", source_raw: "/images/time_vis/IMG_57"},
  58: {time: moment({hours: 14, minutes: 30}), source_low: "/images/time_vis/low/IMG_58", source_high: "/images/time_vis/high/IMG_58", source_raw: "/images/time_vis/IMG_58"},
  59: {time: moment({hours: 14, minutes: 45}), source_low: "/images/time_vis/low/IMG_59", source_high: "/images/time_vis/high/IMG_59", source_raw: "/images/time_vis/IMG_59"},

  60: {time: moment({hours: 15, minutes: 0}), source_low: "/images/time_vis/low/IMG_60", source_high: "/images/time_vis/high/IMG_60", source_raw: "/images/time_vis/IMG_60"},
  61: {time: moment({hours: 15, minutes: 15}), source_low: "/images/time_vis/low/IMG_61", source_high: "/images/time_vis/high/IMG_61", source_raw: "/images/time_vis/IMG_61"},
  62: {time: moment({hours: 15, minutes: 30}), source_low: "/images/time_vis/low/IMG_62", source_high: "/images/time_vis/high/IMG_62", source_raw: "/images/time_vis/IMG_62"},
  63: {time: moment({hours: 15, minutes: 45}), source_low: "/images/time_vis/low/IMG_63", source_high: "/images/time_vis/high/IMG_63", source_raw: "/images/time_vis/IMG_63"},

  64: {time: moment({hours: 16, minutes: 0}), source_low: "/images/time_vis/low/IMG_64", source_high: "/images/time_vis/high/IMG_64", source_raw: "/images/time_vis/IMG_64"},
  65: {time: moment({hours: 16, minutes: 15}), source_low: "/images/time_vis/low/IMG_65", source_high: "/images/time_vis/high/IMG_65", source_raw: "/images/time_vis/IMG_65"},
  66: {time: moment({hours: 16, minutes: 30}), source_low: "/images/time_vis/low/IMG_66", source_high: "/images/time_vis/high/IMG_66", source_raw: "/images/time_vis/IMG_66"},
  67: {time: moment({hours: 16, minutes: 45}), source_low: "/images/time_vis/low/IMG_67", source_high: "/images/time_vis/high/IMG_67", source_raw: "/images/time_vis/IMG_67"},

  68: {time: moment({hours: 17, minutes: 0}), source_low: "/images/time_vis/low/IMG_68", source_high: "/images/time_vis/high/IMG_68", source_raw: "/images/time_vis/IMG_68"},
  69: {time: moment({hours: 17, minutes: 15}), source_low: "/images/time_vis/low/IMG_69", source_high: "/images/time_vis/high/IMG_69", source_raw: "/images/time_vis/IMG_69"},
  70: {time: moment({hours: 17, minutes: 30}), source_low: "/images/time_vis/low/IMG_70", source_high: "/images/time_vis/high/IMG_70", source_raw: "/images/time_vis/IMG_70"},
  71: {time: moment({hours: 17, minutes: 45}), source_low: "/images/time_vis/low/IMG_71", source_high: "/images/time_vis/high/IMG_71", source_raw: "/images/time_vis/IMG_71"},

  72: {time: moment({hours: 18, minutes: 0}), source_low: "/images/time_vis/low/IMG_72", source_high: "/images/time_vis/high/IMG_72", source_raw: "/images/time_vis/IMG_72"},
  73: {time: moment({hours: 18, minutes: 15}), source_low: "/images/time_vis/low/IMG_73", source_high: "/images/time_vis/high/IMG_73", source_raw: "/images/time_vis/IMG_73"},
  74: {time: moment({hours: 18, minutes: 30}), source_low: "/images/time_vis/low/IMG_74", source_high: "/images/time_vis/high/IMG_74", source_raw: "/images/time_vis/IMG_74"},
  75: {time: moment({hours: 18, minutes: 45}), source_low: "/images/time_vis/low/IMG_75", source_high: "/images/time_vis/high/IMG_75", source_raw: "/images/time_vis/IMG_75"},

  76: {time: moment({hours: 19, minutes: 0}), source_low: "/images/time_vis/low/IMG_76", source_high: "/images/time_vis/high/IMG_76", source_raw: "/images/time_vis/IMG_76"},
  77: {time: moment({hours: 19, minutes: 15}), source_low: "/images/time_vis/low/IMG_77", source_high: "/images/time_vis/high/IMG_77", source_raw: "/images/time_vis/IMG_77"},
  78: {time: moment({hours: 19, minutes: 30}), source_low: "/images/time_vis/low/IMG_78", source_high: "/images/time_vis/high/IMG_78", source_raw: "/images/time_vis/IMG_78"},
  79: {time: moment({hours: 19, minutes: 45}), source_low: "/images/time_vis/low/IMG_79", source_high: "/images/time_vis/high/IMG_79", source_raw: "/images/time_vis/IMG_79"},

  80: {time: moment({hours: 20, minutes: 0}), source_low: "/images/time_vis/low/IMG_80", source_high: "/images/time_vis/high/IMG_80", source_raw: "/images/time_vis/IMG_80"},
  81: {time: moment({hours: 20, minutes: 15}), source_low: "/images/time_vis/low/IMG_81", source_high: "/images/time_vis/high/IMG_81", source_raw: "/images/time_vis/IMG_81"},
  82: {time: moment({hours: 20, minutes: 30}), source_low: "/images/time_vis/low/IMG_82", source_high: "/images/time_vis/high/IMG_82", source_raw: "/images/time_vis/IMG_82"},
  83: {time: moment({hours: 20, minutes: 45}), source_low: "/images/time_vis/low/IMG_83", source_high: "/images/time_vis/high/IMG_83", source_raw: "/images/time_vis/IMG_83"},

  84: {time: moment({hours: 21, minutes: 0}), source_low: "/images/time_vis/low/IMG_84", source_high: "/images/time_vis/high/IMG_84", source_raw: "/images/time_vis/IMG_84"},
  85: {time: moment({hours: 21, minutes: 15}), source_low: "/images/time_vis/low/IMG_85", source_high: "/images/time_vis/high/IMG_85", source_raw: "/images/time_vis/IMG_85"},
  86: {time: moment({hours: 21, minutes: 30}), source_low: "/images/time_vis/low/IMG_86", source_high: "/images/time_vis/high/IMG_86", source_raw: "/images/time_vis/IMG_86"},
  87: {time: moment({hours: 21, minutes: 45}), source_low: "/images/time_vis/low/IMG_87", source_high: "/images/time_vis/high/IMG_87", source_raw: "/images/time_vis/IMG_87"},

  88: {time: moment({hours: 22, minutes: 0}), source_low: "/images/time_vis/low/IMG_88", source_high: "/images/time_vis/high/IMG_88", source_raw: "/images/time_vis/IMG_88"},
  89: {time: moment({hours: 22, minutes: 15}), source_low: "/images/time_vis/low/IMG_89", source_high: "/images/time_vis/high/IMG_89", source_raw: "/images/time_vis/IMG_89"},
  90: {time: moment({hours: 22, minutes: 30}), source_low: "/images/time_vis/low/IMG_90", source_high: "/images/time_vis/high/IMG_90", source_raw: "/images/time_vis/IMG_90"},
  91: {time: moment({hours: 22, minutes: 45}), source_low: "/images/time_vis/low/IMG_91", source_high: "/images/time_vis/high/IMG_91", source_raw: "/images/time_vis/IMG_91"},

  92: {time: moment({hours: 23, minutes: 0}), source_low: "/images/time_vis/low/IMG_92", source_high: "/images/time_vis/high/IMG_92", source_raw: "/images/time_vis/IMG_92"},
  93: {time: moment({hours: 23, minutes: 15}), source_low: "/images/time_vis/low/IMG_93", source_high: "/images/time_vis/high/IMG_93", source_raw: "/images/time_vis/IMG_93"},
  94: {time: moment({hours: 23, minutes: 30}), source_low: "/images/time_vis/low/IMG_94", source_high: "/images/time_vis/high/IMG_94", source_raw: "/images/time_vis/IMG_94"},
  95: {time: moment({hours: 23, minutes: 45}), source_low: "/images/time_vis/low/IMG_95", source_high: "/images/time_vis/high/IMG_95", source_raw: "/images/time_vis/IMG_95"},
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
//Stores HTML cards


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
  lowCard.addEventListener("click", function(){ getRes('low')})
  highCard.addEventListener("click", function(){getRes("high")})
  rawCard.addEventListener("click", function(){getRes("raw")})
  lowCard.addEventListener("click", function(){initalBoot()})
  highCard.addEventListener("click", function(){initalBoot()})
  rawCard.addEventListener("click", function(){initalBoot()})

var initalBoot = function(){
  document.getElementById("card_layout").remove()
  //document.getElementById("header").remove()
  document.getElementById("page-heading").remove()
  document.getElementById("footer").remove()
  var img_curr = document.createElement("img")
  var img_prev = document.createElement("img")
  img_curr.setAttribute('id', "curr_back")
  img_prev.setAttribute('id', "prev_back")
  document.getElementById("images").appendChild(img_curr)
  document.getElementById("images").appendChild(img_prev)

  var now = getTime()
  var i = renderboot(now)
  opacitySet()
  setInterval(run, 1000)
}
//Initiation boot finds starting images and their opacity



//+++ Recursive updating to page +++
var renderboot = function(now){
  var i = 0

  if (now === 0){    //For the midnight switch dillemma
    document.getElementById("curr_back").src = image[0]["source_" + res]
    document.getElementById("prev_back").src = image[95]["source_" + res]
    document.getElementById("curr_back").style.opacity = 0
    return i
  }

    while (true){                       //Gather reference time for current foreground
      if (imgTime[i] <= now < imgTime[i + 1]){
        bea
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
    i = renderboot(now)
  }
  opacitySet()
}
//Initiates above functions        Note: 15 mins === 900 secs


//setInterval(run, 1000)// !!!!!!!!!! Might not work without being in function form
//Sets an interval to run all the functions
