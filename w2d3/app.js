"use strict";
///* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate ,checkSpam,extractCurrencyValue, camelize, }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {string} str the string taken 
 * @returns {string} The striing with capital letter;
 */
function ucFirst(str) {

let  finstr = str.charAt(0).toUpperCase()+str.slice(1);
 return finstr;
  }

/**
 * 
 * @param {string} str The taken string.
 * @returns  {string} The boolean ans.
 */
  function checkSpam(str) {
 let str1 = str.toLowerCase();
if(str1.includes("viagra") || str1.includes("xxx") ){
  return true;
}else
 return false;

  }

/**
 * 
 * @param {string } str The string taken. 
 * @returns  {number} The final number.
 */
  function extractCurrencyValue( str ){
let str1 = +str.slice(1);
return str1;

  }

/**
 * 
 * @param {string} str The taken string;
 * @param  {num} maxlength The length.
 * @returns{string} Truncated string. 
 */
  function truncate(str, maxlength) {
    if(str.length > maxlength){
      return str.slice(0,maxlength-1) + "…"; 
    }else
    return str;

  }




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;

}

/**
 * 
 * @param {string} str The string taken.
 * @returns  {string} sThe camelized string. 
 */
function camelize(str) {
  
  
  let arr = str.split("-");
  
  let arr1 = arr.map((val) =>(val.charAt(0).toUpperCase() + val.slice(1)));
   let arstr = arr1.join("");
 
   let final = arstr.charAt(0).toLowerCase() ===str.charAt(0)? arstr.charAt(0).toLowerCase() + arstr.slice(1) :arstr;
   return final;
  }

  // testing console.

console.log(camelize("list-style-image"));
