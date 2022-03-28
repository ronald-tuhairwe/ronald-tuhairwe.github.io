/* eslint-disable*/;
"use strict"
module.exports = { isVowel, computeSalesCommission, cpd };

console.log(isVowel("I"));

function isVowel(vow1){
   let vow = vow1.toLowerCase();
    if(vow=="a" || vow=="e" || vow=="i" || vow=="o" || vow=="u" ){
        return true;
    }
return false;
}

// Qn.2**********

function computeSalesCommission(bln, x){
    if(bln==true){
       let com= x<300 ? 0:x<500? x*0.01:(x-500)*0.02+0.01*500;
       return com;
    }else{
        let com= x<300 ? 0:x<500? x*0.02:(x-500)*0.03+0.02*500;
        return com;
    }
    }

//console.log(comm(3500,true));

//**********Qn3********* */

//const prompt= require("prompt-sync")();
function cpd(a, r, n){
    // let a= +prompt("amount");
    // let r= +prompt("interest");
    // let n= +prompt("No. years");
   return (a*(Math.pow((1+((r/100)/12)),(12*n))));
}
//console.log(cpd());
//