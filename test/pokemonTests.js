"use strict";

const pokemon = require(__dirname + "/../commands/projects/pokemonScript");

describe("POKEMON - Fire move attacking water type", function () {
    it("should return that fire is not very effective against water", function (done) {
        pokemon.effectivenessCheck2("fire", "water").should.equal("Fire is not very effective against Water!\n" + 
                                                                    "The attack multiplier is 0.5.");
        done();
    });
});

describe("POKEMON - Water move attacking fire type", function () {
    it("should return that water is super effective against fire", function (done) {
        pokemon.effectivenessCheck2("water", "fire").should.equal("Water is super effective against Fire!\n" +
                                                                    "The attack multiplier is 2.");
        done();
    });
});

describe("POKEMON - Ghost move attacking normal type", function () {
    it("should return that ghost is ineffective against normal", function (done) {
        pokemon.effectivenessCheck2("ghost", "normal").should.equal("Ghost is ineffective against Normal!\n" +
                                                                        "The attack multiplier is 0.");
        done();
    });
});

describe("POKEMON - Grass move attacking rock and ground type", function () {
    it("should return that grass is four times effective against rock and ground", function (done) {
        pokemon.effectivenessCheck3("grass", "rock", "ground").should.equal("Grass is super effective against Rock/Ground!\n" +
                                                                                "The attack multiplier is 4.");
        done();
    });
});

describe("POKEMON - Normal move attacking rock and steel type", function () {
    it("should return that normal is four times weak against rock and steel", function (done) {
        pokemon.effectivenessCheck3("normal", "rock", "steel").should.equal("Normal is not very effective against Rock/Steel!\n" +
                                                                                "The attack multiplier is 0.25.");
        done();
    });
});

describe("POKEMON - Incorrect arguments", function () {
    it("should return that an invalid type was given", function (done) {
        pokemon.effectivenessCheck2("rock", "plasma").should.equal("An invalid type was given.");
        pokemon.effectivenessCheck3("shadow", "psychic", "fire").should.equal("An invalid type was given.");
        done();
    })
})