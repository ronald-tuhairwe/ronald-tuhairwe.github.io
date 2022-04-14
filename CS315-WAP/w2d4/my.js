/* eslint-disable*/

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
  },
};

// the one for fiinding names in object
function totNames(obj) {
  let tot = [];

  for (let prop of Object.values(obj)) {
    if (Array.isArray(prop)) {
      tot = tot.concat(prop.map((a) => a.name));
    } else {
      tot = tot.concat(totNames(prop));
    }
  }
  return tot;
}

console.log("***********names**********");
console.log();
console.log(totNames(company));

// to return the keys of all objects
function totkeys(obj) {
  let tot = [];

  for (let [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      tot.push(key);
    } else {
      tot.push(key);
      tot = tot.concat(totkeys(value));
    }
  }
  return tot;
}

console.log();
console.log("***********keys**********");
console.log();
console.log(totkeys(company));

// linkedd list in counting the number of node
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = { value: 6 };

function numNodes(list1) {
  if (list1 == null) {
    return 0;
  } else return 1 + numNodes(list1.next);
}

console.log(numNodes(list));

// creating the array froom the list

function Array4li(list1) {
  let arr = [];
  while (list1 != null) {
    arr.push(list1.value);
    list1 = list1.next;
  }
  return arr;
}

console.log(Array4li(list));
