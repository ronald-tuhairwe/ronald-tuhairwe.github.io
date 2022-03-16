"use strict";
/* eslint-disable*/
/* global Account require  */
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class SavingsAccount extends Account{

constructor(number,interest){
    super( number);
    this.interest= interest;
}


addInterest(){

    return  this._balance=this._balance + (this._balance * (this.interest/100));
 }

setInterest(rate){ this.interest = rate; }

getInterest(){ return this.interest; }



toString(){
    return "SavingsAccount " + this._number + ": balance: " + this._balance +" interest: "+ this.interest;
}

endOfMonth(){
    return  "Interest added SavingsAccount " + this._number + ": balance: " + this.addInterest()+" interest: "+ this.interest;
}

}




/* global exports */
//exports.SavingsAccount = SavingsAccount;