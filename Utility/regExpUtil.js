module.exports = {
    regexp(name,fullName,contactNumber,date)
    {
        try{
        /** 
         * to read data from the file
         */
        var file = require("fs");
        var data = file.readFileSync("regExp.txt","utf8")
        /**
         *using replace funtion to replace the name,fullname,contactnumber 
         */
        data = data.replace(/<<name>>/g,name);
        data = data.replace(/<<fullName>>/g,fullName);
        data = data.replace(/<<xxxxxxxxxx>>/g,contactNumber);
        /** *
         * replacing date with current date
         */
        data = data.replace(/<<xx-xx-xxxx>>/g,date);
        console.log();
        console.log(data);
    }
    catch(exception)
        {
            console.log(err);
        }
}
}
