/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :to search a given string in an array.
 *  @description    
 *  @file           :binarySearchForString.js
 *  @overview       : Searches a sorted array by repeatedly dividing the search interval in half.
                     Begin with an interval covering the whole array. If the value of the search key is less
                    than the item in the middle of the interval, narrow the interval to the lower half. 
                    Otherwise narrow it to the upper half. Repeatedly check until the value is found or
                    the interval is empty.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/

/** 
 * to access data from utility file
 */
var access = require('../Utility/utility');
 var read = require('readline-sync');
 /**
  * accept the user input
  */
var size =read.question("Enter the array size");
var array=[];
for(let i=0;i<size;i++)
{
    array[i]=read.question("enter the array elements");
    
}
var element = read.question("Enter the element to be searched");
/** 
 * invoking binarySearchForString to search a given string in an array
 */
var x = access.binarySearchForString(array,element);
console.log(x);

