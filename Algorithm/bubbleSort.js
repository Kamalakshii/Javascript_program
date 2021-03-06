/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To sort a given array elements.
 *  @description    
 *  @file           :bubbleSort.js
 *  @overview       :The bubblesort is comparison-based algorithm in which each 
                    pair of adjacent elements is compared and the elements are swapped if they are not 
                    in order.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * Access data from utility file
 */
var access = require('../Utility/utility');
var read = require('readline-sync');
/*
take the user input
*/
var size = read.question("Enter the size of an array");   
/** 
 * invoking bubbleSort() to sort the array elements
 */
access.bubbleSort(size);