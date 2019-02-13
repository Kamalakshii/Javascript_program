/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To read in Stock Names, Number of Share, Share Price.
 *  @file           :stockPortfolio.js
 *  @overview       :to read in Stock Names, Number of Share, Share Price.
                    Print a Stock Report with total value of each Stock and the total value
                     of Stock.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 09/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var stock= require("../Utility/stockUtility")
    function main()
    {
        var x = stock.stockReport()
    }
main();
