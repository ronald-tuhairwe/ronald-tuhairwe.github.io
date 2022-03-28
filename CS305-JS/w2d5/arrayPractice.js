"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests



function doubleNums(arr){
return arr.map( num => num*2);
}

function doubleAges(arr){
    return  arr.map( item => { 

        const newr= {};
        newr.name= item.name;
        newr.age= item.age*2;
        return newr;
    });

}




//************** filter******************/

function filterEven(arr){

return  arr.filter(num =>  num % 2 ===0);
}

function filterOver10(arr) {

    return arr.filter( num => num.age>10);
}


//************** reduce**************** */
function findEvenNum(arr){

return arr.find(num =>  num % 2 ===0);
}

function findEvenAge(arr){

return arr.find( num => num.age % 2===0);
}

function includesEvenNum(arr){

    return findEvenNum(arr)
}

function includesEvenAge(arr){

    return findEvenAge(arr)
}

//************** chain**************** */

// const avAgeEn = peop.filter((num )=> num.age % 2 ===0).reduce((a,b) => (a + b.age),0);
// const nnn= numArray.filter((num )=> num% 2 ===0).reduce((a,b) => a + b);

// const avAgeodd = peopleArray.filter(num => num.age % 2 !==0).reduce((a,b) => (a + b.age),0);

// const sum = numArray.reduce( (a,b) => a+b);
// const average = numArray.reduce( (a,b) => (a+b)) / numArray.length;
// const max = numArray.reduce( (a,b) => Math.max(a, b));

// const maxAge = peopleArray.map(num => num.age).reduce((a,b) => Math.max(a,b));
