module.exports = {
    makeMove
}

var hangmanImage = ["         _______","         |     |","         |     O","         |    /|\\",
                    "         |    / \\","         |","       __|___","       |    |"];
var guessWord = "sandwich";
var guessArray = [];
for(var z = 2; z < (guessWord.length + 1); z++) {
    guessArray += "_";
}
var savedGuessWord = guessWord;
var counter = 0;
var failCounter = 0;
var prevGuesses = [];

function makeMove(x) {
    var resultArray = [];
    resultArray.push("Turn number: " + (counter + 1) + ". Remaining incorrect guesses: " + (7 - failCounter) + ".");
    resultArray.push("Please guess a letter.");
    if(prevGuesses.length > 0) {
        resultArray.push("Previous guesses: " + prevGuesses.toString());
    }
    resultArray.push(guessArray.toString());
    var guess = x;
    prevGuesses += guess;
    if(guessWord.indexOf(guess) !== -1) {
        resultArray.push("Correct guess.");
        for(var i = 0; i < guessWord.length; i++) {
            if(guessWord[i] == guess) {
                guessArray[i] = guess;
            }
        }
        guessWord = guessWord = guessWord.split(guess.toString()).join(" ");
        if(guessArray.toString().indexOf("_") == -1) {
            resultArray.push("You win! Yes dude!");
            resultArray.push("The word was " + savedGuessWord);
            return resultArray.join("\r\n");
        }
        counter += 1;
    }
    else {
        for(var j = 0; j < failCounter + 1; j++) {
            resultArray.push(hangmanImage[j]);
        }
        failCounter += 1;
        if(failCounter > 7) {
            resultArray.push("Game over! YOU DIED!");
            resultArray.push("The word was " + savedGuessWord);
            return resultArray.join("\r\n");
        }
        counter += 1;
    }
  return resultArray.join("\r\n");
}