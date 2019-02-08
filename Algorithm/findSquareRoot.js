/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To compute the square root of a non-negative number
 *  @description    
 *  @file           :findSquareRoot.js
 *  @overview       :using the formula the root of a given number is found if the input is 
                     non negative prints an error message
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

var number = read.question("Enter the number");
/** 
 * invoking findSquareRoot to find square root of a given number
 */
access.findSquareRoot(number);