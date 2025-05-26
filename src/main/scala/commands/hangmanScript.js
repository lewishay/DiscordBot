module.exports = {
    newGame,
    makeMove,
    getRandomLine
}

var fs = require("fs");
var playing = false;
var hangmanImage = ["         _______","         |     |","         |     O","         |    /|\\",
                    "         |    / \\","         |","       __|___","       |    |"];
var guessWord;
var guessArray;
var savedGuessWord;
var counter;
var failCounter;
var prevGuesses;

// function getRandomLine(filename){
//   fs.readFile(filename, function(err, data){
//     if(err) throw err;
//     var lines = (data += '').split('\n');
//     return lines[Math.floor(Math.random()*lines.length)];
//  })
// }

function getRandomLine(filename) {
    var text = fs.readFileSync(filename).toString('utf-8');
    var textByLine = text.split("\n");
    return textByLine[Math.floor(Math.random() * textByLine.length)];
}

function newGame() {
    guessWord = getRandomLine("C:/Users/Administrator/Documents/DiscordBot/commands/projects/wordlist.txt");
    savedGuessWord = guessWord;
    guessArray = [];
    for(let z = 0; z < (guessWord.length); z++) {
        guessArray.push("_");
    }
    playing = true;
    counter = 0;
    failCounter = 0;
    prevGuesses = [];
    return "A new game has been started! Type 'hangman [letter]' to play!";
}

function makeMove(guess) {
    if(playing) {
        var resultArray = [];
        resultArray.push("Turn number: " + (counter + 1) + ". Remaining incorrect guesses: " + (7 - failCounter) + ".");
        prevGuesses.push(guess);
        if(prevGuesses.length > 0) {
            resultArray.push("Previous guesses: " + prevGuesses.toString());
        }
        if(guessWord.indexOf(guess) !== -1) {
            for(let i = 0; i < guessWord.length; i++) {
                if(guessWord[i] === guess) {
                    guessArray[i] = guess;
                    
                }
            }
            resultArray.push("Current word progress: " + guessArray.toString());
            resultArray.push("Correct guess.");
            guessWord = guessWord.split(guess.toString()).join(" ");
            if(guessArray.toString().indexOf("_") == -1) {
                resultArray.push("You win! Yes dude!");
                resultArray.push("The word was '" + savedGuessWord + "'!");
                playing = false;
                return resultArray.join("\r\n");
            }
            counter += 1;
        }
        else {
            resultArray.push("Current word progress: " + guessArray.toString());
            resultArray.push("Incorrect guess.");
            for(let i = 0; i < failCounter + 1; i++) {
                resultArray.push(hangmanImage[i]);
            }
            failCounter += 1;
            if(failCounter > 7) {
                resultArray.push("Game over! YOU DIED!");
                resultArray.push("The word was '" + savedGuessWord + "'!");
                playing = false;
                return resultArray.join("\r\n");
            }
            counter += 1;
        }
        return resultArray.join("\r\n");
    }
    else {
        return "You must start a new game first!"
    }
}