/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To find all the permutation of the string.
 *  @description    
 *  @file           : stringPermutation.js
 *  @overview       :To get all the permutations, we will first take out the first char 
                    from String and permute the remaining chars.If String = “ABC”
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
var string = read.question("enter the string");
/** 
 * invoking stringPermutation() to find all the permutations
 */
var x = access.stringPermutation(string);
console.log(x);