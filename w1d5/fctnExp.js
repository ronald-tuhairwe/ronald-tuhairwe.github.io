"use strict";


module.exports = { double, times100, myMap }

//******************Qn.1*************/

/**
 * it doubles the number
 * @param {int} num the first number; 
 * @returns { int } The doiubled number;
 */
 function double ( num) {
   return 2*num;
 }
 double(8);
 console.log(double(8));



 //******************Qn.2*************/

 //let times100 =( num) => 100*num;

 
/**
 * Multiply 100 the number
 * @param {int} num the first number; 
 * @returns { int } The number by 100;
 */
 function times100 ( num) {
  return 100*num;
}

 times100();
 


 
 //******************Qn.3*************/


 //let myMap = (arr, func) => arr.map(func);

/**
 * Maps the array by function 
 * @param {array} arr the first array. 
 * @param {function} fun the operation function.
 * @returns {arry} Array with effect of functuion. 
 */
 function myMap ( arr, fun) {

  return (arr.map(fun));
}

 


 //******************Qn.4*************/

 // As annonimous function
 //myMap2(testArray, function(num){ return 3*num;})
      

 // using arrow Expression;

//       myMap( arr, () =>( arr.map ( num => 3*num) ) ); 