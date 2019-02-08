/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :to search a given number in an array.
 *  @description    
 *  @file           :binarySearch.js
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
 * initialize array and take the user input
 */
var size =read.question("Enter the array size");
var arr=[];
for(let i=0;i<size;i++)
{
    arr[i] = read.question("enter the array elements");
}

var number = read.question("enter the element to be searched");
/** 
 * invoking binarySearch to search a given element in an array
 */
var x = access.binarySearch(arr,number);
console.log(x);