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
var c = access.isAnagram1(string1,string2);
console.log(c);