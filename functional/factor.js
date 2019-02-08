/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To compute the prime factors of a given number.
 *  @description    
 *  @file           : factor.js
 *  @overview       : Factors are the numbers you multiply to get another number.Here we are finding the factors which are .
                      The function checks whether the number is a factor and a prime.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * For accessing data from utility file
 */
 access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */

var number = read.question("Enter the number");
access.findFactor(number);