/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To read from file a list of words  by taking user input
 *  @description    
 *  @file           :unorderedList.js
 *  @overview       :Read the Text from a file, split it into words and arrange it as 
                     Linked List. Take a user input to search a Word in the List. If the 
                     Word is not found  then add it to the list, and if it found then
                    remove the word from the List. In the end save the list into a file.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 03/02/2019
 ******************************************************************************/
var readline = require("readline-sync");
 /*
To access the data from utility file and utilityDataStructure
*/
var access = require("../Utility/utility");
var accessDs = require("../Utility/utilityDataStructure")
try{
/**
 *  invoking fileRead() to Read the file and store it an array 
 */
var arr = access.fileRead();
/**
 * Creating a linkedList object
 */
var linkedList = new accessDs.LinkedList;
/**
 * loop till the end of the length of array and add all the elements to the list.
 */
for(let i = 0; i<arr.length; i++)
{
    linkedList.add(arr[i]);
}
/**
 * To display the content of the list
 */
var content = linkedList.printList();
console.log("Data in the list: "+content);
/**
 * Ask user to enter a word to be searched in the list.
 */
var word = readline.question("Enter the word to remove: ")
/**
 *  to check whether the word is present in the list or not by using search function.
 */
var result = linkedList.search(word)
console.log("Word in the list: "+result);
/**
 * Condition to check if the word is present in the list or not.
 * If it is present, remove the word from the list, else add the word to the list
 */
if(result === true){
    linkedList.removeItem(word);
    var output = linkedList.printList();
    access.fileWrite('simple1.txt', output)
    console.log("The word has been removed from the list as it was already present  ");
    console.log("The data after removing the word is : "+output)  
} 
else{
    linkedList.add(word);
    var output1 = linkedList.printList();
    access.fileWrite('simple1.txt', output1)
    console.log("The word has been added successfully ");
    console.log("The data after adding the word is "+output1)   
}
}
catch(exception)
{
    console.log(err);
    
}
