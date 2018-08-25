document.addEventListener("DOMContentLoaded", function() {
  window.TimeVisual = {
    current_quarter: 0,
    selected_resolution: location.search.replace('?', ''),
    current_image: document.getElementById("img_curr"),
    previous_image: document.getElementById("img_prev"),
    imageSources: {
      0: {time: moment({hours: 0, minutes: 0}), source_low: "/images/time_vis/low/IMG_0.jpg", source_high: "/images/time_vis/high/IMG_0.jpg", source_raw: "/images/time_vis/IMG_0.JPG"},
      1: {time: moment({hours: 0, minutes: 15}), source_low: "/images/time_vis/low/IMG_1.jpg", source_high: "/images/time_vis/high/IMG_1.jpg", source_raw: "/images/time_vis/IMG_1.JPG"},
      2: {time: moment({hours: 0, minutes: 30}), source_low: "/images/time_vis/low/IMG_2.jpg", source_high: "/images/time_vis/high/IMG_2.jpg", source_raw: "/images/time_vis/IMG_2.JPG"},
      3: {time: moment({hours: 0, minutes: 45}), source_low: "/images/time_vis/low/IMG_3.jpg", source_high: "/images/time_vis/high/IMG_3.jpg", source_raw: "/images/time_vis/IMG_3.JPG"},

      4: {time: moment({hours: 1, minutes: 0}), source_low: "/images/time_vis/low/IMG_4.jpg", source_high: "/images/time_vis/high/IMG_4.jpg", source_raw: "/images/time_vis/IMG_4.JPG"},
      5: {time: moment({hours: 1, minutes: 15}), source_low: "/images/time_vis/low/IMG_5.jpg", source_high: "/images/time_vis/high/IMG_5.jpg", source_raw: "/images/time_vis/IMG_5.JPG"},
      6: {time: moment({hours: 1, minutes: 30}), source_low: "/images/time_vis/low/IMG_6.jpg", source_high: "/images/time_vis/high/IMG_6.jpg", source_raw: "/images/time_vis/IMG_6.JPG"},
      7: {time: moment({hours: 1, minutes: 45}), source_low: "/images/time_vis/low/IMG_7.jpg", source_high: "/images/time_vis/high/IMG_7.jpg", source_raw: "/images/time_vis/IMG_7.JPG"},

      8: {time: moment({hours: 2, minutes: 0}), source_low: "/images/time_vis/low/IMG_8.jpg", source_high: "/images/time_vis/high/IMG_8.jpg", source_raw: "/images/time_vis/IMG_8.JPG"},
      9: {time: moment({hours: 2, minutes: 15}), source_low: "/images/time_vis/low/IMG_9.jpg", source_high: "/images/time_vis/high/IMG_9.jpg", source_raw: "/images/time_vis/IMG_9.JPG"},
      10: {time: moment({hours: 2, minutes: 30}), source_low: "/images/time_vis/low/IMG_10.jpg", source_high: "/images/time_vis/high/IMG_10.jpg", source_raw: "/images/time_vis/IMG_10.JPG"},
      11: {time: moment({hours: 2, minutes: 45}), source_low: "/images/time_vis/low/IMG_11.jpg", source_high: "/images/time_vis/high/IMG_11.jpg", source_raw: "/images/time_vis/IMG_11.JPG"},

      12: {time: moment({hours: 3, minutes: 0}), source_low: "/images/time_vis/low/IMG_12.jpg", source_high: "/images/time_vis/high/IMG_12.jpg", source_raw: "/images/time_vis/IMG_12.JPG"},
      13: {time: moment({hours: 3, minutes: 15}), source_low: "/images/time_vis/low/IMG_13.jpg", source_high: "/images/time_vis/high/IMG_13.jpg", source_raw: "/images/time_vis/IMG_13.JPG"},
      14: {time: moment({hours: 3, minutes: 30}), source_low: "/images/time_vis/low/IMG_14.jpg", source_high: "/images/time_vis/high/IMG_14.jpg", source_raw: "/images/time_vis/IMG_14.JPG"},
      15: {time: moment({hours: 3, minutes: 45}), source_low: "/images/time_vis/low/IMG_15.jpg", source_high: "/images/time_vis/high/IMG_15.jpg", source_raw: "/images/time_vis/IMG_15.JPG"},

      16: {time: moment({hours: 4, minutes: 0}), source_low: "/images/time_vis/low/IMG_16.jpg", source_high: "/images/time_vis/high/IMG_16.jpg", source_raw: "/images/time_vis/IMG_16.JPG"},
      17: {time: moment({hours: 4, minutes: 15}), source_low: "/images/time_vis/low/IMG_17.jpg", source_high: "/images/time_vis/high/IMG_17.jpg", source_raw: "/images/time_vis/IMG_17.JPG"},
      18: {time: moment({hours: 4, minutes: 30}), source_low: "/images/time_vis/low/IMG_18.jpg", source_high: "/images/time_vis/high/IMG_18.jpg", source_raw: "/images/time_vis/IMG_18.JPG"},
      19: {time: moment({hours: 4, minutes: 45}), source_low: "/images/time_vis/low/IMG_19.jpg", source_high: "/images/time_vis/high/IMG_19.jpg", source_raw: "/images/time_vis/IMG_19.JPG"},

      20: {time: moment({hours: 5, minutes: 0}), source_low: "/images/time_vis/low/IMG_20.jpg", source_high: "/images/time_vis/high/IMG_20.jpg", source_raw: "/images/time_vis/IMG_20.JPG"},
      21: {time: moment({hours: 5, minutes: 15}), source_low: "/images/time_vis/low/IMG_21.jpg", source_high: "/images/time_vis/high/IMG_21.jpg", source_raw: "/images/time_vis/IMG_21.JPG"},
      22: {time: moment({hours: 5, minutes: 30}), source_low: "/images/time_vis/low/IMG_22.jpg", source_high: "/images/time_vis/high/IMG_22.jpg", source_raw: "/images/time_vis/IMG_22.JPG"},
      23: {time: moment({hours: 5, minutes: 45}), source_low: "/images/time_vis/low/IMG_23.jpg", source_high: "/images/time_vis/high/IMG_23.jpg", source_raw: "/images/time_vis/IMG_23.JPG"},

      24: {time: moment({hours: 6, minutes: 0}), source_low: "/images/time_vis/low/IMG_24.jpg", source_high: "/images/time_vis/high/IMG_24.jpg", source_raw: "/images/time_vis/IMG_24.JPG"},
      25: {time: moment({hours: 6, minutes: 15}), source_low: "/images/time_vis/low/IMG_25.jpg", source_high: "/images/time_vis/high/IMG_25.jpg", source_raw: "/images/time_vis/IMG_25.JPG"},
      26: {time: moment({hours: 6, minutes: 30}), source_low: "/images/time_vis/low/IMG_26.jpg", source_high: "/images/time_vis/high/IMG_26.jpg", source_raw: "/images/time_vis/IMG_26.JPG"},
      27: {time: moment({hours: 6, minutes: 45}), source_low: "/images/time_vis/low/IMG_27.jpg", source_high: "/images/time_vis/high/IMG_27.jpg", source_raw: "/images/time_vis/IMG_27.JPG"},

      28: {time: moment({hours: 7, minutes: 0}), source_low: "/images/time_vis/low/IMG_28.jpg", source_high: "/images/time_vis/high/IMG_28.jpg", source_raw: "/images/time_vis/IMG_28.JPG"},
      29: {time: moment({hours: 7, minutes: 15}), source_low: "/images/time_vis/low/IMG_29.jpg", source_high: "/images/time_vis/high/IMG_29.jpg", source_raw: "/images/time_vis/IMG_29.JPG"},
      30: {time: moment({hours: 7, minutes: 30}), source_low: "/images/time_vis/low/IMG_30.jpg", source_high: "/images/time_vis/high/IMG_30.jpg", source_raw: "/images/time_vis/IMG_30.JPG"},
      31: {time: moment({hours: 7, minutes: 45}), source_low: "/images/time_vis/low/IMG_31.jpg", source_high: "/images/time_vis/high/IMG_31.jpg", source_raw: "/images/time_vis/IMG_31.JPG"},

      32: {time: moment({hours: 8, minutes: 0}), source_low: "/images/time_vis/low/IMG_32.jpg", source_high: "/images/time_vis/high/IMG_32.jpg", source_raw: "/images/time_vis/IMG_32.JPG"},
      33: {time: moment({hours: 8, minutes: 15}), source_low: "/images/time_vis/low/IMG_33.jpg", source_high: "/images/time_vis/high/IMG_33.jpg", source_raw: "/images/time_vis/IMG_33.JPG"},
      34: {time: moment({hours: 8, minutes: 30}), source_low: "/images/time_vis/low/IMG_34.jpg", source_high: "/images/time_vis/high/IMG_34.jpg", source_raw: "/images/time_vis/IMG_34.JPG"},
      35: {time: moment({hours: 8, minutes: 45}), source_low: "/images/time_vis/low/IMG_35.jpg", source_high: "/images/time_vis/high/IMG_35.jpg", source_raw: "/images/time_vis/IMG_35.JPG"},

      36: {time: moment({hours: 9, minutes: 0}), source_low: "/images/time_vis/low/IMG_36.jpg", source_high: "/images/time_vis/high/IMG_36.jpg", source_raw: "/images/time_vis/IMG_36.JPG"},
      37: {time: moment({hours: 9, minutes: 15}), source_low: "/images/time_vis/low/IMG_37.jpg", source_high: "/images/time_vis/high/IMG_37.jpg", source_raw: "/images/time_vis/IMG_37.JPG"},
      38: {time: moment({hours: 9, minutes: 30}), source_low: "/images/time_vis/low/IMG_38.jpg", source_high: "/images/time_vis/high/IMG_38.jpg", source_raw: "/images/time_vis/IMG_38.JPG"},
      39: {time: moment({hours: 9, minutes: 45}), source_low: "/images/time_vis/low/IMG_39.jpg", source_high: "/images/time_vis/high/IMG_39.jpg", source_raw: "/images/time_vis/IMG_39.JPG"},

      40: {time: moment({hours: 10, minutes: 0}), source_low: "/images/time_vis/low/IMG_40.jpg", source_high: "/images/time_vis/high/IMG_40.jpg", source_raw: "/images/time_vis/IMG_40.JPG"},
      41: {time: moment({hours: 10, minutes: 15}), source_low: "/images/time_vis/low/IMG_41.jpg", source_high: "/images/time_vis/high/IMG_41.jpg", source_raw: "/images/time_vis/IMG_41.JPG"},
      42: {time: moment({hours: 10, minutes: 30}), source_low: "/images/time_vis/low/IMG_42.jpg", source_high: "/images/time_vis/high/IMG_42.jpg", source_raw: "/images/time_vis/IMG_42.JPG"},
      43: {time: moment({hours: 10, minutes: 45}), source_low: "/images/time_vis/low/IMG_43.jpg", source_high: "/images/time_vis/high/IMG_43.jpg", source_raw: "/images/time_vis/IMG_43.JPG"},

      44: {time: moment({hours: 11, minutes: 0}), source_low: "/images/time_vis/low/IMG_44.jpg", source_high: "/images/time_vis/high/IMG_44.jpg", source_raw: "/images/time_vis/IMG_44.JPG"},
      45: {time: moment({hours: 11, minutes: 15}), source_low: "/images/time_vis/low/IMG_45.jpg", source_high: "/images/time_vis/high/IMG_45.jpg", source_raw: "/images/time_vis/IMG_45.JPG"},
      46: {time: moment({hours: 11, minutes: 30}), source_low: "/images/time_vis/low/IMG_46.jpg", source_high: "/images/time_vis/high/IMG_46.jpg", source_raw: "/images/time_vis/IMG_46.JPG"},
      47: {time: moment({hours: 11, minutes: 45}), source_low: "/images/time_vis/low/IMG_47.jpg", source_high: "/images/time_vis/high/IMG_47.jpg", source_raw: "/images/time_vis/IMG_47.JPG"},

      48: {time: moment({hours: 12, minutes: 0}), source_low: "/images/time_vis/low/IMG_48.jpg", source_high: "/images/time_vis/high/IMG_48.jpg", source_raw: "/images/time_vis/IMG_48.JPG"},
      49: {time: moment({hours: 12, minutes: 15}), source_low: "/images/time_vis/low/IMG_49.jpg", source_high: "/images/time_vis/high/IMG_49.jpg", source_raw: "/images/time_vis/IMG_49.JPG"},
      50: {time: moment({hours: 12, minutes: 30}), source_low: "/images/time_vis/low/IMG_50.jpg", source_high: "/images/time_vis/high/IMG_50.jpg", source_raw: "/images/time_vis/IMG_50.JPG"},
      51: {time: moment({hours: 12, minutes: 45}), source_low: "/images/time_vis/low/IMG_51.jpg", source_high: "/images/time_vis/high/IMG_51.jpg", source_raw: "/images/time_vis/IMG_51.JPG"},

      52: {time: moment({hours: 13, minutes: 0}), source_low: "/images/time_vis/low/IMG_52.jpg", source_high: "/images/time_vis/high/IMG_52.jpg", source_raw: "/images/time_vis/IMG_52.JPG"},
      53: {time: moment({hours: 13, minutes: 15}), source_low: "/images/time_vis/low/IMG_53.jpg", source_high: "/images/time_vis/high/IMG_53.jpg", source_raw: "/images/time_vis/IMG_53.JPG"},
      54: {time: moment({hours: 13, minutes: 30}), source_low: "/images/time_vis/low/IMG_54.jpg", source_high: "/images/time_vis/high/IMG_54.jpg", source_raw: "/images/time_vis/IMG_54.JPG"},
      55: {time: moment({hours: 13, minutes: 45}), source_low: "/images/time_vis/low/IMG_55.jpg", source_high: "/images/time_vis/high/IMG_55.jpg", source_raw: "/images/time_vis/IMG_55.JPG"},

      56: {time: moment({hours: 14, minutes: 0}), source_low: "/images/time_vis/low/IMG_56.jpg", source_high: "/images/time_vis/high/IMG_56.jpg", source_raw: "/images/time_vis/IMG_56.JPG"},
      57: {time: moment({hours: 14, minutes: 15}), source_low: "/images/time_vis/low/IMG_57.jpg", source_high: "/images/time_vis/high/IMG_57.jpg", source_raw: "/images/time_vis/IMG_57.JPG"},
      58: {time: moment({hours: 14, minutes: 30}), source_low: "/images/time_vis/low/IMG_58.jpg", source_high: "/images/time_vis/high/IMG_58.jpg", source_raw: "/images/time_vis/IMG_58.JPG"},
      59: {time: moment({hours: 14, minutes: 45}), source_low: "/images/time_vis/low/IMG_59.jpg", source_high: "/images/time_vis/high/IMG_59.jpg", source_raw: "/images/time_vis/IMG_59.JPG"},

      60: {time: moment({hours: 15, minutes: 0}), source_low: "/images/time_vis/low/IMG_60.jpg", source_high: "/images/time_vis/high/IMG_60.jpg", source_raw: "/images/time_vis/IMG_60.JPG"},
      61: {time: moment({hours: 15, minutes: 15}), source_low: "/images/time_vis/low/IMG_61.jpg", source_high: "/images/time_vis/high/IMG_61.jpg", source_raw: "/images/time_vis/IMG_61.JPG"},
      62: {time: moment({hours: 15, minutes: 30}), source_low: "/images/time_vis/low/IMG_62.jpg", source_high: "/images/time_vis/high/IMG_62.jpg", source_raw: "/images/time_vis/IMG_62.JPG"},
      63: {time: moment({hours: 15, minutes: 45}), source_low: "/images/time_vis/low/IMG_63.jpg", source_high: "/images/time_vis/high/IMG_63.jpg", source_raw: "/images/time_vis/IMG_63.JPG"},

      64: {time: moment({hours: 16, minutes: 0}), source_low: "/images/time_vis/low/IMG_64.jpg", source_high: "/images/time_vis/high/IMG_64.jpg", source_raw: "/images/time_vis/IMG_64.JPG"},
      65: {time: moment({hours: 16, minutes: 15}), source_low: "/images/time_vis/low/IMG_65.jpg", source_high: "/images/time_vis/high/IMG_65.jpg", source_raw: "/images/time_vis/IMG_65.JPG"},
      66: {time: moment({hours: 16, minutes: 30}), source_low: "/images/time_vis/low/IMG_66.jpg", source_high: "/images/time_vis/high/IMG_66.jpg", source_raw: "/images/time_vis/IMG_66.JPG"},
      67: {time: moment({hours: 16, minutes: 45}), source_low: "/images/time_vis/low/IMG_67.jpg", source_high: "/images/time_vis/high/IMG_67.jpg", source_raw: "/images/time_vis/IMG_67.JPG"},

      68: {time: moment({hours: 17, minutes: 0}), source_low: "/images/time_vis/low/IMG_68.jpg", source_high: "/images/time_vis/high/IMG_68.jpg", source_raw: "/images/time_vis/IMG_68.JPG"},
      69: {time: moment({hours: 17, minutes: 15}), source_low: "/images/time_vis/low/IMG_69.jpg", source_high: "/images/time_vis/high/IMG_69.jpg", source_raw: "/images/time_vis/IMG_69.JPG"},
      70: {time: moment({hours: 17, minutes: 30}), source_low: "/images/time_vis/low/IMG_70.jpg", source_high: "/images/time_vis/high/IMG_70.jpg", source_raw: "/images/time_vis/IMG_70.JPG"},
      71: {time: moment({hours: 17, minutes: 45}), source_low: "/images/time_vis/low/IMG_71.jpg", source_high: "/images/time_vis/high/IMG_71.jpg", source_raw: "/images/time_vis/IMG_71.JPG"},

      72: {time: moment({hours: 18, minutes: 0}), source_low: "/images/time_vis/low/IMG_72.jpg", source_high: "/images/time_vis/high/IMG_72.jpg", source_raw: "/images/time_vis/IMG_72.JPG"},
      73: {time: moment({hours: 18, minutes: 15}), source_low: "/images/time_vis/low/IMG_73.jpg", source_high: "/images/time_vis/high/IMG_73.jpg", source_raw: "/images/time_vis/IMG_73.JPG"},
      74: {time: moment({hours: 18, minutes: 30}), source_low: "/images/time_vis/low/IMG_74.jpg", source_high: "/images/time_vis/high/IMG_74.jpg", source_raw: "/images/time_vis/IMG_74.JPG"},
      75: {time: moment({hours: 18, minutes: 45}), source_low: "/images/time_vis/low/IMG_75.jpg", source_high: "/images/time_vis/high/IMG_75.jpg", source_raw: "/images/time_vis/IMG_75.JPG"},

      76: {time: moment({hours: 19, minutes: 0}), source_low: "/images/time_vis/low/IMG_76.jpg", source_high: "/images/time_vis/high/IMG_76.jpg", source_raw: "/images/time_vis/IMG_76.JPG"},
      77: {time: moment({hours: 19, minutes: 15}), source_low: "/images/time_vis/low/IMG_77.jpg", source_high: "/images/time_vis/high/IMG_77.jpg", source_raw: "/images/time_vis/IMG_77.JPG"},
      78: {time: moment({hours: 19, minutes: 30}), source_low: "/images/time_vis/low/IMG_78.jpg", source_high: "/images/time_vis/high/IMG_78.jpg", source_raw: "/images/time_vis/IMG_78.JPG"},
      79: {time: moment({hours: 19, minutes: 45}), source_low: "/images/time_vis/low/IMG_79.jpg", source_high: "/images/time_vis/high/IMG_79.jpg", source_raw: "/images/time_vis/IMG_79.JPG"},

      80: {time: moment({hours: 20, minutes: 0}), source_low: "/images/time_vis/low/IMG_80.jpg", source_high: "/images/time_vis/high/IMG_80.jpg", source_raw: "/images/time_vis/IMG_80.JPG"},
      81: {time: moment({hours: 20, minutes: 15}), source_low: "/images/time_vis/low/IMG_81.jpg", source_high: "/images/time_vis/high/IMG_81.jpg", source_raw: "/images/time_vis/IMG_81.JPG"},
      82: {time: moment({hours: 20, minutes: 30}), source_low: "/images/time_vis/low/IMG_82.jpg", source_high: "/images/time_vis/high/IMG_82.jpg", source_raw: "/images/time_vis/IMG_82.JPG"},
      83: {time: moment({hours: 20, minutes: 45}), source_low: "/images/time_vis/low/IMG_83.jpg", source_high: "/images/time_vis/high/IMG_83.jpg", source_raw: "/images/time_vis/IMG_83.JPG"},

      84: {time: moment({hours: 21, minutes: 0}), source_low: "/images/time_vis/low/IMG_84.jpg", source_high: "/images/time_vis/high/IMG_84.jpg", source_raw: "/images/time_vis/IMG_84.JPG"},
      85: {time: moment({hours: 21, minutes: 15}), source_low: "/images/time_vis/low/IMG_85.jpg", source_high: "/images/time_vis/high/IMG_85.jpg", source_raw: "/images/time_vis/IMG_85.JPG"},
      86: {time: moment({hours: 21, minutes: 30}), source_low: "/images/time_vis/low/IMG_86.jpg", source_high: "/images/time_vis/high/IMG_86.jpg", source_raw: "/images/time_vis/IMG_86.JPG"},
      87: {time: moment({hours: 21, minutes: 45}), source_low: "/images/time_vis/low/IMG_87.jpg", source_high: "/images/time_vis/high/IMG_87.jpg", source_raw: "/images/time_vis/IMG_87.JPG"},

      88: {time: moment({hours: 22, minutes: 0}), source_low: "/images/time_vis/low/IMG_88.jpg", source_high: "/images/time_vis/high/IMG_88.jpg", source_raw: "/images/time_vis/IMG_88.JPG"},
      89: {time: moment({hours: 22, minutes: 15}), source_low: "/images/time_vis/low/IMG_89.jpg", source_high: "/images/time_vis/high/IMG_89.jpg", source_raw: "/images/time_vis/IMG_89.JPG"},
      90: {time: moment({hours: 22, minutes: 30}), source_low: "/images/time_vis/low/IMG_90.jpg", source_high: "/images/time_vis/high/IMG_90.jpg", source_raw: "/images/time_vis/IMG_90.JPG"},
      91: {time: moment({hours: 22, minutes: 45}), source_low: "/images/time_vis/low/IMG_91.jpg", source_high: "/images/time_vis/high/IMG_91.jpg", source_raw: "/images/time_vis/IMG_91.JPG"},

      92: {time: moment({hours: 23, minutes: 0}), source_low: "/images/time_vis/low/IMG_92.jpg", source_high: "/images/time_vis/high/IMG_92.jpg", source_raw: "/images/time_vis/IMG_92.JPG"},
      93: {time: moment({hours: 23, minutes: 15}), source_low: "/images/time_vis/low/IMG_93.jpg", source_high: "/images/time_vis/high/IMG_93.jpg", source_raw: "/images/time_vis/IMG_93.JPG"},
      94: {time: moment({hours: 23, minutes: 30}), source_low: "/images/time_vis/low/IMG_94.jpg", source_high: "/images/time_vis/high/IMG_94.jpg", source_raw: "/images/time_vis/IMG_94.JPG"},
      95: {time: moment({hours: 23, minutes: 45}), source_low: "/images/time_vis/low/IMG_95.jpg", source_high: "/images/time_vis/high/IMG_95.jpg", source_raw: "/images/time_vis/IMG_95.JPG"},
    }
    //^^^Has time and src for images in each quarter
  }
});



/* findCurrentQuarter - Finds current quarter represented in float
 *
 * @param  {moment.js object} currentTime
 * @return {float}  Current quarter with decimal point (for opacity) (float reflect depth into quarter)
 */
function findCurrentQuarter(currentTime) {
  var diff_from_start_of_day = currentTime.diff(moment(currentTime).startOf('day')) / 1000 // /1000 converts millisecs to secs
  return Math.floor(diff_from_start_of_day) / 900 // 900 secs per 15 minute quarter
}

/* setImgSrc - Changes sources for image elements
 *
 * @param  {Float} current_quarter  Finds what 15 minute quarter we're in
 *
 * Inserts previous image based on current quarter
 * Increments quarter by 1 for current image      >>>Ahead of previous image
 */
function setImgSrc(current_quarter){
  current_quarter = Math.floor(current_quarter)
  if (current_quarter >= 95) current_quarter = 0 // reset after midnight
  TimeVisual.previous_image.src = TimeVisual.imageSources[current_quarter]["source_" + TimeVisual.selected_resolution]
  current_quarter += 1 // Current image must be one ahead of previous image
  TimeVisual.current_image.src = TimeVisual.imageSources[current_quarter]["source_" + TimeVisual.selected_resolution]
}

// imageOpacity - Changes current image opacity based on depth in quarter
function imageOpacity(current_quarter){
  var percentage = current_quarter % 1 // opacity is a decimal part of the current_quarter
  TimeVisual.current_image.style.opacity = percentage
}

/* getCurrentTime - Gets time || ajusts current time with multiplier
 *
 * Hash stores minutes to multiply by
 * For example: http://127.0.0.1:3000/Projects/Voovs/time-visual/app.html?high#3    >>>Note #3 at the end
 * Adds 3 minutes per each iteration of this function
 * Fifth time this function is called will add 15 minutes             >>>(3(from hash) * 5(iteration of function))
 *
 * @return {moment() || ajusted moment()}  Returns moment.js object
 */
function getCurrentTime(){
  if (location.hash == '') {
    // Use real current time
    return moment()
  } else {
    // Use fake time
    // this.time_shift_multiplier != undefined || (this.time_shift_multiplier = 0)
    if (this.time_shift_multiplier == undefined) this.time_shift_multiplier = 0
    this.time_shift_multiplier += 1 //Records number of iterations of function
    var time_shift = this.time_shift_multiplier * location.hash.replace('#', '')
    return moment().startOf('day').add(time_shift, 'minutes')
  }
}

// setClock - Changes display of analog clock
function setClock(current_time){
  document.getElementById("clock").innerHTML = current_time.format('h:mm:ss A')
}



/* setInterval - Updates content every second
 *
 * getCurrentTime - Finds what's the timeout (May be altered from true time)
 * findCurrentQuarter - Returns float of what 15 minute segment we're in
 * SetClock - Updates display of analog clock based on current time
 * setImgSrc - Sets the correct image sources based on current quarter
 * imageOpacity - Sets img_curr opacity based on quarter depth
 */
setInterval(function() {
  var current_time = getCurrentTime()
  TimeVisual.current_quarter = findCurrentQuarter(current_time)
  setClock(current_time)
  setImgSrc(TimeVisual.current_quarter)
  imageOpacity(TimeVisual.current_quarter)
}, 1000)
//Note: "quarter" reffers to a 15 minute segment of the day. There are 96 of these in one day and 900 seconds in a quarter
//Note: "quarter depth" reffers to how many seconds we're into the current 15 minute segment
