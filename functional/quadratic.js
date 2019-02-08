/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To find root of an equation a*x*x+b*x+c
 *  @description    
 *  @file           : quadratic.js
 *  @overview       :This equation has two roots and the roots can be found 
                     using the formula.Take a,b,c as inputs and find the roots of x
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

var a = read.question("Enter the value of a");
var b = read.question("enter the vae of b");
var c = read.question("Enter the value of c");
/** 
 * invoking quadraticRoots() to find roots of an equation
 */
access.quadraticRoots(a,b,c);