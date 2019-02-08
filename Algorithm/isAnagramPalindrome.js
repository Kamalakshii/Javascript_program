/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To check whether the anagarm is palindrome
 *  @description    
 *  @file           :isAnagramPalindrome.js
 *  @overview       : 
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
var access = require('../Utility/utility');
/** 
 * to access the data from the utility file
 */
var read = require('readline-sync');
/** 
 * invoking isAnagramPalindrome() 
 */
var c = access.isAnagramPalindrome();
console.log(c);