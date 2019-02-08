/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To measure the time that lapses between start and end clicks
 *  @description    
 *  @file           : stopWatch.js
 *  @overview       :function getCurrentSecond() returns the current second in seconds,
                     function stopwatch() ,the start variable stores the retrieved second at starttime,
                     and the stop variable stores the retrieved second at stop time
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

var startTime = read.question("Press Enter the start time");
var stopTime = read.question(" Press Enter the stop time ");
/** 
 * invoking getCurrentSecond() and stopWatch() to calculate the elapsed time
 */
var x = Access.getCurrentSecond();
access.stopWatch();
console.log(x);
