"use strict";
/* eslint-disable */
const assert = require("assert");

const funct=require("./w1d3.js")
const isVowel=funct.isVowel;
const computeSalesCommission = funct.computeSalesCommission;
const cpd=funct.cpd;

describe("isVowel", function () {
  it("a is vowel", function () {
  assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
  assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
  assert.equal(isVowel("I"), true);
  });
  it("o is vowel", function () {
  assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
  assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
  assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
  assert.equal(isVowel("5"), false);
  });
  });


  describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
    });



    describe("computes compound intrest", function(){
     
      it("expect 110.5", function(){
      assert.strictEqual(cpd(100, 10, 1), 110.5);
      });
      it("expect 16470.09", function(){
      assert.strictEqual(cpd(10000, 5, 10), 16470.1);
      });
    
      });