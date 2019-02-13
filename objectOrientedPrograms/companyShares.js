/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To maintain the List of CompanyShares in a Linked List
 *  @description    
 *  @file           :companyShares.js
 *  @overview       :Maintain the List of CompanyShares in a Linked List So new CompanyShares 
                    can be added or removed easily.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 12/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var file = require("fs");
var read = require("readline-sync");
var utiltiy = require("../Utility/companySharesUtil");
/** 
 * main funtion to take user input 
 */
function main() {
  try {
    /** 
     * to read data from json file and store it in companyJson
     */
    var companyJson = file.readFileSync("CompanyShares.json");
    var companyObject = JSON.parse(companyJson);
    var com = new utiltiy.companyShares();
    var data = companyObject.company;
    /**
     * Loop the company array objects and add it to linkedlist.
     */
    outer: while (true) {
      console.log("1. Add");
      console.log("2. Remove");
      console.log("3. Print");
      console.log("4. Save and exit");
      var num = read.questionInt("Enter valid choice :");
       /**
       * Switch to choose the case to add,remove and
       * print
       */
      switch (num) {
        case 1:
          com.addTolist(data, companyObject);
          break;
        case 2:
          com.removeFromList();
          break;
        case 3:
          com.print();
          break;
        case 4:
          com.writeStock();
          break outer;
        default:
          console.log("Please enter valid number ");
          break;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}
main();