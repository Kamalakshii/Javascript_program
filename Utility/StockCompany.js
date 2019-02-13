var readline = require('readline-sync');
var file = require('fs');
var  M = require('../Utility/utilityDataStructure');
//var linkedList = new M.LinkedList();
class StockCompany
{
    constructor()
    {}
    commercial(data, data1, data2) {
        var answer = readline.question("Press.. \n 1. create \n 2. open \n 3. edit \n 4. exit  ");
        if (answer == 1) {
            this.create(data, data1, data2);
        }
        else if (answer == 2) {
            this.open(data, data1, data2);
        }
        else if (answer == 3) {
            this.edit(data);
        }
        else if (answer == 4) {
            console.log("  Thanks for your transaction ");
            return;
        }
        else {
    
            console.log(" Invalid input ");
        }
    }
    
    create(data, data1, data2) {
        var ask = readline.question(" Are you a exsting user \n if yes press 1. \n if No press 2.  ");
        if (ask == 1) {
            if (data1.user.length == 0) {
                console.log(" No users available  ");
                return;
            }
            else {
                var que = readline.question(" Enter your existing id ");
                for (let i = 0; i < data1.user.length; i++) {
                    if (data1.user[i].id == que) {
                        console.log(data1.user[i]);
                        this.purchase(data, data1, data2);
                    }
                }
            }
        }
        else if (ask == 2) {
            let nam = readline.question(" Enter your name ");
            let idn = readline.question(" Enter the user id ");
            let amo = readline.question(" Enter your amount ");
            let shar = readline.question(" Enter your shares ");
            data1.user.push({
                name: nam,
                id: idn,
                symbol: "",
                amount: amo,
                shares: shar
            })
            var read = readline.question(" To save information Enter 1.");
            if (read == 1) {
                filestream.writeFileSync("customer.json", JSON.stringify(data1));
                console.log(" Your information added ");
            }
            else {
                console.log(" Invalid input ");
            }
    
        }
    }
    open(data, data1, data2) {
        let read = readline.question(" Enter your customer ID ");
        var flag = true;
        if (flag)
            for (let i = 0; i < data1.user.length; i++) {
                if (data1.user[i].id == read) {
                    
                    console.log(data1.user[i]);
                    flag = true;
                    this.purchase(data, data1, data2);
                }
                else {
                    flag = false
                    //     } for (let i = 0; i < data1.user.length; i++) {
                    //         if (data1.user[i].id == read) {
    
                    // }
                    if (flag == false) {
                        console.log(" No users found ");
                    }
                }
            }
    }
    purchase(data, data1, data2) {
        let ask = readline.question(" press \n 1. buy shares \n 2. sell shares \n 3. add money \n 4. display  \n 5. exit ");
        if (ask == 1) {
            for (var key in data.company) {
                console.log(" Company details ")
                console.log(data.company[key]);
            }
            let que = readline.question(" Please, Enter your id ");
            var flag = false;;
            for (let i = 0; i < data1.user.length; i++) {
                if (data1.user[i].id == que) {
                    var useramt=data1.user[i].amount;
                    var cmpshare=data.company[i].shares;
                    var found = data1.user[i];
                    flag = true;
                    //console.log(data1.user[i]);
                }
                else {
                    flag = false;
                    //console.log("No such id found ");
                }
            }
            if (flag == false) {
                console.log(found);
            }
            else {
                console.log("No such id found ");
            }
            let read = readline.question(" Enter the company symbol ");
            for (let i = 0; i < data.company.length; i++) {
                if (data.company[i].symbol == read) {
                    var compamt=data.company[i].share_per_price;
                    var cmpshare=data.company[i].shares;
                    var get = data.company[i];
                }
            }
    
    let buy = readline.question(" Enter how many shares do you want to buy from this company ");
        for (let i=0;i<buy;i++)
        {
            let que = readline.question(" Please, Enter your id ");
            var flag = false;;
            for (let i = 0; i < data1.user.length; i++) {
                if (data1.user[i].id == que) {
                    var useramt=data1.user[i].amount;
                    var cmpshare=data.company[i].shares;
                    var found = data1.user[i];
           
        }
    
        }
    }
    }
        else if(ask==3)
        {
            let que = readline.question(" Please, Enter your id ");
            var flag;;
            for (let i = 0; i < data1.user.length; i++) {
                if (data1.user[i].id == que) {
                    var found = data1.user[i];
                    flag=true;
                }
                else{
                    flag=false;
                }
        }
       if(flag==true)
       {
           var amoun=readline.question(" Enter your amount do you want to add in account ")
           for(let i=0;i<data1.user.length;i++)
           {
               if(data1.user[i].id==que)
               {
                   data1.user.amount=amoun;
               }
           }
           filestream.writeFileSync("customer.json", JSON.stringify(data1));
                console.log(" Your amount is  added ");
       }
       else{
           console.log(" No user found");
       }
    }
    
    }
    }module.exports={StockCompany}