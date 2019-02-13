var read = require('readline-sync')
var file = require('fs')
var sort = require('./utility')
class Person
{
    constructor(fname, lname, city, st, zip, phnNum)
    {
        this.firstName = fname;
        this.lastName = lname;
        this.city = city;
        this.state = st;
        this.zipCode = zip;
        this.phnNumber = phnNum;
    }
}
class AddressBook
{
    constructor()
    {

    }
    address(data)
    {
        console.log("Enter 1 for add person information")
        console.log("Enter 2 for update person information")
        console.log("Enter 3 for remove person information")
        console.log("Enter 4 for sort the addressbook based on ZIP")
        console.log("Enter 5 for sort the addressbook based on firstname")
        console.log("Enter 6 for Print all addressbook information")
        var num = read.questionInt("Select  any number:")
        switch (num) {
            case 1: this.addPerson(data)
                break;
            case 2: this.updatePerson(data)
                break;
            case 3: this.removeperson(data)
                break;
            case 4: this.sortzip(data)
                break;
            case 5: this.sortfname(data)
                break;
            case 6: this.printadd(data)
                break;

        }
 
    } 
    addPerson(data)
    {
        
        var fname = read.question("enter the first name of person");
        var lname = read.question("enter the last name of the person");
        var city1 = read.question("enter the city of person");
        var state1 = read.question("enter state of the person");
        var zip = read.questionInt("enter the zip");
        var phonenum1 = read.questionInt("enter the phone number");
        var o = new Person(fname , lname, city1, state1, zip, phonenum1);
        data.Person.push(
            {
                personfname : fname,
                personlname : lname,
                phonenumber :phonenum1,
                city :city1,
                state : state1,
                zip : zip
            }
        )
        var d = file.writeFileSync('s.json',JSON.stringify(data))
    }  
    updatePerson(data)
    {
        var name = read.question("enter first name of the person");
        
        for(let i = 0 ; i < data.Person.length; i++)
        {
            if(data.Person[i].personfname == name)
            {
                var index = data.Person.indexOf(data.Person[i]);
                console.log("select the information to be updated");
                console.log("enter 1 to update the first name ");
                console.log("enter 2 to update the last name");
                console.log("enter 3 to update phonenumber");
                console.log("enter 4 to update city ");
                console.log("enter 5 to update state");
                console.log("enter 6 to update zip");
                var num1 = read.questionInt("choose any number");
                while(num1 < 7){
                switch(num1)
                {
                    case 1 : this.firstname(data , index)
                    break;
                    case 2 : this.lastname(data , index)
                    break;
                    case 3 : this.phonenumber(data , index)
                    break;
                    case 4 : this.city(data , index)
                    break;
                    case 5 : this.state(data , index)
                    break;
                    case 6 : this.zipcode(data , index)
                    break;
                }
            }var num1 = read.question("choose number in the given range");         
    }
}
    }
    firstname(data , index)
    {
        var fname1 = read.question("enter the new fname that has to be changed to")  
        if(isNaN(fname1) && fname1.length > 0)  
        {
        data.Person[index].personfname = fname1;}
        else{
            console.log("enter valid firstname"); 
        var fname1 = read.question("enter the new fname that has to be changed to")
        }
        var d =file.writeFileSync('AddressBook.json',JSON.stringify(data))
        
       
    }
    lastname(data , index)
    {
        
        var lname1 = read.question("enter the new lname that has to be changed to")
        if(isNaN(lname1) && lname1.length > 0)  
        {
        data.Person[index].personlname = lname1;}
        else{
            console.log("enter valid lastname");
            var lname1 = read.question("enter the new lname that has to be changed to");
        }
        var d =file.writeFileSync('AddressBook.json',JSON.stringify(data))
    }
    phonenumber(data , index)
    {
        var phonenumber1 = read.question("enter the new phnnum that has to be changed to")
        if(!isNaN(phonenumber1) && phonenumber.length == 10)  
        {
        data.Person[index].phonenumber = phonenumber1;
        }
        else{
            console.log("enter valid phone number");
            var phonenumber1 = read.question("enter the new phnnum that has to be changed to")
        }
        var d =file.writeFileSync('AddressBook.json',JSON.stringify(data))
    }
    city(data , index)
    {
        var cityname = read.question("enter the new city that has to be changed to")
        if(isNaN(cityname) && cityname.length > 0)  
        {
        data.Person[index].city = cityname;}
        else{
            console.log("enter valid city name");
            var cityname = read.question("enter the new city that has to be changed to")
        }
        var d =file.writeFileSync('AddressBook.json',JSON.stringify(data))
    }
    state(data , index)
    {
        var statename = read.question("enter the new state that has to be changed to") 
        if(isNaN(statename) && statename.length >0)  
        {   
        data.Person[index].state = statename;}
        else{
            console.log("enter valid state name");    
            var statename = read.question("enter the new state that has to be changed to")
        }
        var d = file.writeFileSync('AddressBook.json',JSON.stringify(data))
    }
    zipcode(data , index)
    {
        var zip = read.question("enter the new zip that has to be changed to")    
        if(!isNaN(zip) && zip.length > 0)  
        {   
        data.Person[index].zipcode = zip;}
        else{
            console.log("enter valid zip code");    
            var zip = read.question("enter the new zip that has to be changed to") 
        }
        var d = file.writeFileSync('AddressBook.json',JSON.stringify(data));
    }
    removeperson(data){

        var name = read.question("enter name of person to be remove:")
        if(isNaN(name) && name.length > 0){
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personfname == name) {
                var index = data.Person.indexOf(data.Person[i]);
                var dd = data.Person.splice(index, 1);
            }
        }}
        else{
            console.log("enter valid name to be removed");
            
            
        }
            var d = file.writeFileSync('AddressBook.json', JSON.stringify(data))

        }

    
  /**  sortfname(data){
        let fname=data.Person;
        function sortbyfname(a, b) {
            if (a.personfname == b.personfname);
            return 0
            if (a.personfname > b.personfname);
            return 1
            if (a.personfname < b.personfname);
            return -1
        }
        var result = fname.sort(sortbyfname);
        console.log(result);
    }*/
    sortfname(data)
    {
        let fname = data.Person;
    fname.sort(function(a, b){
        if(a.personfname < b.personfname) { return -1; }
        if(a.personfname > b.personfname) { return 1; }
        return 0;
    })
    }
    sortzip(data)
    {
        let refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);
    }
    printadd(data)
    {
        var person = data.Person
        for (const key in person) {
            console.log(person[key])
        }
    }
}
 module.exports = {Person,AddressBook}

