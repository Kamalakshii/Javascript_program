/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To check two strings are anagram or not
 *  @description    
 *  @file           :anagram.js
 *  @overview       : Taking 2 Strings as input such as abcd and dcba and check for Anagrams.
                     One string is an anagram of another if the second is simply a
                    rearrangement of the first.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * For accessing the data from utility file
*/
var access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * Accepting the user input
 */
var string1 = read.question("enter the first string");
var string2 = read.question("enter the second string");
/** 
 * invoking isAnagram() to find the strings are anagram or not
 */
var c = access.isAnagram(string1,string2);
console.log(c);