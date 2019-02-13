/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To create an inventory manager to manage data inventory of rice, wheat
                     and pulses
 *  @file           :inventoryT.js
 *  @overview       :Create a JSON file having Inventory Details for Rice, Pulses and
                     Wheats with properties name, weight, price per kg
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 10/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var D = require('../Utility/inventoryManager')
var read=require('readline-sync')
var readfile = require('fs')
var data = readfile.readFileSync('Stock.json', 'utf8')
var data1 = JSON.parse(data)
/** 
 * creating an inventoryManager object
 */
var object = new D.InventoryManager
console.log("enter 1 for add")
console.log("enter 2 for remove")
console.log("enter 3 for print")
console.log("enter 4 for exit")
/** 
 * ask the user to input the number
 */
var number =read.questionInt("Choose the number:")
switch (number) {
    case 1: object.add(data1)
        break;
    case 2: object.remove(data1)
        break;
    case 3: object.print(data1)
        break;
}
