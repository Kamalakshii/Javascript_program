/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :Print the Nth Harmonic Value.
 *  @description    
 *  @file           : harmonicNumber.js
 *  @overview       :the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
                     use for loop and display the harmonic number and Print the output
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

var number = read.question("Enter the Number");
/** 
 * invoking harmonicNumber() function to print the nth harmonic number
*/
access.harmonicNumber(number);