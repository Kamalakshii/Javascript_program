/**
 *creating a class stock 
 */
class Stock
{
    constructor(name,shares,price)
    {
        this.name = name;
        this.price = price;
        this.shares = shares;
    }
    /** 
     * to calcu;late the total value of stock
     */
    totalStockValue()
    {
        return this.shares*this.price;
    }
}
module.exports = {Stock}