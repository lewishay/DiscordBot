"use strict";

const rpsls = require(__dirname + "/../commands/projects/rockPapSciLizSpoScript");
const assert = require("assert");

let result = rpsls.makeMove("rock").split("\r\n");
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

describe("RPSLS - First move", function () {
    it("should make a move and display initial statistics", function (done) {
        result[0].should.equal("Player picks: rock");
        result[1].substring(0, 16).should.equal("Opponent picks: ");
        assert.equal(checkWord(result[1].substring(16), null, ["rock", "paper", "scissors", "lizard", "spock"]), true);
        assert.equal(checkWord(result[3], null, ["Opponent wins!", "You win!", "You draw!"]), true);
        result[4].should.equal("Number of games played: 1");
        assert.equal(checkWord(result[5], null, ["Number of player wins: 0", "Number of player wins: 1"]), true);
        assert.equal(checkWord(result[6], null, ["Number of opponent wins: 0", "Number of opponent wins: 1"]), true);
        assert.equal(checkWord(result[7], null, ["Number of draws: 0", "Number of draws: 1"]), true);
        assert.equal(checkWord(result[8], null, ["Player win rate: 0%, Opponent win rate: 0%, Draw rate: 100%",
                                                "Player win rate: 0%, Opponent win rate: 100%, Draw rate: 0%",
                                                "Player win rate: 100%, Opponent win rate: 0%, Draw rate: 0%"]), true);
        result[9].substring(0, 35).should.equal("The most commonly picked choice is ");
        assert.equal(checkWord(result[9].substring(35), null, ["rock: 100%", "paper: 100%", "scissors: 100%", 
                                                                "lizard: 100%", "spock: 100%", "None: NaN%"]), true);
        done();
    });
});