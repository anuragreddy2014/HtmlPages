var secretNumber=7;
var guess=prompt("Guess a number");
if(Number(guess) === secretNumber){
alert("you got it !!");
}
else if(Number(guess) > secretNumber){
    alert("too high... guess again");
}
else if(Number(guess) < secretNumber){
    alert("too low... guess again");
}