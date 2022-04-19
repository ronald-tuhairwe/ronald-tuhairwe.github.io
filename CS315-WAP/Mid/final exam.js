/*eslint-disable-*/
"use strict";

function TreeNode(value) {
  this.value = value;

  this.descendents = [];
}

const flowers = new TreeNode("flowers");

const subtropicalFlowers = new TreeNode("subtropicalFlowers");

const temperateFlowers = new TreeNode("temperateFlowers");

const bouganvillea = new TreeNode("bougainvillea");

const roses = new TreeNode("roses");

const daffodils = new TreeNode("daffodils");

// associate root with is descendents

flowers.descendents.push(subtropicalFlowers);

flowers.descendents.push(temperateFlowers);

subtropicalFlowers.descendents.push(bouganvillea);

temperateFlowers.descendents.push(roses);

temperateFlowers.descendents.push(daffodils);

/*********************************************Qn one****************************************** */

function flatternTree(obj) {
  let arr = [];

  arr.push({ name: obj.value, children: obj.descendents.length });
  if (obj.descendents != null) {
    for (let child of obj.descendents) {
      arr = arr.concat(flatternTree(child));
    }
  }
  return arr;
}

console.log("********Ans 1******");
console.log(flatternTree(flowers));

/*************part ii***************** */

function countLeaves(plant) {
  let count = 1;

  for (let child of plant.descendents) {
    if (plant.descendents.length > 0) {
      count++;
    } else count += countLeaves(child);
  }

  return count;
}
console.log("********Ans 1.ii******");
console.log(countLeaves(flowers));

/*********************************************Qn two****************************************** */
let json2 = { a: 1, b: { c: 2 }, d: [1, 2] };
let json = {
  glossary: {
    title: "example glossary",
    GlossSeeAlso: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
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

function reverseJson(obj) {
  let obj2 = {};
  for (let key in obj) {
    if (typeof obj[key] != "object") {
      Object.assign(obj2, { [obj[key]]: key });
    } else if (Array.isArray(obj[key])) {
      Object.assign(obj2, { [obj[key].join("")]: key });
    } else {
      Object.assign(obj2, { [key]: "object" });
      Object.assign(obj2, reverseJson(obj[key]));
    }
  }

  return obj2;
}

console.log("********Ans 2******");
console.log(reverseJson(json));

/*************extra credit***************** */

function countLeaves1(obj) {
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] !== "object" || Array.isArray(obj[key])) {
      count++;
    } else count += countLeaves1(obj[key]);
  }
  return count;
}

console.log("********Ans 2.ii******");
console.log(countLeaves1(json));
