/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To keep track of customer information
 *  @description    
 *  @file           :Commercial.js
 *  @overview       :The StockAccount class also maintains a list of CompanyShares object
                     which has Stock Symbol and Number of Shares as well as DateTime of the
                     transaction
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 12/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var D = require('../Utility/StockAccountLinked')
var read = require('readline-sync')
var file = require('fs')
var data = file.readFileSync('customer.json', 'utf8')
var data1 = file.readFileSync('Company.json', 'utf8')
var object = JSON.parse(data)
var object11 = JSON.parse(data1)
var object1 = new D.StockAccountLinked
console.log("Enter 1 to create account:")
//console.log("Enter 2 to total value of amount in account")
console.log("Enter 2 to buy shares")
console.log("Enter 3 to sell shares")
console.log("Enter 4 to information shares of company and customer")
var num = read.question("choose the number:")
if (num == 1) {
    object1.stockCreate(object)
}
if (num == 2) {
    object1.buy(object, object11)
}
if (num == 3)
    object1.sell(object,object11)
if(num==4)
object1.print(object,object11)

