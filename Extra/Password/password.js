//Random generator variables below
var if_capital_letters, if_numbers, if_underscores, if_special_characters, if_other, total

var results
//HTML checkbox variables below

//Checking user input results- part 1 of running sequence


function get_current_length(){
  return Number(document.getElementById("length").value)
}
 function length_of_pass(){
   if(get_current_length() == 0){
     alert("Please specify an integer greater than 0")
   }else{
     return get_current_length()
   }
 }
 /*function length_of_pass(){
   if(get_current_length() == 0){
     alert("Please specify an integer greater than 0")
   }else{
     return get_current_length()
   }
 }*/
function user_results(){
  this.if_letters = Boolean(document.getElementById("lowercase_letters").checked)
  this.if_capital_letters = Boolean(document.getElementById('capital_letters').checked)
  this.if_underscores = Boolean(document.getElementById('underscores').checked)
  this.if_hyphens = Boolean(document.getElementById("hyphens").checked)
  this.if_numbers = Boolean(document.getElementById('numbers').checked)
  this.if_special_characters = Boolean(document.getElementById('special').checked)
}
function getRndInteger(max){
  return Math.floor(Math.random() * (max))
}

function generation(){
  /*if selected desired password length is 0 then
    alert "too short"
    return
  if none of the checkboxes is checked
    alert "nothing is checked"
    return*/


  var letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"] //26
  var capital_letters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"] //26
  var numbers = ["1","2","3","4","5","6","7","8","9","0"] //10
  var special_characters = ["!","#","$","%","^","*","\\","/","@"] //9
  //var other = document.getElementById('other').value.toString()

  var results = new user_results()
  var password = ""

  total = []
  if (results.if_letters == true){
    total = total.concat(letters)
  }
  if (results.if_capital_letters == true){
    total = total.concat(capital_letters)
  }
  if (results.if_numbers == true){
    total = total.concat(numbers)
  }
  if (results.if_underscores == true){
    total = total.concat(["_","_","_"])
  }
  if (results.if_hyphens == true){
    total = total.concat(["-","-","-"])
  }
  if (results.if_special_characters ==  true){
    total = total.concat(special_characters)
  }

  for (var i = 0; i < length_of_pass(); i++){
    password = password.concat(total[getRndInteger(total.length)])
  }
  if (total.length == 0){
    return "Nice try, though we have thought ahead!"
  }else if (total.length > 0){
  console.log(password)
  return password
  }
}

var real_password

function construct(){
  var real_password = generation()
  if (real_password == "Nice try, though we have thought ahead!"){
    document.getElementById("button").innerHTML = "Try again"
    document.getElementById("password").innerHTML = real_password
    document.getElementById("second_marker").innerHTML = "Fill out the list above and try again"
  }else if (real_password.length > 0){
  document.getElementById("button").innerHTML = "Try again"
  document.getElementById("marker").innerHTML = "Here\'s your password:"
  document.getElementById("password").innerHTML = real_password
  document.getElementById("second_marker").innerHTML = "Check out your previous passwords below:"
  passwordStore(real_password)
  }
}

var passwordStore = function(pass){
  let newLi = document.createElement("li")
  let prevPassword = document.createTextNode(pass)
  newLi.appendChild(prevPassword)
  document.getElementById("listStore").insertBefore(newLi, document.getElementById("listStore").childNodes[0])
}


/*
function user_results(){
  var if_capital_letters = Boolean(document.getElementById('capital_letters').checked)
  var if_numbers = Boolean(document.getElementById('numbers').checked)
  var if_underscores = Boolean(document.getElementById('underscores').checked)
  var if_special_characters = Boolean(document.getElementById('special').checked)
  if (document.getElementById("other").value.toString() != ""){
    other = document.getElementById("other").value.toString()
  }else if (document.getElementById("other").value.toString() == ""){
    other = false
  }else{
    alert("We were unable to read your input for that last bit. Make sure it\'s either empty or filled. If that still doesn't work, reboot the site with \"CTRL + R\". Otherwise, you can report the issue to Voovs at voovs.13@gmail.com")
  }
}

function random_initiation(){
}
var x

function my_alert(){
  console.log(all_the_data.password_length)
}
*/
