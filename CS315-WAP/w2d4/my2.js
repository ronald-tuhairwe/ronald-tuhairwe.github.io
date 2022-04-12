/* eslint-disable*/

// Qn.1*
let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null,
};
let node4 = {
  name: "label",
  value: "Name",
  children: null,
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null,
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5],
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
};

// using recursion........

function Node(node) {
  if (node.children == null) {
    console.log(node.name + ":" + node.value);
  } else {
    console.log(node.name + ":" + node.value);

    for (let x of node.children) {
      Node(x); //recursion
    }
  }
}
//Node(node1);

// using iteration ......

function printNode(node) {
  if (Array.isArray(node.children)) {
    console.log(node.name + ":" + node.value);

    for (let child of node.children) {
      if (Array.isArray(child.children)) {
        console.log(child.name + ":" + child.value);
        for (let child2 of child.children) {
          console.log(child2.name + ":" + child2.value);
        }
      } else console.log(child.name + ":" + child.value);
    }
  } else {
    console.log(node.name + ":" + node.value);
  }
}

//printNode(node1);

// Qn.2

function Node(node) {
  if (Array.isArray(node.children)) {
    for (let x of node.children) {
      return node.name + ":" + node.value + "\n" + Node(x); //recursion
    }
    // return (node.name + ":" + node.value);
  } else {
    return node.name + ":" + node.value;
  }
}
//console.log(Node(node1));

// using iteration ......

function printNode(node) {
  if (Array.isArray(node.children)) {
    console.log(node.name + ":" + node.value);

    for (let child of node.children) {
      if (Array.isArray(child.children)) {
        console.log(child.name + ":" + child.value);
        for (let child2 of child.children) {
          console.log(child2.name + ":" + child2.value);
        }
      } else console.log(child.name + ":" + child.value);
    }
  } else {
    console.log(node.name + ":" + node.value);
  }
}

//console.log(printNode(node1));

//part iii

// create nodes with values

function TreeNode(value) {
  this.value = value;
  this.descendents = [];
}

const abe = new TreeNode("Abe");
const homer = new TreeNode("Homer");
const bart = new TreeNode("Bart");
const lisa = new TreeNode("Lisa");
const maggie = new TreeNode("Maggie");
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

// Qn1....

function printNam(node) {
  if (node.descendents.length==0) {
    console.log(node.value);
  } else {
    console.log(node.value);
    for (let child of node.descendents) {
     
      printNam(child);
    }
  }
}

//printNam(abe);

//QN2

function ntarget(tree,tar){

if(tree.value === tar){
   return true;
}
 if(tree.descendents !==[]){
  for(let x of tree.descendents){
    if(ntarget(x,tar)) { 
    return true;}
}  
 
}
return false;
}

console.log(ntarget(abe,"Lisa"));