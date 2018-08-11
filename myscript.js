window.onload = function(){ 
    // wrapper so things load after
  
  function cP() {
    const ranNo = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors']
    return choices[ranNo];
};
  //Button play
  var button = document.querySelector('button',cP);
button.onclick = function() {
  var uC = prompt('Rock, Paper, Scissors! ');
    if(!uC){
      document.write(
      "<p><br> not cool")
    }else{
      document.write("<p> Player 1: " +uC + "<br><br></p>")
    }
 //Breakm
  // ALt Function
 function compare(uC, cP) {
    if (uC === cP) {
       return 'draw';
   } else if (
       uC === 'Rock' && cP == 'Scissors' ||
       uC === 'Paper' && cP == "Rock" ||
      uC === 'Scissors' && cP == 'Paper') {
      return "You win this round!";"Ooops! You lost this round."
  } else {  
 return "Ooops! You lost this round."
   }
}
  
  
 var cP = myArray[Math.floor(Math.random() * myArray.length)];;
  document.write("<p>Computer:" + " " + cP + "</p>");
//var compare = function(uC,cP){
 // if (uC === cP) {
//      return "its a tie!";
//      };
//  if (uC === "Rock")
//    if (cP === "Scissors"){
//      // rock  
//      return "You Win";
//    }else{
//     //paper 
//      return "Youy lose! Try again!"
//    }
//  if(uC === "Paper"){
//    if(cP === "Rock"){
//    //paper
//    return "You Win!!";
//  }else{
//    //sxissor
//    return " Lost again!";
//  }
//  }
//  if (uC === "Scissors"){
//    if (cP ==="Rock"){
//      //rock
//      return "Lost Dang";
//    }else {
      //sci
 //     return "WON AGAIN";
 //   }
//  }
//}
var results = compare(uC, cP)
  document.write('<p><br><hr><br>' + results);
}
}