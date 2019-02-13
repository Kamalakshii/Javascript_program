class player
{
    constructor(cards)
    {
        this.cards = cards;
    }
    sortedCards()
    {
    
        var sortedCards =[]
        var D = require("../Utility/utility");
        sortedCards = this.cards.sort();
        //sortedCards = D.bubbleSort(this.cards);
        return sortedCards;
    }
}
module.exports = {player}