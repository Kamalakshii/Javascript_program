<?php
/******************************************************************************
 *  Purpose         : Print Number of Wins and Percentage of Win and Loss
 *  @file           : gambling.php
 *  @description    : Simulates a gambler who start with $stake and place fair $1 bets until
                      he/she goes broke or reach $goal. Keeps track of the number of
                      times he/she wins and the number of bets he/she makes. Runs the experiment N
                      times, averages the results, and prints them out.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 14/02/2019
 ******************************************************************************/
include "../phpUtility/utilityFunctional.php";
Utility :: gambling();
?>