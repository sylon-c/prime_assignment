'use strict';
var chai = require('chai');
var expect = chai.expect;
var findMinMax = require("../app/getPrime")

 (function(){
  'use strict';

  describe("generate prime numbers: ", function() {

      it("should return [2, 3, 5, 7, 11, 13, 17, 19] for (100)", function() {
        expect(getPrime(20)).to.equal([]);
      })
  }