<?php
/******************************************************************************
 *  Purpose         : To print the table of power of 2.
 *  @file           : powerOfTwo.js
 *  @description    : To Accept value of "N" from user and prints a table of the powers of 2 
                      that are less than or equal to 2^N. value of N should be less then 31.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @since          : 18/02/2019
 ******************************************************************************/
include "../phpUtility/utilityFunctional.php";
$power = $argv[1];
Utility :: powerOfTwo($power);
?>