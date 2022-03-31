/* eslint-disable*/

/** ********** Output ************ */

let word= document.getElementById("ron");

console.log(word);
let word2= document.getElementById("textarea")
console.log(word2);

function app(){
 word2.append(word.value+ "\n");
 word.value="";
    
}

/** ********** Calculator ************ */
let a= document.getElementById("a");
let b= document.getElementById("b");
let res= document.getElementById("result");
 sum=()=>res.innerText=(+a.value + +b.value);
 minus=()=>res.innerText=(+a.value - +b.value);
 mult=()=>res.innerText=(+a.value * +b.value);


 
/** ********** Inventory ************ */

let prodname=document.getElementById("name");
let category=document.getElementById("category");
let qty= document.getElementById("quantity");
let tabl=document.querySelector("table");
console.log(Table);

function add(){

    let tr= document.createElement("tr");
    tabl.append(tr);
     
    tr.innerHTML=" <td> " + prodname.value + "</td> <td> "+ category.value + "</td> <td> "+  qty.value + "</td>"

    prodname.value = "";
    category.value="";
    qty.value="";

}


