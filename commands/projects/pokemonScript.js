module.exports = {
    effectivenessCheck2,
    effectivenessCheck3
}

var types = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];
var database = {};
database["normal"] = [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1];
database["fighting"] = [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5];
database["flying"] = [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1];
database["poison"] = [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2];
database["ground"] = [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1];
database["rock"] = [1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1];
database["bug"] = [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5];
database["ghost"] = [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1];
database["steel"] = [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2];
database["fire"] = [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1];
database["water"] = [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1];
database["grass"] = [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1];
database["electric"] = [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1];
database["psychic"] = [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1];
database["ice"] = [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1];
database["dragon"] = [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0];
database["dark"] = [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5];
database["fairy"] = [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1];

function effectivenessCheck2(x, y) {
    if(database[x] == undefined || database[y] == undefined) {
        return "An invalid type was given.";
    }
    var result = database[x][types.indexOf(y)];
    var effectiveness;
    switch(result) {
        case 0: effectiveness = "ineffective";
        break;
        case 0.25: effectiveness = "not very effective";
        break;
        case 0.5: effectiveness = "not very effective";
        break;
        case 1: effectiveness = "effective";
        break;   
        default: effectiveness = "super effective";
        break;
    }
    return x.charAt(0).toUpperCase() + x.slice(1) + " is " + effectiveness + " against " + y.charAt(0).toUpperCase() + y.slice(1) + 
        "!\nThe attack multiplier is " + result + ".";
}

function effectivenessCheck3(x, y, z) {
    if(database[x] == undefined || database[y] == undefined || database[z] == undefined) {
        return "An invalid type was given.";
    }
    var result = database[x][types.indexOf(y)];
    result *= database[x][types.indexOf(z)];
    var effectiveness;
    switch(result) {
        case 0: effectiveness = "ineffective";
        break;
        case 0.25: effectiveness = "not very effective";
        break;
        case 0.5: effectiveness = "not very effective";
        break;
        case 1: effectiveness = "effective";
        break;
        default: effectiveness = "super effective";
        break;
    }
    return x.charAt(0).toUpperCase() + x.slice(1) + " is " + effectiveness + " against " + y.charAt(0).toUpperCase() + y.slice(1) + "/" + 
        z.charAt(0).toUpperCase() + z.slice(1) + "!\nThe attack multiplier is " + result + ".";
}