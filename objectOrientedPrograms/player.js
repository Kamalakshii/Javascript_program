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
        return sortedCards;
    }
}
module.exports = {player}