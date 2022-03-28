/* eslint-disable*/

// ***************function for prime numbers************

function prime(num){
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if ( num % j === 0)
               return ("its not prime");
            } 
           return ("its prime");
   
}


function largestNum( num){
    const fac=[];
   

    for (let i = 0; i <= num/2; i++) { 
    num%i==0? fac.push(i):0;
    }
    console.log(fac);

   let prime = fac.filter(num =>{
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if(num % i ===0) return;
      }
   return num !==1 && num !==0;
  });

  console.log(Math.max(...prime));
} 
largestNum(6936);



function range(){
    for (let i = 0; i < 6; i++) {
      
        console.log(Math.floor( Math.random()*8)+2);
    }
}

range();