
"use strict";

module.exports = { maxOfThree, sum, multiply, findLongestWord, reverseArray,
     reverseArrayInPlace, generateArray,scoreExams};
///*****************homework ********** */ 

// ************** Qn.1 *************

/**
 * 
 * @param {int} val1 The frst number;
 * @param {int} val2 The second number;
 * @param {int} val3 the third number;
 * @returns {int} The max value 
 */
function maxOfThree (val1, val2, val3){

return Math.max(val1,val2,val3);
}

maxOfThree(20,56,90);


// ************** Qn.2 *************

/**
 * 
 * @param {arr} arr of numbers; 
 * @returns { int } sum of numbers;
 */
function sum(arr) {

    let sum=0;
    for( const val of arr){ sum +=val;  }

return sum;
}

sum([2,3,6,8]);

/**
 * 
  * @param {arr} arr of numbers; 
 * @returns { int } product of numbers;
 */
function multiply(arr){
    let prod =1;
    for( const val of arr){ prod *=val ; }
return prod;
}

multiply([2,3,6,8]);



// ************** Qn.3 *************

/**
 * 
 * @param {string} arr The array of strings
 * @returns {int} The length of the longest word;
 */
function findLongestWord (arr) {

let max =0;

for( let str of arr){
    if(str.length>max){ max = str.length; }
}
return max;
}

findLongestWord(["Ronnie", "watototot"]);



// ************** Qn.4(i) *************

/**
 * 
 * @param {array} arr The array of numbers; 
 * @returns  {array} arr returns the reversed array;
 */
function reverseArray ( arr ){
    let arr2 = [];

    for (let val of arr) {
        arr2.unshift(val);
    }

    return arr2;
}
reverseArray([1,2,3,4,5]);


// ************** Qn.4(ii) *************

/**
 * 
 * @param {array} arr The array of numbers; 
 * @returns  {array} arr returns the reversed array;
 */
function reverseArrayInPlace( arr ){

   let tempaArr= arr.splice(0);
   
   for (let i =  tempaArr.length-1; i >= 0; i--) {
     arr.push(tempaArr[i]); 
   }

   return arr;
}

reverseArrayInPlace([1,2,3,4,5]);


// ************** Qn.5 *************

/**
 * 
 * @param {array} arr The scores array;
 * @param { arr } arr1 The answer array 
 * @returns { array } The array holding scores;
 */
function scoreExams (arr, arr1){

 const scores=[];
 let count=0;

 for (let i = 0; i < arr.length; i++) {
     count=0;

   for (let j = 0; j < arr[i].length; j++) {
    if(arr[i][j] === arr1[j]){
        count++;} 
   }

   scores.push(count);
 } 

return scores;
}

scoreExams([[1,1,2,4], [2,1,2,2], [3,1,3,4]],[3,1,2,4]);





// ************** Qn.6 *************


/**
 * 
 * @param {int } val1 The firts value; 
 * @param {int } val2 The second value;
 * @returns { array } The array odf arrays;
 * */
function generateArray( val1, val2 ){

    let arr1 =[], arr2 = []; 

    for (let i = 1; i <= val1*val2; i++) {     
    arr1[i]=i;
    }

    for (let j = 1; j <= val1*val2; j+=val2) {
        arr2.push(arr1.slice(j, j+val2));
    }

    return arr2;
}
console.log(generateArray(3,3));
