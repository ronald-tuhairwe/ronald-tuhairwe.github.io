"use strict";
/*eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests



// function copyArray(arr){
//     const arr2= [...arr];
//     return arr2;
//    }
   
//    function concat(arr1, arr2){
//     const arr3 =[...arr1,...arr2];
//    return arr3;
//    }
   
//    function findMin(...numbers) {
//     let min = Math.min(...numbers);
//     return min;
//    }
   
//    function combineObjs(obj1, obj2){
//        let realObjects = {...obj1, ...obj2};
//        return realObjects;

//    }

//    // illustration of rest operator.

//    let [a,b, ...next] = [1,2,4,5,0,6,7];
//   function submin(next){ return Math.min(...next);}
//   console.log ( submin(next)); // min ids 0;

  // illustartion in function call;

  //function submin(next){ return Math.min(...next);};


  // illustration using  setTimeout

  function printNumbers( from,to){

for( let i=from; i< to; i++){

console.log(i);
}

  }

setTimeout( printNumbers,4000, 5,10);

 
