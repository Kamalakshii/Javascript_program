/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To calculate the monthly payment
 *  @description    
 *  @file           :monthlyPayment.js
 *  @overview       :It calculates the monthly payments you
            would have to make over Y years to pay off a P principal loan amount at R  
            percent interest compounded monthly using the formulas
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * For accessing data from utility file
 */
var access = require('../Utility/utility');
var read = require('readline-sync');
/** *
 * accept command line arguments
 */
var principal =process.argv[2];
var year =process.argv[3];
var rate = process.argv[4];
/** 
 * invoking monthlyPayment() to calculate the monthly pay 
 */
access.monthlyPayment(principal,year,rate);
