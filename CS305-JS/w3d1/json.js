"use strict";
/* eslint-disable*/


 const arr1= [1,2,3,4,5,6,7];

function multiplyEven (arr){
 let max=arr.filter( num => num % 2===0).reduce( (a,b) => a*b,1);
 return max;
}


console.log(multiplyEven(arr1));
 
