/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To print the calendar of the month.
     
 *  @file           : calendar.js
 *  @overview       :It takes the month and year as command-line arguments and prints 
                    the Calendar of the month. Store the Calendar in an 2D Array,
                    the first dimension the week of the month and the second dimension 
                    stores the day of the week.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 03/02/2019
 ******************************************************************************/
var access = require("../Utility/utilityDataStructure")
/** 
 * To access data from utility file and utilityDataStructure
 */
var M = require('../Utility/utility');
var T = require('util')
/** 
 * invoking calendar() to print the calendar of the month
 */
function calendar() { 
    try{
    /** 
     * accepting command line arguments and storing in month and year
     */
    var month = +process.argv[2];
    var year = +process.argv[3];
    /** 
    *creating a week array to store days of the week 
    */
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    /** 
     * creating a dates array to store the end dates of the month
     */
    var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    /** 
     * invoking day() to calculate the month and year
     */
    if((month>0 && month <= 12 )&& (year>999 && year<10000))
    {
    var day = access.day(month,1,year);
    console.log(day);
    /** 
     * invoking leapYear to check whether a given year is leap or not 
     */
    var leap = access.leapYear(year);
    /** 
     *   if it is a leap year then the second month has 29 days
     */
    
    if (leap == true) {
        
        dates[2] = 29;
    }
    /** 
     * loop until length of week
     */
    for (var i = 0; i < week.length; i++) {
        T.print(week[i] + "  ");
    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        T.print(" ");
    }

    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) {
            T.print(" " + i + "   ");
        }

        if (i > 9) {
            T.print("" + i + "   ")
        }
        if ((i + day) % 7 == 0) {
            console.log();
        }

    }
}
else{
    console.log("enter valid month and year")
}

    console.log("\n\n");

}
catch(exception)
{
    console.log(err);
}
}
 calendar();
