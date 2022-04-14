/*eslint-disable*/

//Qn1
let simpleObject = {a:1, b:2,c:{a:[1,2]}}

function countKeys(obj) {
    let c = 0;
    for (let key of Object.keys(obj)) {
      if (typeof obj[key] === "object") {
        if (Array.isArray(obj[key])) {
          continue;
        } else c += countKeys(key);
      }
      c++;
    }
    return c;
  }

console.log(countKeys(simpleObject));