module.exports = {
    makeSquare,
    reverse
}

 function makeSquare(word) {
    if(word.length < 1) {
        return "Please enter a word.";
    }
    var inner = [];
    var length = word.length;
    var newLine;
    var whiteSpaces = "";
    
    for(var i = 1; i < (length - 1); i++) {
        whiteSpaces += ("\xa0" + "\xa0");
    }
    whiteSpaces += "\xa0";

    inner[0] = word.toString().split('').join("\xa0");
    inner[length - 1] = reverse(word).toString().split('').join("\xa0");

    for(var j = 1; j < (length - 1); j++) {
        inner[j] = word.charAt(j) + whiteSpaces + word.charAt(word.length - (j + 1));
    }

    return inner.join("\r\n");
}

function reverse(s) {
    return s.toString().split("").reverse().join("");
}