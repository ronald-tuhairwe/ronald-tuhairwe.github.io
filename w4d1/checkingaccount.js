"use strict";
/*eslint-disable*/
/* global Account  */

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

class CheckingAccount extends Account {

 constructor(number,overdraft){
 super(number),
 this.overdraft = overdraft
 }

 
 setOverdraft(value){ this.overdraft = value ;}

 getOverdraft(){ return this.overdraft; }

 withdraw(amount) {
    if (amount  <= 0) {
        throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance) {
        if(amount > (this.overdraft + this._balance)){
            throw  Error(" Insufficient funds, cannot withdraw beyond overdraft limit");

        }else{
            this._balance -= amount;
        }
    }
    
}

  toString(){
    return "CheckingAccount " + this._number + ": balance: " + this._balance +" overdraft limit: "+ this.overdraft;
}

endOfMonth() {

 let warn= "Warning, low balance " + this.toString();
    return this._balance < 0 ? warn : "";
}


}

















/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// exports.CheckingAccount = CheckingAccount;