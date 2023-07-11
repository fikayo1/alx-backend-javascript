const assert = require("assert");
const calculateNumber = require('./1-calcul.js');

describe("calculateNumber", function() {
    it("should round the numbers and return their sum", function() {
        assert.equal(calculateNumber("SUM",1.2, 3.7), 5);
    });
    it("should round the numbers and return their difference", function() {
        assert.equal(calculateNumber("SUBTRACT", 7.2, 3.2), 4);
    });
    it("should round the numbers and return their Division", function() {
        assert.equal(calculateNumber("DIVIDE", 6.2, 3.3, ), 2);
        assert.equal(calculateNumber("DIVIDE", 6.2, 0.1), "Error");

    });
});
