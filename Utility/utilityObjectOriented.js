
module.exports = {
    inventory(object)
    {
        var rice = object.rice;
        var wheat = object.wheat;
        var pulses = object.pulses;
        for( let key in rice)
        {
            console.log(rice[key]);
            console.log("Price of rice is: "+rice[key].price);
            console.log("weight of rice is :"+rice[key].weight);
            console.log("The total amount for rice is :"+Number((rice[key].price)*(rice[key].weight)));
        }
        for(let key in wheat)
        {
            console.log(wheat[key]);
            console.log("Price of wheat is: "+wheat[key].price);
            console.log("weight of wheat is :"+wheat[key].weight);
            console.log("The total amount for wheat is :"+(wheat[key].price)*(wheat[key].weight));
        }
        for(let key in pulses)
        {
            console.log(pulses[key]);
            console.log("Price of pulses is: "+pulses[key].price);
            console.log("weight of pulses is :"+pulses[key].weight);
            console.log("The total amount for pulses is :"+pulses[key].price*pulses[key].weight);
        }

    }
}