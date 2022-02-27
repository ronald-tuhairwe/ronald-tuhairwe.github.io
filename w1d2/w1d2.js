"use strict";
/* eslint-disable */
//*************qn.1************
// function comm(x, bln){
//     if(bln==true){ 
//        let com= x<300 ? 0:x<500? x*0.01:(x-500)*0.02+0.01*500;
//        return com;
//     }else{
//         let com= x<300 ? 0:x<500? x*0.02:(x-500)*0.03+0.02*500;
//         return com;   
//     }    
//     }

// console.log(comm(3500,true));

    
    //*************qn.2************

// defining table
/*
     @input            @processing                       @Output;
     Amount           - *1=sum of 1 & r/n
     Rate             -*= product of time & 12            return ** 
     time             -**=product of amount &pow(*1,8)


*/  

   const prompt= require("prompt-sync")();
// function cpd(){
//     let a= +prompt("amount");
//     let r= +prompt("interest");
//     let n= +prompt("No. years");
//    return (a*(Math.pow((1+((r/100)/12)),(12*n))));
// }
// console.log(cpd());


//*************qn.3************

// defining table
/*
     @input            @processing                       @Output;
     cost            -determine the category
                     -cal the rate  to get                return  downpayment 
                      get the downpayment


*/ 
//  function calDown(){
//      let cost= +prompt('Enter the cost');
    
    
     
//          if(cost<50000){
//               return(0.05*cost);
//             }else
            
//             if(cost<100000){
//                 return(2500+(0.1*(cost-50000)));
//             }else
              
//               if(cost<200000){ 
//                   return(7500+0.15*(cost-100000))
//                 }else
              
//               return (20000+0.1*(cost-200000)); 
        
//  } 

//  let tot= calDown()
// console.log(tot);

//*************qn.4************

function sum(){
    //let str= +prompt("enter integers");
    let str=112;
    let sum=0;
    let prdt=1;
    
    while(str/10 >0){
           
   sum +=(str % 10);
   prdt*=(str % 10);
   str=Math.floor(str/10);
    }
    console.log(sum);
    console.log(prdt); 
}
sum();

//*************qn.5************
function calTemp(x){
    
    return ((x - 32)*5/9);
}
console.log(calTemp(212));


//*************qn.6************
function calDist(x1,y1,x2,y2){
    
let d= Math.pow((x2-x1),2)+Math.pow((x2-x1),2)
return Math.pow(d,(1/2));
}
console.log(calDist(0, 0, 5, 5));