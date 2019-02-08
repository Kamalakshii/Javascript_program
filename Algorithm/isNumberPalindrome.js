/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To check whether the number is palindrome
 *  @description    
 *  @file           :isNumberPalindrome.js
 *  @overview       : 
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
var access = require('../Utility/utility');
/** 
 * to access data from utility file
 */
var read = require('readline-sync');
/** 
 * accept the user input
 */
var num1 = read.question("enter the number");
/** 
 * invoking isNumberPalindrome() function
 */
access.isNumberPalindrome(num1);

