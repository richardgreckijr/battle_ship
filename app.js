//Variables to hold each cell of ship
var location1 = 3;
var location2 = 4;
var location3 = 5;

//player's guess
var userGuess;

//total number of guesses
var guessTotal = 0;

//number of hits
var hits = 0;

//is the ship sunk
var isSunk = false;

while (isSunk==false) {
    userGuess = prompt("Ready, aim, FIRE! (enter a number 0-6):");
    if (userGuess < 0 || userGuess > 6 ) {
        alert("Please enter a valid number.");
    }  else {
        guessTotal = guessTotal + 1;

        if (userGuess == location1 || userGuess == location2 || userGuess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true; 
                alert("You sunk my battleship");           
             }
            }else {
                alert("MISS")
            }
        }
    }

//Player game stats
var stats = "You took " + guessTotal + " guesses to sink the battleship, " +
 "which means your shooting accuracy was " + (3/guessTotal);

 alert(stats);