var sheet_welcome = document.styleSheets[0]
var sheet_app = document.styleSheets[1]


var welcome_view = function(){
sheet_welcome.disabled = false
sheet_app.disabled = true
};

var app_view = function (){
  //document.getElementById("body").innerHTML = ""
  sheet_welcome.disabled = true
  sheet_app.disabled = false
}

var vueing = new Vue({
  el: '#first_vue',
  data: {
    words: 'Hello Vue!'
  }
})
