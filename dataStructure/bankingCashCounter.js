/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To add People to Queue to Deposit or Withdraw Money and dequeue
     
 *  @file           : bankingCashCounter.js
 *  @overview       :Create a Program which creates Banking Cash Counter where people
                     come in to deposit Cash and withdraw Cash. Have an input panel to 
                     add people to Queue to either deposit or withdraw money and dequeue 
                     the people.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 03/02/2019
 ******************************************************************************/
var readline = require("readline-sync");
/** 
 * To access data from utility file and utilityDataStructure
 */
var access = require('../Utility/utility');
var accessDs = require("../Utility/utilityDataStructure");
function Queue() {

    /**
     * creating  a queue object
     */
    var L = new accessDs.Queue;
    /** 
     * initializing bankaccount
     */
    var bankamount = 1000;
    /** 
     * initializing array to store the elments
     */
    var set = [];
    var flag = true;
    /** 
     * ask the user to input the number of people in the queue
     */
    var size = readline.question("enter the total number of people to be in queue :")
    /** 
     * condition to check if there is atleast one person in the queue
     */
    if (size > 0) {
        /** 
         * loop until the length of queue
         */
        for (let i = 1; i < size; i++) {
            /** 
             * ask the user to enter the choice of withdraw or deposit
             */
            var input = readline.questionInt("enter 1 to deposit the amount :\nEnter 2 to withdraw the amount :")
            /** 
             * if user choose to deposit then the amount gets added
             */
            if (input == 1) {

                var amount = readline.questionFloat("Enter the total amount to be deposited :")

                var set = L.enqueue(Number(amount));
                flag = true;

            }
            /** 
             * if user chooses to withdraw the amount gets reduced
             */
            else if (input == 2) {
                var amount = readline.questionInt("Enter the total amount to  withdraw :")

                var get = L.enqueue(Number(-amount))
                flag = true;
            }
            /** 
             * ask the user to input correct choice
             */
            else {
                console.log("Please make sure that you have entered correct key ");
                flag = false;
                return;
            }
        }
    }
    else {
        console.log("Invalid input ");
        return;
    }
    if (flag) {
        var add = 0
        for (let i = 1; i < size; i++) {
            add = add + L.dequeue();
        }
        if (add > 0) {
            console.log(add);
        }
        else {
            console.log("insufficient balance");
        }
        var totalamount = bankamount + add;
        console.log("Total amount remaining in bank is :" + totalamount);
        /** 
         * condition to check if the minimum cash is balanced or not
         */
        if (totalamount < bankamount) {
            console.log("Minimum cash is not maintained in bank !");
        }
        else {
            console.log("Minimum cash is maintained in bank");
        }
    }
}
Queue();



