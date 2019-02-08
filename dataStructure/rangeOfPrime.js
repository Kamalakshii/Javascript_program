/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To print the numbers find the range 1-1000 which are prime.
 *  @description    :Take a range of 0 - 1000 Numbers and find the Prime numbers in that 
                     range. Store the prime numbers in a 2D Array, the first dimension
                      represents the range 0-100, 100-200, and so on.
 *  @file           :rangeOfPrime.js
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 04/02/2019
 ******************************************************************************/
/** 
 * To access data from utility file and utilityDataStructure
 */
 var access = require('../Utility/utility')
var access1 = require('../Utility/utilityDataStructure');
var util=require('util')
var readline = require('readline-sync');
try{
/** 
 * initialize arrays with given range
 */
var array = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
var i = 0; 
var j = 1; 
var range = 100;
var arr = []
var arr1 = []
/** 
 * loop until the given range and find the prime number
 */
for (let prime = 2; prime <= 1000; prime++) {
    if (access.isPrime1(prime)) {

        if (prime <= range) {
            var a = "" + prime
            var b = a.split("")
            b.sort()
            var v = ""
            for (let i = 0; i < b.length; i++) {
                v = v + b[i]
            }
            if (!arr.includes(v)) {
                arr.push(v)
                array[i][j] = prime;
                j++;
            }
        }
        else {
            var a1 = "" + prime
            var b1 = a1.split("")
            b1.sort()
            var v1 = ""
            for (let i = 0; i < b1.length; i++) {
                v1 = v1 + b[i]
            }
            if (!arr1.includes(v1)) {
                arr1.push(v1)
                j = 1;
                range = range + 100;
                i++;
                array[i][j] = prime;
            }
        }
    }
}
/** 
 * invoking rangeOfArray() function and store it in array 
 */
var arr=access1.rangeOfArray();
console.log("The prime numbers that are not Anagram presents in the given range ");
/** 
 *for loop to print numbers that are not  anagrams  
 */
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        util.print(array[i][j] + " ");
    }
    console.log();
}
}
catch(exception)
{
    console.log(err);
    
}
