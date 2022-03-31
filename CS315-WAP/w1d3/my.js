/* eslint-disable*/

let word= document.getElementById("ron");

console.log(word);
let word2= document.getElementById("textarea")
console.log(word2);

function app(){
 word2.append(word.value+ "\n");
 word.value="";
    
}


let a= document.getElementById("a");
let b= document.getElementById("b");
let res= document.getElementById("result");
 sum=()=>res.innerText=(+a.value + +b.value);
 minus=()=>res.innerText=(+a.value - +b.value);
 mult=()=>res.innerText=(+a.value * +b.value);
