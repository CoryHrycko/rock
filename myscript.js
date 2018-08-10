window.onload = function(){ 
    // your code 
var myArray = [
  "Rock",
  "Paper",
  "Scissors"
];

var rI = myArray[Math.floor(Math.random()*myArray.length)];

var button = document.querySelector('button', +rI);
button.onclick = function() {
  var uC = prompt('Rock, Paper, Scissors! ');
    if(!uC){
      document.write(
      "<p><br> Stop it")
    }else{
      document.write("<p> Player 1: " +uC + "<br><br></p>")
    }
 //Breakm
  
 var cP = myArray[Math.floor(Math.random() * myArray.length)];;
  document.write("<p>Computer:" + " " + cP + "</p>");
var compare = function(uC,cP){
  if (uC === cP) {
      return "its a tie!";
      };
  if (uC === "Rock")
    if (cP === "Scissors"){
      // rock  
      return "You Win";
    }else{
      //paper 
      return "Youy lose! Try again!"
    }
  if(uC === "Paper"){
    if(cP === "Rock"){
    //paper
    return "You Win!!";
  }else{
    //sxissor
    return " Lost again!";
  }
  }
  if (uC === "Scissors"){
    if (cP ==="Rock"){
      //rock
      return "Lost Dang";
    }else {
      //sci
      return "WON AGAIN";
    }
  }
}
var results = compare(uC, cP)
  document.write('<p><br><hr><br>' + results);
}
}