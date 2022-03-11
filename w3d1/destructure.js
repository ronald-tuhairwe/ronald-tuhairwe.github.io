"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
}; 

function topSalary(salaries) {
  let max=0 , name= null;
  // using using entries
  for ( let [key, value] of Object.entries(salaries)){
   if(max < value){
     max = value;
     name = key;
   }
  }
return name;

  }

  // function in json 

function toJason(salary){

 return JSON.stringify(salary);
}


// functi n from json;

function fromJason(salary){
  
  return JSON.parse(salary);
 }
  console.log(topSalary(salaries));
