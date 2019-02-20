<?php
/******************************************************************************                
 *  Purpose         : To initialize deck and cards having suit and rank
 *  @file           : deckOfCards.php
 *  @overview       : Shuffle the cards using Random method and then
                      distribute 9 Cards to 4 Players and Print the Cards the received 
                      by the 4 Players
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @since          : 19/02/2019
 ******************************************************************************/
 /**Program to initialize deck of cards having suit and
  * Rank, Shuffle the cards using Random method and then distribute 9 Cards 
  * to 4 Players and Print the Cards received by the 4 Players  **/
    //require the following function to work
    require ('Utility.php');
    require_once ('deckOfCards.php');
    try
    {
        //instantiating DeckOfCards class
        $cards = new DeckOfCards();
        //calling method to initialize the array of cards
        $card = $cards->initializeCards();
        //number of times to shuffle input
        echo "enter the number of times to shuffle \n";
        $num = Utility::integer_Input();
        
        //looping over and shuffling number of times given by user
        while($num>0)
        {
            $card = $cards->shuffleCards();
            $num--;
        }
        
        //distributing cards to players
        echo "Distributing cards to four players\n";
        $card = $cards->distributeCards($card,4,9);
        //printing the distributed cards
        $cards->printCards($card);
    }
    catch(Exception $e)
    {
        echo $e.getMessage();
    }
?>
