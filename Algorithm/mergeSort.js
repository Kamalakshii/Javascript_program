/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To sort the given array elements
 *  @description    
 *  @file           :mergeSort.js
 *  @overview       : It divides input array in two halves, calls itself for the two halves and 
         *              then merges the two sorted halves
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
var access = require('../Utility/utility');
/** 
 * to access data from utility file
 */
var read = require('readline-sync');
/** 
 * accept the user input
 */
var size =read.question("Enter the array size");
var array=[];
while(size!=array.length)
{
    var number = read.questionInt("enter the array elements");
    array.push(number);
}
function Merge()
{
    access.mergeSort(array);
    console.log(array);
}
Merge();
