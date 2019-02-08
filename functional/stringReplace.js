/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To ensure username with minimum 3 characters and not a number,replacing
                       USERNAME with userinput and print the string.
 *  @description    
 *  @file           : stringReplace.js
 *  @overview       :Declaring the function and passing the user input as argument.
                     display name takes the user input and print it with some sentence.
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

var username = read.question("Enter your name : ");
/** 
 * invoking stringReplace() to replace a string with user input
 */
access.stringReplace(username);