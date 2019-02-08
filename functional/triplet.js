/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
 *  @description    
 *  @file           :triplet.js
 *  @overview       :Read in N integers and counts the number of triples that sum to exactly 0
                     The function returns a true if the array contains a triplets whose sum is zero or return false.
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

var size = read.question("enter the size of an array");
/** 
 * invoke triplet() to find the triplets whose sum is zero
 */
access.triplet(size);