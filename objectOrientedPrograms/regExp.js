/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To replace name,fullname,contact number and date.
 *  @file           :regExp.js
 *  @overview       :replaces the original message in the text by modified message.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 09/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var utility = require('../Utility/regExpUtil')
/** 
 * to read from a file
 */
var read = require("readline-sync");
/** 
 * to accept the name to be replaced from the user
 */
var name= read.question("enter the name to be replaced");
var flag = true;
/** 
 * to check if name is valid or not
 */
while(flag)
{
if(isNaN(name) && name.length>0)
{
flag = false;
}
else{
    var name = read.question("please enter valid name");
}
}
/**
 * ask the user to enter the fullname
*/
var fullName= read.question("enter the fullname to be replaced");
var flag = true;
/** 
 * to check whether the fullname is valid or not
 */
while(flag)
{
if(isNaN(fullName) && fullName.length>0)
{
flag = false;
}
else{
    var fullName = read.question("please enter valid fullname");
}
}
/**
 * ask the user to input contact number
 */
var contactNumber = read.questionInt("enter the contact number to be replaced");
var flag = true;
/** 
 * condition to check if contact number is valid or not
 */
if((!isNaN(contactNumber)) && contactNumber.length>0)
{
flag = false;
}
else{
    var contactNumber = read.question("please enter valid contact number");
    var contactNumber = read.questionInt("enter the contact number to be replaced");
}
/** 
 * create a date object
 */
var date = new Date();
console.log(date.toLocaleDateString());
/**
 * invoking regexp function to replace name ,fullname,contactnumber,date
 */
utility.regexp(name,fullName,contactNumber,date)