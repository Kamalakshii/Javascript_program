/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To convert the temperature from celcius to fahrenheit and vice-versa.
 *  @description    
 *  @file           :convertTemperature.js
 *  @overview       :The user should input the choice 1 or choice 2 in order to convert 
                    to celcius or fahrenheit.The function uses the formula celcius =(temperature -32)*(5/9) and
                    fahrenheit = temperature * (9/5)+32 respectively
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
 * invoking convertTemperature to convert the temperature from celcius to fahrenheit and vice versa
 */
access.convertTemperature();
