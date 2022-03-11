"use strict"
/* eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {

let check =function( val){
  return arr.includes(val)? true: false;
}
return check;
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {

  return (a) => a>=low && a<=high? true : false;  

}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){



return (a,b) => a[fieldName] > b[fieldName]? 1:-1;
}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
      let j = i;
      let shooter = function() { // shooter function
        console.log(" Shooter of ", j ); // should show its number
        return j;
      };
    shooters.push(shooter);
    i++;
  }

  return shooters;
  }

  let army = makeArmy();
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...





  let arr = [1, 2, 3, 4, 5, 6, 7];
  let count = inArray(arr);
  // console.log(count(40));

  let count2 = inBetween(5,10);
  console.log(count2(80));

  let ageSortedKey = [
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 190, surname: "Hathaway" },
    { name: "John", age: 200, surname: "Johnson"},
  ];

  console.log("**************");
  let count3 = byField("age");//users.sort(byField("age"));

 
   console.log(ageSortedKey.sort(count3));