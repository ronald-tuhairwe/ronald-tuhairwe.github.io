"use strict"

/* eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {

let arr1= arr.filter((num) => (num>= a && num<= b));
return arr1;
  }

 
  function filterRangeInPlace(arr, a, b) {
    
    for (let i = 0 ; i<arr.length; i++) {
      if(!(arr[i] >= a && arr[i] <= b)){
        arr.splice(i, 1);
      }
      
    }
  }

  

  function Calculator( ) {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
   
   this.calculate = function (str){
     let arr =  str.split(" ");
     return +arr[0]+ + +arr[2];
   }
   this.addMethod = function(name, func) {
    this.methods[name] = func;
  
  };
  }
  
  

  function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);

  }



  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
        
       
      }


      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);

      }



  // testting console.......

  let arr = [5, 3,8,3,9, 8,9, 1];
  let calculator = new Calculator();

 

  console.log(unique(arr));