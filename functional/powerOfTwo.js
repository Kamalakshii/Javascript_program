/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To Accept value of "N" from user and prints a table of the powers of 2 
                     that are less than or equal to 2^N. value of N should be less then 31.
 *  @description    
 *  @file           : powerOfTwo.js
 *  @overview       :function checks the given number is less then 31, if less then 31, then it prints
                     the value of two's power i.e., 2^N value.
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
 * invoking powerOfTwo() to find the power of a given number
 */
 access.powerOfTwo();