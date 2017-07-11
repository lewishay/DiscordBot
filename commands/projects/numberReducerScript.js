module.exports = {
    reduce
}

function reduce(x) {
    var resultArray = [];
    var big = parseInt(x);
    if(big == 0) return "The value is 0. No reduction needed.";
    while(big !== 1) {
        resultArray.push("The value is " + big + ". Commencing function...");
        if(big % 3 == 0) {
            big /= 3;
        }
        else {
            big += 1;
        }
    }
    resultArray.push("The value is " + big + ". Success!");
    return resultArray.join("\r\n");
}