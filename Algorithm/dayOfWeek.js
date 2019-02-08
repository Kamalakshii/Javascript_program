/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To print the day of the week that date falls on.
 *  @description    
 *  @file           :dayOfWeek.js
 *  @overview       :prints the day of the week that date falls on by taking three
                     command-line arguments: m (month), d (day), and y (year).
                    print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth.
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
 * invoking dayOfWeek() to find the day from the input 
 */
 var result = access.dayOfWeek();;
 console.log(result);

