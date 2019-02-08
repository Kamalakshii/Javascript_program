/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To find number of binary search tree.
     
 *  @file           : binaryTree.js
 *  @overview       :
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 03/01/2019
 ******************************************************************************/
var readline = require("readline-sync");
/** 
 * To access data from utility file and utilityDataStructure
 */
var accessDs = require("../Utility/utilityDataStructure");
/** 
 * ask user to input the number
 */
var number = readline.questionInt("enter the number");
/** 
 * invoking binaryTree() to find the number of trees
 */
var factorial = accessDs.binaryTree(number);
var factorial1 = accessDs.binaryTree(number * 2);
var factorial3 = accessDs.binaryTree(number + 1);
/** 
 * calculate the binarytree number and store it in b
 */
var b = factorial1 / (factorial3 * factorial);
console.log(b);