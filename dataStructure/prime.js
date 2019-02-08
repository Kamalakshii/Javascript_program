/******************************************************************************
 *  Execution       :Default node         cmd> node fileName.js                 
 *  Purpose         :To print the numbers fin the range 1-1000 which are prime.
 *  @description    :Take a range of 0 - 1000 Numbers and find the Prime numbers in that 
                     range. Store the prime numbers in a 2D Array, the first dimension
                     represents the range 0-100, 100-200, and so on.
 *  @file           :prime.js
 *  @overview       :
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 04/02/2019
 ******************************************************************************/
/** 
 * To access data from utility file and utilityDataStructure
 */
 var accessDs=require('../Utility/utilityDataStructure');
var access = require('../Utility/utility');
/** 
 * prime() function to find the prime numbers in the given range
 */
function prime()
{
    /** 
     * initialize prime  array , first and last
     */
    var prime=[];
    var first=0;
    var last=100;
    /** 
     * loop until 10 and invoke isprime() and store it in array
     */
    for(let i=0;i<10;i++)
    {
        prime[i]=accessDs.isPrime(first,last);
        console.log("[" + "[" +first+" "+last+"]" + "["+prime[i]+"]" +"]");
        /** 
         * increment first and last by 100
         */
        first=first+100;
        last=last+100;

    }
}
prime();