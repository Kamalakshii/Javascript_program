/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To manage data inventory of rice, wheat and pulses
 *  @file           :inventory.js
 *  @overview       :Create a JSON file having Inventory Details for Rice, Pulses and
                     Wheats with properties name, weight, price per kg
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 10/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var utility = require("../Utility/inventoryUtil");
/** 
 to read files
*/
var fs = require("fs");
  var data = fs.readFileSync("inventoryDataManagement.json");

  /*When receiving data from a web server, the data is always a string.
    Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    */
  var object = JSON.parse(data); //JSON.parse() to convert text into a JavaScript object
function inventoryDataManagement() {
  /** 
   * invoking inventory funtion to calculate the value of every object
   */
 utility.inventory(object);
}
inventoryDataManagement();