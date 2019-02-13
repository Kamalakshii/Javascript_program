/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         :To design and maintain an address book
 *  @description    
 *  @file           :AddressBook.js
 *  @overview       :used to maintain an address book. An address book holds a collection 
                     entries, each recording a person's first and last names, address, city,
                     state, zip, and phone number.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var M = require('../Utility/Address')
var file = require('fs');
var data1 = file.readFileSync('s.json','utf8');
var data = JSON.parse(data1);
/** 
 * creating an object of AddressBook
 */
var object = new M.AddressBook;
/** 
 * invoking address function to hold the collection of entries
 */
object.address(data);