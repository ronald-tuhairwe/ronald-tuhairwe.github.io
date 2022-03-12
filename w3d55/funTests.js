"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {array} arr the array
 * @param {functn} func the function
 * @returns {array} An array
 */
function myMap(arr, func){
let  newarr =[];
for(let elements of arr){
    newarr.push(func(elements));
}

return newarr;
}

/**
 * 
 * @param {array} arr the array
 * @param {functn} func the function
 * @returns {array} An array
 */
function myFilter(arr, func) {
 let val=[];
 for(let arrs of arr){

func(arrs)==true? val.push(arrs) : 0;

 }
 return val;
}

/**
 * 
 * @param {array} arr the array 
 * @param {funct} func the function; 
 * @param {int} initialValue the initial value
 * @returns {int} the accumulated value
 */
function myReduce(arr, func, initialValue) {
    
for( let arrs of arr){
    initialValue= func(initialValue,arrs);
}

    return initialValue ;
    }

    let arr= [1,2,3,4];

    let even= function (number) { return (number % 2 === 0);};
    console.log(myFilter(arr,even));