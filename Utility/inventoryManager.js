
/** 
 * to access data from utility file
 */
var read=require('readline-sync')
var file=require('fs')
class InventoryManager
{
    constructor()
    {

    }
    /** 
     * to add data to the file
     */
    add(data)
    {
        var name =read.question("enter name of the stock");
        var price = read.question("enter the price of the stock");
        var shares = read.question("enter the shares");
        data.Stock.push({
            stockname : name,
            stockshares : shares,
            stockprice : price
        })
        var d = file.writeFileSync('Stock.json', JSON.stringify(data))
    }
    /** 
     * to remove data from the file
     */
    remove(data)
    {
        var name = read.question("enter the name to be removed");
        for(let i =0 ; i<data.Stock.length; i++)
        {
            if(data.Stock[i].stockname == name)
            {
                var index = data.Stock.indexOf(data.Stock[i]);
                data.Stock.splice(index,1);
            }
            var d = file.writeFileSync('Stock.json', JSON.stringify(data))
        }
    }
    /** 
     * to print the data
     */
    print(data) {
        var stock = data.Stock
        for (const key in stock) {
            console.log(stock[key])
        }
    }
}
module.exports = {InventoryManager}