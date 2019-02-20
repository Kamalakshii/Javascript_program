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
var read = require("readline-sync");
var file = require("fs");
var access = require("../Utility/utilityDataStructure");
list = new access.LinkedList();
class companyShares {
    constructor() {
        this.stock = new access.LinkedList();
        try {
            var data = JSON.parse(
                file.readFileSync("CompanyShares.json")
            );
            for (let j = 0; j < data.company.length; j++) {
                this.stock.add(data.company[j]);
            }
        } catch (err) {
            console.log("File not found");
        }
    }
    /**
     * addToList to add the info about the company name,share and price
     * using linkedlist and add it to list. 
     */
    addTolist() {
        try{
        var flag = false;
        do {
            var name = read.question("Enter the name want to add : ");
            if (!isNaN(name)) {
                console.log("Please enter alphabetics only ......!");
            } else {
                flag = true;
            }
        } while (!flag);
        var share = read.questionInt("Enter the share :");
        var price = read.questionInt("Enter the price :");
        this.stock.add({
            name: name,
            share: share,
            price: price
        });
        console.log("Elemets after adding to list :");
        console.log(this.stock.printShares());
    }
    catch(exception)
    {
        console.log(err);
    }
}
    /**
     * removeFromList to remove the info about the company name,share and price
     * using linkedlist and add it to list. 
     */
    removeFromList() {
        try{
        console.log(this.stock.printShares());
        var company = read.question("Enter company name to be removed: ");
        this.stock.removeStock(company);
        console.log(this.stock.printShares());
        }
        catch(exception)
        {
            
        }
    }
    /**
     * To print all the details of the company using printlist method.
     */
    print() {
        console.log(this.stock.printShares());
    }
    /**
     * writeStock is to save the info about company.
     */
    writeStock() {
        file.writeFileSync(
           "CompanyShares.json",JSON.stringify(this.stock.printShares()),
            function (err) {
                if (err) {
                    throw err;
                }
            }
        );
    }
}
module.exports = { companyShares };
