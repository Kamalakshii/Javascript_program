/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To calculate the windchill.
 *  @description    
 *  @file           :windChill.js
 *  @overview       :using Math.pow(a, b) Given the temperature t (in Fahrenheit) and 
                     the wind speed v (in miles per hour),the effective temperature is found using the formula.
         
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * For accessing data from utility file
 */
var access = require('../Utility/utility');
var read = require('readline-sync');
/** 
 * invoking windChill() to calculate the effective temperature.
 */
access.windChill();