 "use strict";

 /* eslint-disable*/;

  const person ={age: 34, name: "ronnie", type: "black"};
 console.log(Object.values(person));
 console.log(Object.entries(person));

 for (const x in person) {
     
    console.log(person);     
     
 }

 const arr = ["b","a", "C"];

arr.sort();

console.log(arr);