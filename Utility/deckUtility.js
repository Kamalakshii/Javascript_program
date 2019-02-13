
module.exports = {
    deckOfCards()
    {
        /** 
         * initialize suit and rank
         */
        var suit = ["♠" , "♣", "♦" , "♥"]
        var rank = [ "2" , "3" ,"4" ,"5", "6","7","8", "9", "10", "King","Queen", "Jack","Spade"]
        var cards = [];
        /** 
         * to calculate total number of cards
         */
        var totalCards = suit.length * rank.length;
        for(let i = 0 ; i < suit.length ; i++)
        {
            for(let j = 0 ; j<rank.length ;j++)
            {
                cards.push(rank[j]+suit[i])
            }
        }
        var x , temp;
        /** 
         * for loop to shuffle cards using random function
         */
        for(let index = 0; index < totalCards ;index++)
        {
            x = Math.floor(Math.random()*totalCards);
            temp = cards[x];
            cards[x] = cards[index];
            cards[index] = temp;
        }
        var personCards = [ [],[],[],[] ];
        var y = 0;
        /** 
         *  for loop to distribute 9 cards to 4 person
         */
        for( let person = 0; person < 4 ; person++)
        {
            for(let card = 0; card < 9; card++)
            {
                personCards[person][card] = cards[card+y];
            }
            y = y + 9;
        }
        for(let k = 0 ;k< personCards.length ; k++)
        {
            console.log("person"+(k+1)+"["+personCards[k]+"]"); 
        }
        return cards
    }
}
    
