/* eslint-disable*/

/*********************************  Node *************************************** */

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
}

//    node1 - root -> node2, node3
//    node3 
//    node2 -> node4, node5

function printNames(node1) {
    console.log(node1.name + ":" + node1.value);
    if (node1.children && node1.children.length > 0) {
        //console.log("Inside IF ", node1.name);
        node1.children.forEach(function (child) {
            //console.log(`Inside forEach parent ${node1.name}  child ${child.name}`)
            printNames(child);
        })
    }
}
// printNames(node1)


/*********************************  Tree *************************************** */

function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function contains(tree, name) {
    if (tree.value === name)
        return true;
    if (tree.descendents && tree.descendents.length > 0) {
        for (let item of tree.descendents) {
            if (contains(item, name))
                return true;
        }
    }
    return false;
}

//console.log( contains(abe,"Lisa"));
function getMatchingTree(tree, name) {
    if (tree.value === name) {
        return tree;
    }
    if (tree.descendents && tree.descendents.length > 0) {
        for (let item of tree.descendents) {
            let matchingNode = getMatchingTree(item, name);
            if (matchingNode) {
                return matchingNode;
            }
        }
    }
    return null;
}
//console.log("getMatchingTree ",getMatchingTree(abe,"Lisa"));
// Create a new constructor function ListNode (based on TreeNode below) and use it to generate a 
// linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.

function ListNode(value, next) {
    this.value = value;
    this.next = next;
}

let maggieNode = new ListNode("Maggie", null);
let lisaNode = new ListNode("Lisa", maggieNode);
let bartNode = new ListNode("Bart", lisaNode);
let homerNode = new ListNode("Homer", bartNode);
let abeNode = new ListNode("Abe", homerNode);

function findListNode(list,name){
    if (list.value === name) {
        return list;
    }
    if (list.next) {
        let matchingNode = findListNode(list.next, name);
        if (matchingNode) {
            return matchingNode;
        }
    }
    return null;
}
console.log(findListNode(abeNode,"dff"));

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


/*********************************  LINKED LIST *************************************** */


// previousMin >currentValue ? currentValue:previousMin;
function findMinRecursion(array) {
    if (array.length == 1)
        return array[0];
    let current = array.shift();
    let previousMin = findMinRecursion(array);
    return current > previousMin ? current : previousMin;
}


function arraySumRecursion(array) {
    if (array.length == 0)
        return 0;
    // return array.pop()+arraySumRecursion(array);
    console.log(" array", array)
    let current = array.shift();
    return current + arraySumRecursion(array);
}


/*********************************** Salary object***************************************** */
let company = {
    sales: [{ name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 },
        { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }],
        myDept: { subDep: [{ name: 'subDep', salary: 500 }] }
    }
}



function sumTotal(company) {
    let totalSalary = 0;
    for (let key in company) {
        console.log(key, company[key]);
        let obj = company[key]
        if (Array.isArray(obj)) {
            totalSalary += obj.reduce((sum, current) =>
                sum + current.salary, 0);
            console.log("first for loop", totalSalary)
        }
        else {
            totalSalary += sumTotal(company[key]);
        }
    }
    return totalSalary;
}


//function call execution context           recursive call return

//sumTotal(company.development)  totalSarlay = 5100         5100
//sumTotal(company) company, totalSarlay = 1600+ sumTotal(company.development)  

function allEmployeeNames(company) {
    let employees = [];
    // if (!company)
    //     return employees;

    for (let key in company) {
        if (Array.isArray(company[key])) {
            employees = employees.concat(company[key].map(item => item.name));
        }
        else {
            employees = employees.concat(allEmployeeNames(company[key]));
        }
    }
    return employees;
}

console.log( "this is mine  ", allEmployeeNames(company))


/********************************************Linked list********************************************** */


function TreeNode(value) {
    this.value = value;
    this.descendents = [];
    }
   // create nodes with values
//    const abe = new TreeNode('Abe');
//    const homer = new TreeNode('Homer');
//    const bart = new TreeNode('Bart');
//    const lisa = new TreeNode('Lisa');
//    const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);

   function ListNode(value){
        this.value = value;
   }

   function generateList(root){
        if(root.descendents==null || root.descendents.length==0)
            return new ListNode(root.value);
        let linkedList = new ListNode(root.value);//{value:"abe"} //2nd {value:"homer"}
        let list=linkedList;// homer.next = maggie
        for(let eachChild of root.descendents){//{Homer}, {lisa},{bart}
            
            list.next = generateList(eachChild);
            list = list.next;
            // linkedList.next = generateList(eachChild);
        }
        return linkedList;
   }

  console.log( '*********',(generateList(abe)))

  // let linkedList = generateList(abe);
// let linkedList = {value:1,next:{value:2,next:{value:3,next:{value:4}}}}
  function traverse(list){
      if(list==null )
        return;
    
      console.log("here ",list.value);
      list = list.next;
      return traverse(list);
      
  }

  // traverse(linkedList)