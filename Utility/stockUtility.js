module.exports={
stockReport()
{
    /** 
     * to access data from utility file
     */
var utility = require('../objectOrientedPrograms/stock1')
var read = require("readline-sync");
var number = read.questionInt("enter the number of stocks");
var valueOfStock =0;
var totalValue = 0;
try{
for(let i = 1; i<=number ; i++)
{
    /** 
     * ask the user to enter name of shareholder
     */
var name = read.question("enter the name of the shareholder");
var flag = true;
/** 
 * condition to check if name is valid or not
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
var shares = read.questionInt("enter the number of shares");
var price = read.questionFloat("enter the share price ");
var stock = new utility.Stock(name,shares,price);
/** 
 * invoking totalStockValue  function to calculate the total value of stock
 */
valueOfStock = stock.totalStockValue();
console.log(valueOfStock);

console.log("The shareholder "+name+ "with "+shares+ "shares have total of "+valueOfStock);

totalValue = totalValue + valueOfStock;
}
console.log(totalValue);
}
catch(exception)
{
    console.log(err); 
}
}
}


