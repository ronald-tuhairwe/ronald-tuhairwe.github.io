/* eslint-disable*/

//QN...obj={ John: 1000, Alice: 600, Peter: 2000, Alex: 1800, Jack: 1300 }

function nameSalary(obj) {
    let arr = [];
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        for (let x of obj[key]) {
          arr.push({ [Object.values(x)[0]]: Object.values(x)[1] });
        }
      } else arr = arr.concat(nameSalary(obj[key]));
    }
    return arr;
  }
  
  console.log(nameSalary(company1));


  //generating the list

  function listNode(value){
    this.value=value;
  }
  
  function genl(root){
   
  let linked= new listNode(root.value);
  let list=linked;
  
  if(root.descendents !=null){
    for(let child of root.descendents){
      list.next=genl(child);
      list=list.next;
    }
  }
  
  return linked;
  
  }

  // genertaing list and find anything in list

  function generateList(root){
    let linkedList = new ListNode(root.value);//{value:"abe"} //2nd {value:"homer"}
    let list=linkedList;// homer.next = maggie
    for(let eachChild of root.descendents){//{Homer}, {lisa},{bart}
        
        list.next = generateList(eachChild);
        list = list.next;
        
        // linkedList.next = generateList(eachChild);
    }
    return linkedList;
}

let linkedList = generateList(abe);
// console.log(linkedList);

//5
function findListNode(list,node){
    if(list==null)
        return null;
    if(list.value==node)
        return list;
    return findListNode(list.next,node);
}

console.log(linkedList)   //....*************


///// Tree modifier

function treeModifier(root,modifierFunc){
    root.value = modifierFunc(root.value);
    for(let child of root.descendents){
        treeModifier(child,modifierFunc);
    }
}

let allcap= (item)=> item.toUpperCase();


// inserting to the node


function insertNode(list,after,newNode){
    if (list.value === after) {
        list.next =  new ListNode(newNode, list.next);
        return;
    }
    if (list.next) {
       insertNode(list.next, after,newNode);
    }
    return;
}
insertNode(abeNode,"Maggie","Java");
console.log(JSON.stringify(abeNode))