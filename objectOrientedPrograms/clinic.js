var read = require('readline-sync')
var access = require('../Utility/clinicUtil')
var file = require('fs')
function clinicManagement() {
 try {
 var data = file.readFileSync('clinicManagement.json', 'utf8')
 var object = JSON.parse(data)
 var obj = new access.clinic;
 obj.clinicManagement(object);
 } catch (err) {
 console.log(err.message);

 }
} clinicManagement();