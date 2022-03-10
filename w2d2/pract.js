 "use strict";
 /* eslint-disable*/
 const player1 = {name: "Bob", points: [1, 2, 1],age:20};
 const player2 = {name: "Andre", points: [2, 0, 1],age:25};
 const player3 = {name: "Max", points: [1, 1, 1],age:190};
 const players = [player1, player2, player3];
 
  let arra =[5,8,2,9,1];
  console.log( arra.sort((a,b) => b-a));
 function maxPoints ( players){

let arr2=players.map(x =>  x.points.reduce( (a,b) => a+b),0);
    console.log(arr2);
 return Math.max(...arr2)
 
 }

 console.log("************max****");
  let max= players.find(num => num.age=== players.reduce((a,b) => Math.max(a,b.age),0));


 console.log(max);


 function foo(){console.log(this);} 
 const bob ={ log:function(){ console.log("rrrr"); } };

  console.log(this);// this is window in browser ({} in node**) 
 foo();//foo() is called by window object (global in node)
  bob.log();//log() is 

  console.log("************max****");
   const x = {a:1, b:2, add: function(){console.log (this.a+ this.b);} }
     //3 
     ;
console.log(x.add()); 











