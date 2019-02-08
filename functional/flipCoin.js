/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To flip the coin and find the percentage of head and tail
 *  @description    
 *  @file           : flipCoin.js
 *  @overview       : declaring the function and passing user input as arguments
                      using random() to get value between 0-1, if value<0.5 then it is tail otherwise heads and  find percentage of head and tail
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

var number = read.question("enter the number of times the coin should be flipped");
/** 
 * Invoking flipCoin() function to find head and tail percentage
 */
access.flipCoin(number);