var utility = require("../Utility/utilityObjectOriented");
var fs = require("fs");
  var data = fs.readFileSync("inventoryDataManagement.json");

  /*When receiving data from a web server, the data is always a string.
    Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    */
  var object = JSON.parse(data); //JSON.parse() to convert text into a JavaScript object

function inventoryDataManagement() {
 utility.inventory(object);
}
inventoryDataManagement();