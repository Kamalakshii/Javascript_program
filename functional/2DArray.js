/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : Create 2 dimensional array in memory to read in M rows and N cols.
 * 
 *  @description    
 *  @file           : 2DArray.js
 *  @overview       : It takes M rows, N cols and M * N inputs for 2D array.
                      The function reads in a 2D array and prints it to the standard output.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * For accessing data from utility file
 */
var access = require('../Utility/utility');
var read = require('readline-sync')
/** 
 * Accepting the user input
 */

var row = read.question("enter the rows");
var col =read.question("enter the columns");
/** 
 * invoking array2D() to dispaly the 2Darray with given elements
*/
access.array2D(row,col,read);