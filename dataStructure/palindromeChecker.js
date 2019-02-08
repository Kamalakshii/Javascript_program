/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To check whether a given string of character is a palindrome or not.
     
 *  @file           :palindromeChecker.js
 *  @overview       :Take a String as an Input The solution to this problem will use a 
                     deque to store the characters of the string. We will process the
                     string from left to right and add each character to the rear of the
                     deque.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 03/02/2019
 ******************************************************************************/
var readline = require("readline-sync");
/** 
 * To access data from utility file and utilityDataStructure
 */
var accessDs = require("../Utility/utilityDataStructure");
/** 
 * invoking deQueue()
 */
function deQueue() {
    /** 
     * creating a deQueue object
     */
    var L = new accessDs.deQueue();
    var flag = false;
        do{
            /** 
             * ask the user to input the string
             */
            var string = readline.question("enter the string ");
            /** 
             *condition to check if the string is valid 
             */
        if(!isNaN(string))
        {
            console.log("enter a valid input");
        }
        else{
            flag = true;
        }
    }
        while(!flag)
        /** 
         * split the string and store it in array
         */
            var array = string.split(""); 
            /** 
             * loop until length of an array and add them to the front
             */
        for(let i = 0;i<array.length;i++)
        {
            L.addFront(array[i]);
        }
        var string1 = "";
        /** 
         * loop until array length and invoke removeFront() and concatenate
         */
    for (let i = 0; i < array.length; i++) {
        string1 = string1 + "" + L.removeFront();
        
    }
    console.log(string1);

    var string2 = "";
     /** 
    * loop until length of an array and add them to the front
    */
    for (let i = 0; i < array.length; i++) {
        L.addFront(array[i])
    }
    /** 
     * loop until array length and invoke removeRear() and concatenate
    */
    for (let i = 0; i < array.length; i++) {
        string2 = string2 + "" + L.removeRear();
    }
    console.log(string2);
    /** 
     * condition to check if two strings are equal
     */
    if (string1 == string2) {
        console.log(" The string is palindrome ");
    }
    else {
        console.log("The string is not a palindrome ");

    }
}
deQueue();