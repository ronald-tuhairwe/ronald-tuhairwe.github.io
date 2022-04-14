/* eslint-disable*/

/*****************Qn 1********************************* */
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

/*****************Qn 2********************************* */

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

/*****************Qn 1********************************* */

function printNam(node) {
  if (node.descendents.length == 0) {
    console.log(node.value);
  } else {
    console.log(node.value);
    for (let child of node.descendents) {
      printNam(child);
    }
  }
}

//printNam(abe);

/*****************Qn 2********************************* */

function contains(tree, target) {
  if (tree.name == target) {
    return true;
  } else if (Array.isArray(tree.children)) {
    for (let element of tree.children) {
      return contains(element, target);
    }
  } else {
    return false;
  }
}
//console.log(contains(Abe,fffr));

/*****************Qn 3********************************* */
function containingTree(tree, target) {
  if (tree.name == target) {
    return tree;
  } else if (Array.isArray(tree.children)) {
    let newTree = null;
    for (let element of tree.children) {
      if (containingTree(element, target)) {
        newTree = containingTree(element, target);
      }
    }
    return newTree;
  }
}
// console.log(containingTree(Abe, "Lisa"));

/*****************Qn 4********************************* */

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

let maggieNode = new ListNode("Maggie", null);
let lisaNode = new ListNode("Lisa", maggieNode);
let bartNode = new ListNode("Bart", lisaNode);
let homerNode = new ListNode("Homer", bartNode);
let abeNode = new ListNode("Abe", homerNode);

/*****************Qn 5********************************* */

function findListNode(list, name) {
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
//console.log(findListNode(abeNode,"ronnieee"));

/*****************Qn 6********************************* */

function treeModifier(tree, modifierFunc) {
  if (tree.children == null) {
    modifierFunc(tree);
  } else {
    modifierFunc(tree);
    for (let element of tree.children) {
      treeModifier(element, modifierFunc);
    }
  }
  return tree;
}

function allCaps(node) {
  node.name = node.name.toUpperCase();
  return node;
}
function addStars(node) {
  node.name = "***" + node.name + "***";
  return node;
}
function reverseNode(node) {
  let newName = [];
  let arrayName = node.name.split("");
  for (let element of arrayName) {
    newName.unshift(element);
  }
  node.name = newName.join("");
  return node;
}

// console.log(treeModifier(Abe, reverseNode))

/*****************Qn 7********************************* */

let valuesArr = [];
function treeCollector(tree) {
  if (Array.isArray(tree.children)) {
    valuesArr.push(tree.name);
    for (let element of tree.children) {
      treeCollector(element);
    }
  } else {
    valuesArr.push(tree.name);
  }
  return valuesArr;
}
//console.log(treeCollector(Abe));

function ListNode(value) {
  this.name = value;
}

function generateList(root) {
  if (root.children == null || root.children.length == 0)
    return new ListNode(root.name);
  let linkedList = new ListNode(root.name);
  let list = linkedList;
  for (let eachChild of root.children) {
    list.next = generateList(eachChild);
    list = list.next;
  }
  return linkedList;
}

console.log(JSON.stringify(generateList(Abe)));
