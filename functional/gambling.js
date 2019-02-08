/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :Print Number of Wins and Percentage of Win and Loss
 *  @description    
 *  @file           : gambling.js
 *  @overview       :Simulates a gambler who start with $stake and place fair $1 bets until
                     he/she goes broke or reach $goal. Keeps track of the number of
                     times he/she wins and the number of bets he/she makes. Runs the experiment N
                     times, averages the results, and prints them out.
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

var stake = read.question("enter the stake amount");
var goal = read.question("enter the goal amount");
/** 
 * invoking gamblerBrokeOrWon() to find number of win and loss
 */
access.gamblerBrokeOrWon(stake,goal);