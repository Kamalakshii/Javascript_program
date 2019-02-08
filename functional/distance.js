/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To calculate the Euclidean distance from the point (x, y) to the 
                     origin (0, 0).
 * 
 *  @description    
 *  @file           : distance.js
 *  @overview       : It takes two commandline  to calculate the distance.
                      The formulae to calculate distance = sqrt(x*x + y*y)and uses
                      Math.power function
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
 * invoke calculateDistance() function to calculate the distance
 */
access.calculateDistance();