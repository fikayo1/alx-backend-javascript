const assert = require("assert");
const calculateNumber = require('./0-calcul.js');

describe("calculateNumber", function() {
    it("should round the numbers and return their sum", function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(3.8, 7.2), 11);
        assert.equal(calculateNumber(1, 3.7), 5);
    });
});
