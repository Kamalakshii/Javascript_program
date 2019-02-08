/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :Accept four digit input of year from the user and check given inputs is Leap year or not
 *  @description    
 *  @file           : leapYear.js
 *  @overview       :function checks length of the given number, if length equals to 4, then it prints
                     given number is Leap year or not.
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

var year = read.question("enter the year");
/** 
 * invoke determineLeapYear() function to find whether a given year is leap or not
 */
access.determineLeapYear(year);