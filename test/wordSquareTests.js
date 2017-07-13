"use strict";

const wordSquare = require(__dirname + "/../commands/projects/wordSquareScript");

describe("Less than one", function () {
    it("should return an error and refuse to make a square", function (done) {
        wordSquare.makeSquare("").should.equal("Please enter a word.");
        done();
    });
})

describe("Top and bottom rows", function () {
    it("should populate the top and bottom rows of the square as the word and the word reversed respectively", function (done) {
        let result = wordSquare.makeSquare("BIGSQUARE").split("\r\n");
        result[0].should.equal("B\xa0I\xa0G\xa0S\xa0Q\xa0U\xa0A\xa0R\xa0E");
        result[8].should.equal("E\xa0R\xa0A\xa0U\xa0Q\xa0S\xa0G\xa0I\xa0B");
        done();
    });
});

describe("Middle rows", function () {
    it("should populate rows of the square that are inbetween the top and bottom rows with the correct amount of spaces", function (done) {
        let result = wordSquare.makeSquare("BIGSQUARE").split("\r\n");
        result[2].should.equal("G\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0A");
        result[4].should.equal("Q\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Q");
        result[6].should.equal("A\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0G");
        done();
    })
})