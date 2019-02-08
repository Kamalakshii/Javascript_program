/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To print the prime anagrams in reverse order and add into stack using 
                     linkedlist
 *  @description    
 *  @file           :anagramPrimeStack.js
 *  @overview       :Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a
                     Stack using the Linked List and Print the Anagrams in the Reverse Order.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 05/02/2019
 ******************************************************************************/
/** 
 * For accessing data from utility file
 */
 var access = require('../Utility/utilityDataStructure');
var M = require('../Utility/utility')
var readline = require('readline-sync');
/** 
 * initialize array
 */
var arr = [];
/** 
 * creating a stacklinkedlist object
 */
var stack = new access.StackLinkedList
/** 
 * loop from 0-100 and push the prime numbers into the array
 */
try{
for (let i = 0; i <= 1000; i++) {
    if (M.isPrime1(i))
        arr.push(i)
        console.log(arr)
}
/**
 * Loop the array to find it is anagram or not.
 */
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (M.isAnagram1(arr[i], arr[j])) {
            stack.push(Number(arr[i]))
            stack.push(Number(arr[j]))
        }
    }
}
var result = stack.printStack()
console.log(("Anagrams in reverse order :"));
console.log(result + "\n");
}
catch(exception)
{
    console.log(err)
}


