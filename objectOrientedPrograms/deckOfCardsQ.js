/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To initialize deck and cards having suit and rank using queue
 *  @file           : deckOfCardsQ.js
 *  @overview       :Shuffle the cards using Random method and then
                    distribute 9 Cards to 4 Players and Print the Cards the received 
                    by the 4 Players in aqueue implemented linked list
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 11/01/2019
 ******************************************************************************/
/** 
 * to access data from utility file
 */
var utilityOops = require("../Utility/deckUtility");
var accessPlayer = require("./player");
var utilityDs = require("../Utility/utilityDataStructure");
function main() {
  try {
    var totalCards = utilityOops.deckOfCards();
    var player1Cards = [];
    var player2Cards = [];
    var player3Cards = [];
    var player4Cards = [];
    /**
     * Loop to distribute 13 cards from the total cards.
     */
    for (let player1 = 0; player1 < totalCards.length; player1++) {
      if (player1 >= 0 && player1 < 13) {
        player1Cards[player1] = totalCards[player1];
      } else if (player1 >= 13 && player1 < 26) {
        player2Cards[player1 - 13] = totalCards[player1];
      } else if (player1 >= 26 && player1 < 39) {
        player3Cards[player1 - 26] = totalCards[player1];
      } else {
        player4Cards[player1 - 39] = totalCards[player1];
      }
    }
    /**
     * Create 4 player objects by passing 13 cards to each of them.
     */
    playerOne = new accessPlayer.player(player1Cards);
    playerTwo = new accessPlayer.player(player2Cards);
    playerThree = new accessPlayer.player(player3Cards);
    playerFour = new accessPlayer.player(player4Cards);
    /**
     * Invoke sortedCards function to get the sortedcards.
     */
    var sortedCards1 = playerOne.sortedCards();
    var sortedCards2 = playerTwo.sortedCards();
    var sortedCards3 = playerThree.sortedCards();
    var sortedCards4 = playerFour.sortedCards();
    /**
     * Create a new queue object which implements LinkedList.
     */
    var queue = new utilityDs.LinkListQ();
    /**
     * Enqueue each set of sortedCards to the queue
     */
    queue.enQueue(sortedCards1);
    queue.enQueue(sortedCards2);
    queue.enQueue(sortedCards3);
    queue.enQueue(sortedCards4);
    /**
     * Dequeue the cards and print it to the console.
     */
    console.log("\nCards recieved by player 1 :" + queue.deQueue());
    console.log("Cards recieved by player 2 :" + queue.deQueue());
    console.log("Cards recieved by player 3 :" + queue.deQueue());
    console.log("Cards recieved by player 4 :" + queue.deQueue());
    console.log();
  } catch (error) {
    console.log(error.message);
  }
}
main();
