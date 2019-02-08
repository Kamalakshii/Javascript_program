/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To read from file a list of numbers by taking user input
 *  @description    
 *  @file           :orderedList.js
 *  @overview       :Read a List of Numbers from a file and arrange it ascending order
                     in a Linked List. Take user input for a number, if found then pop 
                     the number out of the list else insert the number in appropriate 
                     position.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 03/02/2019
 ******************************************************************************/
var readline = require("readline-sync");
/** 
 * To access data from utility file and utilityDataStructure
 */
var access = require("../Utility/utility");
var accessDs = require("../Utility/utilityDataStructure")
try{
/** 
 * invoke fileRead() to read from a file 
*/
var arr1 = access.fileRead();
/** 
 * create an array
 */

var arr =[];
console.log("the elements before sorting are :"+arr1);
/** 
 * using sort() to sort the array elements
 */
arr1.sort(function(a,b){
    return a-b;
});
/** 
 * loop until length of an array and parse it to store in arr[i]
 */
for(let i = 0; i<arr1.length; i++)
{
   arr[i] = parseInt(arr1[i]);
     
}

console.log(arr);

console.log("the array elements after sorting :"+arr);
/** 
 * creating a linkedlist object
 */
var linkedList = new accessDs.LinkedList;
/** 
 * ask the user to enter the number to be searched
 */
var number = readline.questionInt("enter the number to be searched:");
/** 
 * loop until length of an array and add the elements to the list
 */
    for(let i = 0; i<arr.length; i++)
    {
        linkedList.add(arr[i]);
    }
    /** 
     * invoking search() to search the input element
     */
    var result = linkedList.search(number);
/**
 * Condition to check if the word is present in the list or not.
 * If it is present, remove the word from the list, else add the word to the list
 */
if(result == true){
    /** 
     *removing an element  
     */
    linkedList.removeItem(number);
    var output = linkedList.printList();
    /** 
     *to write into a file 
     */
    access.fileWrite('simple.txt', output)
    console.log("The word has been removed from the list as it was already present  ");
    console.log("The data after removing the word is : "+output)
    
} else{
    console.log(arr);
    /** 
     *inserting an element and storing it in pos
     */
     var pos = linkedList.addPos(arr,number);
     console.log("position :"+pos);
     linkedList.insertAt(number,pos);
    var output1 = linkedList.printList();
    /** 
     * to write into a file
     */
    access.fileWrite('simple.txt', output1)
    console.log("The word has been added successfully ");
    console.log("The data after adding the word is "+output1)
}
}
catch(Exception)
{
    console.log(err);
    
}

 

