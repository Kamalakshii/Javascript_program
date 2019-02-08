/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To print the calendar using linked list
     
 *  @file           : weekOfDaysUsingQueue.js
 *  @overview       :Create the Week Object having a list of WeekDay objects each storing
                        the day (i.e  S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects
                     are stored in a Queue implemented using Linked List
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 05/02/2019
 ******************************************************************************/
/** 
 * To access data from utility file and utilityDataStructure
 */
var D = require('../Utility/utilityDataStructure')
var M = require('../Utility/utility');
var T = require('util')
var read = require('readline-sync')
/** 
 *calendar() function to print the calendar
 */
function calendar() {
    try {
        /** 
         *create two linklist objects 
         */
        var weekdays = new D.LinkListQ
        var dateq = new D.LinkListQ
        var valid=false;
        /** 
         * ask the user to enter the month and year
         */
        do {
            var month = read.questionInt("Enter the month : ");
          var year = read.questionInt("Enter the year : ");
          if (isNaN(month, year) || (0 >= month || month > 13) || (999 > year || year > 10000)){
              console.log("Not a valid entry.");
            } else {
              valid = true;
            }
          } while (!valid);
        
        /** 
         * invoking day() function to calculate the day of month and year
         */
        
        var d = D.day(month, 1, year)
        console.log(d)
        /** 
         *initializing a res array with days of the week as array elements
         */
        var res = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"];
        
        if (d <= res.length) {
            console.log("The day is on :" + res[d])
        }
        /** 
         * invoking monthof() to find the days of the month and store it in days
         */
        var days = D.monthof(month)
        /** 
         * invoking monthof() to find the month of the year
         */
        var t1 = D.monthof(year)
        /** 
         * condition to check if the month 2 has 29 days
         */
        if (t1) {
            if (month == 2) {
                days = 29;
            }
        }
        /**
         * Loop to enqueue the weekdays into Queue.
         */
        for (let i = 0; i < res.length; i++) {
            weekdays.enQueue(res[i])
        }
        /**
         * Loop to enqueue the dates into Queue.
         */
        for (let i = 1; i <= days; i++) {

            dateq.enQueue(i)
        }
        /**
         * Loop the weekdays to deQueue from the queue and print it.
         */
        for (let i = 0; i < res.length; i++) {
            T.print(weekdays.deQueue() + "  ")
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            T.print(" ")
        }
        /**
         * Loop number of days to deQueue from the queue and print it.
         */
        for (let i = 1; i <= days; i++) {

            if (i < 10) {
                T.print(" " + dateq.deQueue() + "   ")
            }
            if (i > 9) {
                T.print("" + dateq.deQueue() + "   ")
            }
            if ((d + i) % 7 == 0) {
                console.log();
            }
        }
    
    }
    catch (err) {
        console.log(err.message);
    }
} calendar();

