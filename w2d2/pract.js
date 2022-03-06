 "use strict";
 /* eslint-disable*/
 const player1 = {name: "Bob", points: [1, 2, 1]};
 const player2 = {name: "Andre", points: [2, 0, 1]};
 const player3 = {name: "Max", points: [1, 1, 1]};
 const players = [player1, player2, player3];
 
  let arra =[5,8,2,9,1];
  console.log( arra.sort((a,b) => b-a));
 function maxPoints ( players){

let arr2=players.map(x =>  x.points.reduce( (a,b) => a+b),0);
    console.log(arr2);
 return Math.max(...arr2)
 
 }

 console.log("expect 4:",  maxPoints(players));

