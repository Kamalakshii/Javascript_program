/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :to return the Change in rupees by the Vending Machine
 *  @description    
 *  @file           :vendingMachine.js
 *  @overview       :There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
                    returned by Vending Machine.It returns the minimum number
                    of Notes as well as the Notes to be returned by the Vending Machine as a
                    change.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * To access the data from utility file
 */
var access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * initialize an array
 */
var array =[1000,500,100,50,10,5,2,1];
/*
*take the user input
*/
var amount = read.questionInt("enter the amount");
/** 
 * invoking findNumberOfNotes() to calculate the number of notes 
 */
access.findNumberOfNotes(array,amount);