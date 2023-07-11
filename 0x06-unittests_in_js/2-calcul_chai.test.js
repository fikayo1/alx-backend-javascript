const chai = require("chai");
const except = chai.except;
const calculateNumber = require('./2-calcul_chai.js');

describe("calculateNumber", function() {
    it("should round the numbers and return their sum", function() {
        except(calculateNumber("SUM",1.2, 3.7)).to.equal(5);
    });
    it("should round the numbers and return their difference", function() {
        except(calculateNumber("SUBTRACT", 7.2, 3.2)).to.equal(4);
    });
    it("should round the numbers and return their Division", function() {
        except(calculateNumber("DIVIDE", 6.2, 3.3, )).to.equal(2);
        except(calculateNumber("DIVIDE", 6.2, 0.1)).to.equal("Error");

    });
});
