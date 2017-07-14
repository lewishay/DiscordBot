module.exports = {
    makeMove
}

var opponentMove = ["rock", "scissors", "paper", "lizard", "spock"];
var player = {};
player["rock"] = ["draws against", "crushes", "is covered by", "crushes", "is vaporised by"];
player["scissors"] = ["is crushed by", "draws against", "cuts", "decapitates", "is vaporised by"];
player["paper"] = ["covers", "is cut by", "draws against", "is eaten by", "disproves"];
player["lizard"] = ["is crushed by", "is decapitated by", "eats", "draws against", "poisons"];
player["spock"] = ["vaporises", "vaporises", "is disproved by", "is poisoned by", "draws against"];
var winCheck = {};
winCheck["rock"] = ["You draw!", "You win!", "Opponent wins!", "You win!", "Opponent wins!"];
winCheck["scissors"] = ["Opponent wins!", "You draw!", "You win!", "You win!", "Opponent wins!"];
winCheck["paper"] = ["You win!", "Opponent wins!", "You draw!", "Opponent wins!", "You win!"];
winCheck["lizard"] = ["Opponent wins!", "Opponent wins!", "You win!", "You draw!", "You win!"];
winCheck["spock"] = ["You win!", "You win!", "You lose!", "You lose!", "You draw!"];
var count = 0;
var playerWinCount = 0;
var opponentWinCount = 0;
var drawCount = 0;
var outcome;
var rockCount = 0;
var scissorCount = 0;
var paperCount = 0;
var lizardCount = 0;
var spockCount = 0;
var mostCommon;
var mostCommonCount;

function makeMove(x) {
    if(player[x] == undefined) {
        return "Not a valid move.";
    }
    resultArray = [];
    var theirMove = opponentMove[Math.floor((Math.random() * 5))];
    resultArray.push("Player picks: " + x);
    resultArray.push("Opponent picks: " + theirMove);
    resultArray.push(x.charAt(0).toUpperCase() + x.slice(1) + " " + player[x][opponentMove.indexOf(theirMove)] + " " + theirMove);
    outcome = winCheck[x][opponentMove.indexOf(theirMove)];
    resultArray.push(outcome);
    count++;
    resultArray.push("Number of games played: " + count);
    
    if(outcome === "You win!") {
        playerWinCount++;
    }
    else if(outcome === "Opponent wins!") {
        opponentWinCount++;
    }
    else {
        drawCount++;
    }
    resultArray.push("Number of player wins: " + playerWinCount);
    resultArray.push("Number of opponent wins: " + opponentWinCount);
    resultArray.push("Number of draws: " + drawCount);
    
    resultArray.push("Player win rate: " + (Math.round(((playerWinCount/count)*100) * 100) / 100) + "%, " + 
                "Opponent win rate: " + (Math.round(((opponentWinCount/count)*100) * 100) / 100) +  "%, " + 
                "Draw rate: " + (Math.round(((drawCount/count)*100) * 100) / 100) + "%");	
    
    if(x === "rock" || theirMove === "rock") {
        if(x === "rock" && theirMove === "rock") {
            rockCount += 2;
        }
        else {
            rockCount++;
        }
    }
    if(x === "scissors" || theirMove === "scissors") {
        if(x === "scissors" && theirMove === "scissors") {
            scissorCount += 2;
        }
        else {
            scissorCount++;
        }
    }
    if(x === "paper" || theirMove === "paper") {
        if(x === "paper" && theirMove === "paper") {
            paperCount += 2;
        }
        else {
            paperCount++;
        }
    }	
    if(x === "lizard" || theirMove === "lizard") {
        if(x === "lizard" && theirMove === "lizard") {
            lizardCount += 2;
        }
        else {
            lizardCount++;
        }
    }	
    if(x === "spock" || theirMove === "spock") {
        if(x === "spock" && theirMove === "spock") {
            spockCount += 2;
        }
        else {
            spockCount++;
        }
    }
    
    if(rockCount > scissorCount && rockCount > paperCount && rockCount > lizardCount && rockCount > spockCount) {
        mostCommon = "rock";
        mostCommonCount = rockCount;
    }
    else if(scissorCount > rockCount && scissorCount > paperCount && scissorCount > lizardCount && scissorCount > spockCount) {
        mostCommon = "scissors";
        mostCommonCount = scissorCount;
    }
    else if(paperCount > rockCount && paperCount > scissorCount && paperCount > lizardCount && paperCount > spockCount) {
        mostCommon = "paper";
        mostCommonCount = paperCount;
    }
    else if(lizardCount > rockCount && lizardCount > scissorCount && lizardCount > paperCount && lizardCount > spockCount) {
        mostCommon = "lizard";
        mostCommonCount = lizardCount;
    }
    else if(spockCount > rockCount && spockCount > scissorCount && spockCount > paperCount && spockCount > lizardCount) {
        mostCommon = "spock";
        mostCommonCount = spockCount;
    }
    else {
        mostCommon = "None";
    }
    
    resultArray.push("The most commonly picked choice is " + mostCommon + ": " + 
                (Math.round((mostCommonCount/(count*2))*100 * 100) / 100) + "%");
    return resultArray.join("\r\n");
}