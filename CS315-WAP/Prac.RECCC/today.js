/*eslint-disable*/
"use strict";
let json = {
  glossary: {
    title: "example glossary",
    GlossSeeAlso: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          SortAs: "SGML",
          GlossSeeAlso: "Standard Generalized Markup Language",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para: "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML", "S"],
          },
          GlossSee: "markup",
        },
      },
    },
  },
};

function count1(obj) {
  let c = 0;
  c += Object.keys(obj).length;
  for (let value of Object.values(obj)) {
    if (typeof value === "object" && !Array.isArray(value)) c += count1(value);
  }
  return c;
}

//console.log(count1(simpleObject));
let simpleObject = { a: 1, b: 2, c: { a: [1, 2] } };
function leafNodes(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] !== "object" || Array.isArray(obj[key])) {
      arr.push({ [key]: obj[key] });
    } else arr = arr.concat(leafNodes(obj[key]));
  }
  return arr;
}

//console.log(leafNodes(simpleObject));

//let simpleObject2 = { a: 1, b: 2, c: { a: [1, 2] } };
function keyGiv(obj, val) {
  let match = [];

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      if (obj[key].includes(val)) match.push(key);
    } else if (typeof obj[key] != "object") {
      if (obj[key] === val) match.push(key);
    } else match = match.concat(keyGiv(obj[key], val));
  }
  return match;
}

//console.log(keyGiv(simpleObject2, 1));

function valGiv(obj, pt) {
  let arr = [];

  for (let key in obj) {
    if (typeof obj[key] !== "object" || Array.isArray(obj[key])) {
      if (key === pt) arr.push(obj[key]);
    } else arr = arr.concat(valGiv(obj[key], pt));
  }
  return arr;
}

//console.log(valGiv(simpleObject2,'a'));

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
    myDept: { subDep: [{ name: "subDep", salary: 500 }] },
  },
};

function printNames(obj) {
  let arr = [];

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      arr = arr.concat(obj[key].map((item) => item.name));
    } else arr = arr.concat(printNames(obj[key]));
  }
  return arr;
}

//console.log(printNames(company));

let arr = [8, 2, 58, 9, 4];

//console.log(findMin(arr));

let company1 = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],

  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ], //subdepartments
    internals: [{ name: "Jack", salary: 1300 }],
  },
};
 
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

console.log(genl(abe))