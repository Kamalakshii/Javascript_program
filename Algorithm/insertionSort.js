/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To sort the given array using insertion sort.
 *  @description    
 *  @file           :insertionSort.js
 *  @overview       : Insertion sort is based on the idea that one element from the 
                    input elements is consumed in each iteration to find its correct position i.e, 
                    the position to which it belongs in a sorted array.
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

var size = read.question("Enter the size of an array");


                


access.insertionSort(size);