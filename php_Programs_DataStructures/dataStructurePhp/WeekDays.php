<?php
/******************************************************************************
 *  Purpose         :To print the calendar
     
 *  @file           : weekOfDaysUsingQueue.js
 *  @overview       :Create the Week Object having a list of WeekDay objects each storing
                     the day (i.e  S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects
                     are stored using Linked List
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @since          : 15/02/2019
 ******************************************************************************/
//require functions and classes in below files to works
/**
 * Running the calender Using Queue
 */
require ("Utility.php");
    //Taking Month And Year from user
    echo "Enter Month ";
    $month = Utility::integer_Input();
    //validating month
    while ($month > 12) {
        echo "enter correct month ";
        $month = Utility::integer_Input();
    }
    echo "Enter Year ";
    $year = Utility::integer_Input();
    //validating year
    while ($year < 1000) {
        echo "enter correct year ";
        $year = Utility::integer_Input();
    }
    //Calculating the starting day of the month
    $start = Utility::day_of_week_cal(1, $month, $year);
    //Calculating the ending day of the month
    $totalDays = Utility::calTotal($month, $year);
    //calling method to print calender using queue
    Utility::calenderQueue($totalDays,$start);
    echo "\n";
?>
