"use strict";
/*eslint-disable*/
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount; 


class Bank {
constructor(){ 
    this._accounts =[]
}

static nextNumber = 1;
addAccount(){
    let accNum =Bank.nextNumber;
    this._accounts.push(new Account(accNum));
    Bank.nextNumber++;
    return accNum;
}

addSavingsAccount(interest){ 
    let accNum =Bank.nextNumber;
    this._accounts.push(new SavingsAccount(accNum,interest));
    Bank.nextNumber++;
    return accNum;
}

addCheckingAccount(ovedraft){
    let accNum =Bank.nextNumber;
    this._accounts.push(new CheckingAccount(accNum, ovedraft));
    Bank.nextNumber++;
    return accNum;
}

closeAccount( number){
    let  accIndex= this._accounts.findIndex(num => num.getNumber()===number);
    this._accounts.splice(accIndex,1);
}

accountReport(){
let string ='';
for(let str of this._accounts){
    string +=str.toString()+"\n";
}
return string;
}

endOfMonth(){
    let final = "";
    for(let str of this._accounts){
        final += str.endOfMonth()+"\n";
    }
    return final;
}


}








/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;