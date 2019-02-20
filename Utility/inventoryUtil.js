module.exports = {
    /** 
     * creating an inventory object
     */
    inventory(object)
    {   
        try{
        /** 
         * creating an object of rice wheat and pulses
         */
        var rice = object.rice;
        var wheat = object.wheat;
        var pulses = object.pulses;
        /** 
         * for loop to calculate the total amount for rice
         */
        for( let key in rice)
        {
            console.log(rice[key]);
            console.log("Price of rice is: "+rice[key].price);
            console.log("weight of rice is :"+rice[key].weight);
            console.log("The total amount for rice is :"+Number((rice[key].price)*(rice[key].weight)));
        }
        /** 
         * for loop to calculate the total amount for wheat
         */
        for(let key in wheat)
        {
            console.log(wheat[key]);
            console.log("Price of wheat is: "+wheat[key].price);
            console.log("weight of wheat is :"+wheat[key].weight);
            console.log("The total amount for wheat is :"+(wheat[key].price)*(wheat[key].weight));
        }
        /** 
         * for loop to calculate the total amount for pulses
         */
        for(let key in pulses)
        {
            console.log(pulses[key]);
            console.log("Price of pulses is: "+pulses[key].price);
            console.log("weight of pulses is :"+pulses[key].weight);
            console.log("The total amount for pulses is :"+pulses[key].price*pulses[key].weight);
        }
    }
    catch(exception)
    {
        console.log(err);       
    }
}
}