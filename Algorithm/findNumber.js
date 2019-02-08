/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To find a number between a given values
 *  @description    
 *  @file           :findNumber.js
 *  @overview       :It takes a command-line argument N, asks you to think of a number
                     between low and high,  and always guesses the answer with n questions
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * For accessing data from utility file
 */
var access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var low = read.questionInt("enter the starting number");
var high = read.questionInt("enter last number");
/** 
 * invoking findNumber() function
 */
 var c = access.findNumber(low,high,read);
console.log("the number is :"+c);


