//qn.1
function comm(x,s){
if(s=="y"){ 
   let com= x<300 ? 0:x<500? x*0.01:x*0.02;
   return com;
}else{
    let com= x<300 ? 0:x<500? x*0.02:x*0.03;
    return com;   
}
    
}

console.log(comm(600,"n"));

//qn.2
const prompt= require("prompt-sync")();
 let num ="";
    while(num<18){
        num= prompt("what is your age: ");
    }


//qn3.


//qn.4(i)
function num1(){
    let str="";
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j <6; j++) {
           str+=j;
        }
        str+= "\n";
    }
  console.log(str)
}
num1();

qn.4(ii)
function num2(){
    let str="";
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j <=i; j++) {
           str+=i;
        }
        str+= "\n";
    }
  console.log(str)
}
num2();

//qn.4(iii)
function num3(){
    let str="";
    for (let i = 5; i >0; i--) {
        for (let j=1; j<=i; j++) {
           str+=i;
        }
        str+= "\n";
    }
  console.log(str)
}
num3();

//Qn.5;
 let x= prompt("what is your cost");

        let com= x<50000 ? 0.05*x : x<100000? 1000 + 0.1* (x - 50000): x<200000? 2000 +
         0.15* (x - 100000) : 5000 + 0.1* (x - 200000);
        console.log(com);

//QN.6

function sum(){
    let str= prompt("enter integers");
    let sum=0;
    for (let i = 0; i < str.length; i++) {
        sum+=parseInt(str[i]); 
    }
    console.log(sum); 
}
sum();

function cpd(){
    let a= prompt("amount");
    let r= prompt("interest");
    let n= prompt("No. years");
   console.log (a*(Math.pow((1+(r/12)),12*n)));
}
cpd();
