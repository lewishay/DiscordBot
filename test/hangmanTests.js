"use strict";

const hangman = require(__dirname + "/../commands/projects/hangmanScript");
const assert = require("assert");

// NOTE: The hangman project is difficult to test due to the nature of how the function is written and the
// randomness of the word to guess. 

let checkWord = function(input, wordToCheck, arrayToCheck) {
            let isFound = false;
            if(arrayToCheck) {
                for(let i = 0; i < arrayToCheck.length; i++) {
                    if(input.includes(arrayToCheck[i])) {
                        isFound = true;
                    }
                }
            }
            else if(input.includes(WordtoCheck)) {
                isFound = true;
            }
            return isFound;
        }

describe("HANGMAN - New game", function () {
    it("should return that a new game has been started", function (done) {
        hangman.newGame().should.equal("A new game has been started! Type 'hangman [letter]' to play!");
        done();
    });
});

describe("HANGMAN - Letter entered", function () {
    it("should return the correct information regarding the state of play", function (done) {
        hangman.newGame();
        let result = hangman.makeMove("s").split("\r\n");
        result[0].substring(0, 45).should.equal("Turn number: 1. Remaining incorrect guesses: ");
        assert.equal(checkWord(result[0].substring(45), null, ["6", "7"]), true);
        result[1].should.equal("Previous guesses: s");
        //Can't really test line 2 because of the random nature of it. Manual testing is necessary.
        assert.equal(checkWord(result[3], null, ["Correct guess.", "Incorrect guess."]), true);
        done();
    });
});