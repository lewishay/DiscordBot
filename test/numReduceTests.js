"use strict";

const numReduce = require(__dirname + "/../commands/projects/numberReducerScript");

describe("NUMREDUCE - One", function () {
    it("should return one without performing any operations on it", function (done) {
        let result = numReduce.reduce(1);
        result.indexOf("\n").should.equal(-1); //the result array should contain only the success message and no extra lines
        result.should.equal("The value is 1. Success!");
        done();
    });
});

describe("NUMREDUCE - Zero", function () {
    it("should refuse to perform any operations on the value", function (done) {
        let result = numReduce.reduce(0);
        result.indexOf("\n").should.equal(-1); //there should only be one sentence and no extra lines
        result.should.equal("The value is 0. No reduction needed.");
        done();
    });
});

describe("NUMREDUCE - Reduce to one", function () {
    it("should reduce a very large number to one after multiple operations", function (done) {
        let result = numReduce.reduce(847295729).split("\r\n");
        result.length > 1; //there should be multiple operations, each seperated by a new line
        result[0].should.equal("The value is 847295729. Commencing function...");
        result.pop().should.equal("The value is 1. Success!");
        done();
    });
});