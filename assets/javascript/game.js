// create a load window function.
// windows.onload= function (){

// };

// create a var loop for random numberts
// number should be between 19-120
$(document).ready(function(){
  var Random= Math.floor(Math.random()*101+19)
  
  
  var x = document.getElementById("myAudio"); 
  // x.play()

  $(".gemsImage").on("click", function(){
    x.play();
})
// select a random number to be shown at the start of the page
$("#points").text(Random);

// number should be between 1-12
var num1= Math.floor(Math.random()*11+1);
var num2= Math.floor(Math.random()*11+1);
var num3= Math.floor(Math.random()*11+1);
var num4= Math.floor(Math.random()*11+1);

// create variables for the tallies/and gems (with a 0 variable)
var userTotal= 0;
var wins = 0;
var losses = 0;

// declare the variables from html
$("#wins").text(wins);
$("#losses").text(losses);

// create a reset function
function reset() {
  Random=Math.floor(Math.random()*101+19);
  console.log(Random);
  $("#points").text(Random);
  num1= Math.floor(Math.random()*11+1);
  num2= Math.floor(Math.random()*11+1);
  num3= Math.floor(Math.random()*11+1);
  num4= Math.floor(Math.random()*11+1);
  userTotal= 0;
  $("#usertotal").text(userTotal);
}

// add wins from html
function yay(){
  wins++;
  $("#wins").text(wins);
  alert("You win");
  reset();
}

// add losses from html
function lose(){
  losses++;
  $("#losses").text(losses);
  alert("game over");
  reset();
}

// set up clicks for the gems
// gem id "#one"
$("#one").on("click", function(){
  userTotal= userTotal + num1;
  console.log("New usertotal=" + userTotal);
  $("#usertotal").text(userTotal);
  // add wins/losses
  if (userTotal == Random){
    yay();
  }
  else if (userTotal > Random){
    lose();
  }
})

// gem id "#two"
$("#two").on("click", function(){
  userTotal= userTotal + num2;
  console.log ("New usertotal" + userTotal);
  $("#usertotal").text(userTotal);
  // add wins/losses
  if (userTotal == Random){
  yay ();
  }
  else if (userTotal > Random){
    lose();
  }
})

// gem id "#three"
$("#three").on("click", function(){
  userTotal = userTotal + num3;
  console.log ("New usertotal" + userTotal);
  $("#usertotal").text(userTotal);
  // add wins/losses
  if (userTotal == Random){
    yay ();
  }
  else if (userTotal > Random){
    lose();
  }
})

// gem id "#four"
$("#four").on("click", function(){
  userTotal = userTotal + num4;
  console.log ("New usertotal" + userTotal);
  $("#usertotal").text(userTotal);
  // add wins/losses
  if(userTotal == Random){
    yay();
  }
  else if (userTotal > Random){
    lose();
  }
})
  // See about adding audio to the game...  
});
