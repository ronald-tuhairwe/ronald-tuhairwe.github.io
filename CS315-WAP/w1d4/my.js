/* eslint-disable*/

/** ********** Inventory ************ */
let myArray=[];
let prodname=document.getElementById("name");
let category=document.getElementById("category");
let qty= document.getElementById("quantity");
let rate= document.getElementById("rate")
let tabl=document.querySelector("table");


function add(){

   let empty=prodname.value ==="" || category.value ==="" || qty.value ==="" || rate.value==="";

    if(isNaN(+qty.value)){ 
       
        alert("quantity must be a number!!");
        qty.style.background="red";
    }else if(empty){ 
        alert("No field should be empty !!!");  
    }else{

    let tr= document.createElement("tr");

    let bb=document.createAttribute("button")
    tabl.append(tr);

    tr.innerHTML=" <td> " + prodname.value + "</td> <td> "+ category.value + "</td> <td> "+
      qty.value + "</td> <td> "+  rate.value + "</td> <td> <button  "+"onclick= "+"edit(this)"+
      " "+"   >"+"Edit"+"</button></td> <td><button  "+"onclick= "+"remove(this)"+" "+"    >"+"Remove"+"</button></td>"
//Creating the object
   
let obj={name:prodname.value, category:category.value, qty:qty.value,rate:rate.value }
console.log(obj);
myArray.push(obj);

 
    prodname.value = "";
    category.value="";
    qty.value="";
    rate.value="";
    qty.style.background="";


}
}   
    
console.log(myArray);

function edit(obj){

   let row=obj.parentNode.parentNode.children;

   prodname.value = row[0].innerText
   category.value = row[1].innerText
   qty.value = row[2].innerText
   rate.value = row[3].innerText  

remove(obj);
}

let save= document.getElementById("save")
save.addEventListener("click", add);

function remove(obj){
 
    let row= obj.parentNode.parentNode;
  
    row.remove();
    let rowindex= obj.parentNode.parentNode.rowIndex;
    myArray.splice(rowindex, 1)
    console.log(myArray)
    }

// The selection part.

let filter= document.getElementById("filter");
let sort= document.getElementById("sort");
console.log(filter);
filter.onchange =filt;

function filt(){
let myArray1=myArray.filter(item => (item.qty>100 ))
console.log(myArray1);
}

  

