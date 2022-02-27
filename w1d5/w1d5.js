"use strict";
///* eslint-disable */

module.exports = { double, times100, myMap }

//******************Qn.1*************/

 let double = ( num) => 2*num;
 console.log(double(8));



 //******************Qn.2*************/

 let times100 =( num) => 100*num;
 console.log(times100(3));


 
 //******************Qn.3*************/

 let val =[1,2,3];
 let myMap = (arr, func) => arr.map(func);

 console.log(myMap(val,times100));


 //******************Qn.4*************/

 // As annonimous function;

 let arr=[1,2,3];
    myMap(arr,
      function( arr){ arr.map( num => 3*num)}
      );

      // using arrow Expression;

      myMap( arr, () =>( arr.map ( num => 3*num) ) ); 