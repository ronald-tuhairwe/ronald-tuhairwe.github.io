/*eslint-disable*/

//Qn1
let simpleObject = {a:1, b:2,c:{a:[1,2]}}


function countKeys(obj){

let count=1;
for(let key in obj){

    if(obj[key] == Object(obj[key])){
        if(Array.isArray(obj[key]))
        continue;
    }else
    {count + countKeys(key);}
    count++
}
return count;
}

console.log(countKeys(simpleObject));