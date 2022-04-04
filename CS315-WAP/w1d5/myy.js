/*eslint-disable*/

let myArray=[ {name:"ronnie",age:20},{name:"aonnie",age:10}];
let name=document.getElementsByTagName("input")[0];
let category=document.getElementsByTagName("input")[1];
let qty=document.getElementsByTagName("input")[2];
let rate=document.getElementsByTagName("input")[3];
let table= document.getElementsByTagName("table")[0];
let nrow= document.createElement("tr");

function add(){
let nrow= document.createElement("tr");
   if(isNaN(qty.value)){
       alert("qty should be a numerical!!!")
       qty.style.backgroundColor="red";
   }else if(name.value==="" ||category.value==="" ||qty.value==="" ||rate.value===""){
       alert("all fields should be filled");

   }else{
   nrow.innerHTML="<td>"+ name.value+ "</td> <td>"+category.value + "</td> <td>"+rate.value + "</td> <td>"+
    qty.value+ "</td><td><button onclick='edit(this)'>"+ "Edit"+"</button></td><td><button onclick='remove(this)'>"+ "Remove"+"</button></td>";
    table.append(nrow);

    // creating the object

    let obj={name:name.value, category:category.value, rate:rate.value, qty:qty.value };
    myArray.push(obj);
    name.value="";
    category.value="";
    qty.value="";
    rate.value="";
    qty.style.backgroundColor="";
}

}

let btn= document.getElementById("add")
btn.onclick=add;

// Remove method
function remove(obj){
    let li= obj.parentElement.parentElement;

    li .remove();
    let index=li.rowIndex;
    myArray=myArray.splice(index,1);
    console.log(myArray);
    
}

// Editing
function edit(obj){
    const li=obj.parentElement.parentElement.children;
    name.value=li[0].innerHTML;
    category.value=li[1].innerHTML;
    rate.value=li[2].innerHTML
    qty.value=li[3].innerHTML;

    remove(obj);

}

// saving btn

function save(){
    add();
}

// the sorting method;
function sorted(){
 
    let opt=document.getElementById("opt1") 
if(opt.selected && opt.value=="Quantity"){

    let sor=myArray.sort((a,b) =>(a.qty- b.qty));
  

    
    createTable(sor);
     
    
}else {
    let sor=myArray.sort((a,b) =>(a.name> b.name? 1:-1))
    createTable(sor);
        }


}

// creation of the table

function createTable(arr){
    let nrow= document.createElement("tr");
    let table= document.getElementsByTagName("table")[0];
    //set the inner data empty
    table.innerHTML=""
arr.forEach(function(item){
    nrow.innerHTML="<td>"+ item.name+ "</td> <td>"+item.category + "</td> <td>"+item.rate + "</td> <td>"+
    item.qty+ "</td><td><button onclick='edit(this)'>"+ "Edit"+"</button></td><td><button onclick='remove(this)'>"+ "Remove"+"</button></td>";
    table.append(nrow);
});

    
   
}
            



