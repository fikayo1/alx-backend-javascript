const assert = require("assert");
const calculateNumber = require('./1-calcul.js');

describe("calculateNumber", function() {
    it("should round the numbers and return their sum", function() {
        assert.equal(calculateNumber(1.2, 3.7, "SUM"), 5);
    });
    it("should round the numbers and return their difference", function() {
        assert.equal(calculateNumber(7.2, 3.2, "SUBTRACT"), 4);
    });
    it("should round the numbers and return their Division", function() {
        assert.equal(calculateNumber(6.2, 3.3, "DIVIDE"), 2);
        assert.equal(calculateNumber(6.2, 0.1, "DIVIDE"), "Error");

    });
});
