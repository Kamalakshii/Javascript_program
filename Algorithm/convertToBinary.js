/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :  To convert the given decimal number into binary.
 *  @file           :convertToBinary.js
 *  @overview       :It outputs the binary (base 2) representation of the decimal number
 *                   typed as the input.It is based on decomposing the number into a sum
 *                   of powers of 2.
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
var number = read.question("enter the number");
/** 
 * invoking convertToBinary() to convert the decimal number into binary
 */
access.convertToBinary(number);