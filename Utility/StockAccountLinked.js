var read = require('readline-sync');
var file = require('fs');
var  M = require('../Utility/utilityDataStructure');
var linkedlist = new M.LinkedList();
var s = 0;
class StockAccountLinked
{
    constructor()
    {

    }
    stockCreate(data)
    {
        var name1 = read.question("enter the name : ");
        var id1 = Math.floor(Math.random()*100);
        console.log(id1);
        
        data.customer.push(
            {
            name : name1,
            id : id1       
            } 
        )
       console.log(data.customer);
        
        var d = file.writeFileSync('customer.json',JSON.stringify(data));
    }
    /** 
     * to buy the shares
     */
    buy(data,data1)
    {
        console.log(data);
        var object = data.customer;
        var id1 = read.question("enter the id :");
        for(let i in object)
        {
            if(object[i].id == id1)
            {
                var index = data.customer.indexOf(data.customer[i]);
                var customername = object[i].name;
                console.log("company information");
                console.log(data1);
                var name1 = read.question("enter name of company share you want to buy")
                var object1 = data1.company;
                for(let i in object1)
                {
                    if(object1[i].name == name1)
                    {
                        console.log("company number of shares price of each share");
                        console.log(object1[i]);
                        var name10 = object1[i].name;
                        var number = read.questionInt("enter the number of shares you want to buy");
                        var s = "customer name :"+customername+ "and name of company "+name10+"buy number of shares "+number;
                        console.log(s);
                       
                     //   this.stackps(s);
                        var time = new Date();
                        var time1 = "time of buying the share is "+time;
                        this.queuetime(time1);
                        var n = parseInt(data.customer[index].share)
                        var n11 = parseInt(data1.company[i].share)
                        var num = parseInt(number);
                        var n1 = n + num;
                        var n2 = n11 - num;
                        if(n11 > num )
                        {
                            data.customer[index].share = n1;
                            data1.company[i].share = n2;
                            var d = file.writeFileSync('customer.json',JSON.stringify(data));
                            //console.log(d) 
                
                            var d1 = file.writeFileSync('company.json',JSON.stringify(data1));
                        }
                    }
                }
            }
        } 
    }
    sell(data , data1)
    {
        console.log(data);
        var object = data.customer;
        var id1 = read.question("enter the id :");
        for(let i in object)
        {
            if(object[i].id == id1)
            {
                var index = data.customer.indexOf(data.customer[i])
                var customername1 = object[i].name;
                console.log("company information");
                console.log(data1);
                var name1 = read.question("enter name of company you want to sell");
                var object1 = data1.company;
                for(let i in object1)
                {
                    if(object1[i].name == name1)
                    {
                        console.log("company number of shares and price of each share");
                        console.log(object1[i]);
                        var name11 = object1[i].name;
                        var number = read.questionInt("enter how many shares you want to sell");
                        var s = "customer name :"+customername1+ "and name of company "+name11+"sell number of shares "+number;
                        console.log(s);
                       // this.stackps(s);
                        var time = new Date();
                        var time1 = "time of selling the share is "+time;
                        this.queuetime(time1);
                        var n = parseInt(data.customer[index].share)
                        var n11 = parseInt(data1.company[i].share)
                        var num = parseInt(number);
                        var n1 = n - num;
                        var n2 = n11 + num;
                        data.customer[index].share = n1;
                        data1.company[i].share = n2;
                        var d = file.writeFileSync('customer.json',JSON.stringify(data));
                        var d1 = file.writeFileSync('company.json',JSON.stringify(data1));
                    }
                }
            }
        }
    }
  /**   stackps(s)
    {
        var stack = M.StackLinkedList;
        stack.push(s);
        stack.print();
    }*/
    queuetime(time)
    {
        var queue = M.LinkedList
        queue.add(time);
        queue.printList();
    }
    print(data , data1)
    {
        console.log("customer shares information :");
        console.log(data);
        console.log("company shares information :");
        console.log(data1);    
    }
}
class CompanyShares
{
    create(data)
    {
        var name1 = read.question("enter name of the company");
        var share1 = read.question("enter the shares of the company");
        var price1 = read.question("enter price of each share")
        data.company.push(
            {
                name : name1,
                share : share1,
                price :price1
            }
        )
        var d1 = file.writeFileSync('Company.json', JSON.stringify(data));
        var companys = data.company;
        for(let i in companys)
        {
            linkedlist.add(data.company[i]);
        }
        console.log(linkedlist);
        
    }
    print(data)
    {
        console.log(data);
    }
    remove(data)
    {
        name1 = read.question("enter the name to be removed")
        console.log(linkedlist);
    }
}
module.exports = { StockAccountLinked,CompanyShares}