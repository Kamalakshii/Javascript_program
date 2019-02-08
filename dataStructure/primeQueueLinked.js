/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To print the Prime Numbers that are Anagram in the Range of 0 - 1000 

 *  @file           :primeQueueLinked.js
 *  @overview       :Add the Prime Numbers that are Anagram in the Range of 0 - 1000
                     in a Queue using the Linked List and Print the Anagrams from the Queue.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 05/02/2019
 ******************************************************************************/
/** 
 * To access data from utility file and utilityDataStructure
 */
 var access = require('../Utility/utilityDataStructure');
var M = require('../Utility/utility')
var readline = require('readline-sync');
try{
/** 
 * initialize array
 */
var arr=[];
/** 
 * create linklist object
 */
var Q=new access.LinkListQ;
/** 
 * loop from 0 -1000 ,find prime numbers and push into an array
 */
for (let i =0; i<1000; i++) {
    if (M.isPrime1(i))
        arr.push(i)
    }
    /** 
     * loop until array length 
     */
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        /** 
         * condition to check if it is an anagram and add it to the queue
         */
        if (M.isAnagram1(arr[i], arr[j])) {
            Q.enQueue(Number(arr[i]))
            Q.enQueue(Number(arr[j]))
        }
    }
}
  console.log(" Anagrams are :"+Q.print());
}
catch(exception)
{
    console.log(err);
    
}