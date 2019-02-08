/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To read in a list of words from file.
 *  @description    
 *  @file           :searchWord.js
 *  @overview       :read in the list words comma separated from a File and
                    then enter the word to be searched
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * access the data from the utility file
 */
 var access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * invoking searchWord() to search word in a file using binary search
 */
access.searchWord();