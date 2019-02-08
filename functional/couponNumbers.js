/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To generate distinct coupon numbers.
 * 
 *  @description    
 *  @file           : couponNumbers.js
 *  @overview       : Given N distinct Coupon Numbers, how many random numbers do you 
                      need to generate distinct coupon number? This program simulates this random 
                      process.
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

var number = read.question("Enter the numbers");
access.couponNumberGenerate(number);