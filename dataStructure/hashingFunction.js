/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To create a Slot of 10 to store Chain of Numbers that belong to
                      each Slot to efficiently search a number from a given set of number.
     
 *  @file           : hashingFunction.js
 *  @overview       :
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 04/02/2019
 ******************************************************************************/
/** 
 * to access the data from the utility file
 */
var access = require('../Utility/utilityDataStructure');
var readline = require('readline-sync');
var take = require('util');
var filestream = require('fs');
var utility = require('../Utility/utility');
/** 
 * hashing function to store the numbers in a slot
 */
function hashing() {
    
    /** 
     * to read a set of numbers from a file
     */
    var fileRead = filestream.readFileSync('hashNumber.txt', 'utf8');
    /** 
     * invoking split() on the fileRead ,storing it in an array
     */
    var numArray = fileRead.split(' ');
    /** 
     * Initializing array
     */
    var array = []
    /** 
     *loop until array length 
     */
    for (let i = 0; i < numArray.length; i++) {
        var n = Number(numArray[i]);
        var remainder = n % 10;
        /** 
         * check if the remainder is undefined 
         */
        if (array[remainder] === undefined) {
            array[remainder] = new access.LinkedList;
            array[remainder].add(n);
        }
        else {
            array[remainder].add(n);
        }
    }
    /** 
     * Initializing empty string
     */
    var string = "";
    /** 
     * loop 0 to 10 and print the slot where it is to be stored
     */
    for (let index = 0; index < 10; index++) {
        take.print(index + " slot: ");
        try {
            console.log(array[index].printList());
        } catch (err) {
            console.log("empty index");
        }
    }
    console.log()
    var valid = false;

    do {
        /** 
         * Ask the user to input the number to be searched
        */
        var number = readline.question("Enter the number to be searched \n");
        /** 
         * condition to check if input is valid and positive
         */
        if (isNaN(number) && number < 0) {
            console.log("Enter number only greater than zero");
        } else {
            valid = true;
        }
    } while (!valid);
    /**
     * to find the remainder and print it 
     */
    remainder = Number(number % 10);
    console.log("Remainder is " + remainder);
    /** 
     * condition to check if number is undefined
     */
    if (array[remainder] === undefined) {
        array[remainder] = new access.LinkedList;
    }
    /** 
     * invoking search() to search the number in the file
     */
    if (array[remainder].search(Number(number))) {
        console.log("The number is present in the file");
        /** 
         * if the number is already present in the file then invoke the remove() to remove the number from file
         */
        array[remainder].removeItem(number);

    } else {
        /** 
         * if the number is not found in the file then add the number to the  file by invoking add()
         */
        console.log("Number is not in the file");
        array[remainder].add(number);
    }
    var flag;
    /** 
     * loop from 0 - 10  ad set falg to true
     */
    for (let index = 0; index < 10; index++) {
        flag = true;
        /** 
         * store the resulting number in the slot and print it
         */
        take.print(index + " result slot: ");
        try {
            console.log(array[index].printList());
            string = string + array[index].printList();
        } catch (err) {
            console.log("Empty index");
        }
    } console.log(string);
    /** 
     * invoking fileWrite() to write into the file
     */
    utility.fileWrite('hashNumber.txt', string);

    console.log("\n\n");
}
hashing();


