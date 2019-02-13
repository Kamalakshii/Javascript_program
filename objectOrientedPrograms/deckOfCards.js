/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To initialize deck and cards having suit and rank
 *  @file           : deckOfCards.js
 *  @overview       :Shuffle the cards using Random method and then
                    distribute 9 Cards to 4 Players and Print the Cards the received 
                    by the 4 Players
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 11/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var utility = require('../Utility/deckUtility');
/** 
 * invoking deckOfCards function to distribute 9 cards to 4 players
 */
utility.deckOfCards();
