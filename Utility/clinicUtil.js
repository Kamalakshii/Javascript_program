var file = require('fs')
var readline = require('readline-sync')

class clinic {
    getNameFromDoctor(object) {
        /** 
         * it will give all thetotalCountames of stock in array
        */
         var nameArray = []
        var data = object.Doctor
        for (let key in data) {
            /*
            *looping over each element
            */
            nameArray.push(data[key].name)
        }
        return nameArray;//return array
    }
    /** 
    *@description:to take all the id in the object into the array  
    *@param:taking parsed object from the user
    */
    getIdFromDoctor(object) {
        /*
        *it will give all the names of stock in array
        */
        var nameArray = []
        var data = object.Doctor
        for (let key in data) {
            /** 
             * looping over each element
            */
             nameArray.push(data[key].Id)
        }
        return nameArray;
        /** 
         * return array
        */
    }
    /** 
     * to give all specialization in array
     */
    getSpecialisationFromDoctor(object) {
        var nameArray = []
        var data = object.Doctor
        for (let key in data) {
            nameArray.push(data[key].specialisation)
        }
        return nameArray;
        /** 
         * returning array
         */
    }
    getNameFromPatient(object) {
        /** 
         * it will give all the totalCountames of stock in array
        */
         var nameArray = []
        var data = object.Patient
        for (let key in data) {
            /** 
             * looping over each element
            */
            nameArray.push(data[key].name)
        }
        return nameArray;
    }
    getIdFromPatient(object) {
        /** 
         * it will give all the totalCountames of stock in array
        */
         var nameArray = []
        var data = object.Patient
        for (let key in data) {
            /** 
             * looping over each element
            */
             nameArray.push(data[key].Id)
        }
        return nameArray;
    }
    /** 
    *@description:to take all the phone numbers in the object into the array  
    *@param:taking parsed object from the user
    */
    getPhoneNumberFromPatient(object) {
        /** 
         * it will give all specialisation in array
        */
         var nameArray = []
        var data = object.Patient
        for (let key in data) {
            /** 
             * looping over each element
            */
             nameArray.push(data[key].phoneNumber)
        }
        return nameArray;
    }
    /** 
    *@description:to take all the deatails of thedoctore and patients and maintaining the appointment of the doctors 
    *@param:taking parsed object from the user
    */
    clinicManagement(object) {

        var doctor = object.Doctor;
        var patient = object.Patient
        var count = patient.length;
        console.log('enter 1 to search for doctor')
        console.log('enter 2 to search for patient')
        console.log('enter 3 to take appointment')
        /** 
         * ask the user to enter the choice
         */
        var ans = readline.question('enter the choice')
        if (ans == 1) {
            console.log('enter the 1 to search doctor by his name')
            console.log('enter 2 to search doctor by his id')
            console.log('enter 3 to search doctor by his specialisation')
            var choice = readline.questionInt('enter ur choice')
            if (choice == 1) {
                console.log("name of the doctors are - " + this.getNameFromDoctor(object))
                var name = readline.question('enter the name of the doctor')
                while (!this.getNameFromDoctor(object).includes(name)) {
                    /** 
                     * if the array includes the user giventotalCountame ony that time it will remove 
                    */
                     console.log('enter the valid name')
                    name = readline.question('enter the name u want to search')
                }
                for (let key in doctor) {
                    if (doctor[key].name == name) {
                        console.log('ur doctor details')
                        console.log(doctor[key])
                    }
                }
            }
            else if (choice == 2) {
                console.log("id of the doctors are - " + this.getIdFromDoctor(object))
                var Id = readline.question('enter the id of the doctor')
                while (!this.getIdFromDoctor(object).includes(Id)) {
                    /** 
                     * if the array includes the user giventotalCountame ony that time it will remove 
                    */
                     console.log('enter the valid Id')
                    Id = readline.question('enter the Id u want to search')
                }
                for (let key in doctor) {
                    if (doctor[key].Id == Id) {
                        console.log('ur doctor details')
                        console.log(doctor[key])
                    }
                }
            }
            else if (choice == 3) {
                console.log("specialisation of the doctors are - " + this.getSpecialisationFromDoctor(object))
                var specialisation = readline.question('enter the specialisation of the doctor')
                while (!this.getSpecialisationFromDoctor(object).includes(specialisation)) {
                    /**
                    if the array includes the user giventotalCountame ony that time it will remove 
                    */
                    console.log('enter the valid specialisation')
                    specialisation = readline.question('enter the specialisation u want to search - ')
                }
                for (let key in doctor) {
                    if (doctor[key].specialisation == specialisation) {
                        console.log('ur doctor details')
                        console.log(doctor[key])
                    }
                }

            }
            else {
                console.log('enter valid input')
            }
        }
        /** 
         * @description:if the input is 2 then search for the patients that are in the hospital
        */
        else if (ans == 2) {
            console.log('enter the 1 to search patient by his name')
            console.log('enter 2 to search patient by his id')
            console.log('enter 3 to search patient by his phonenumber')
            var choice = readline.questionInt('enter ur choice')
            if (choice == 1) {
                console.log("name of the doctors are - " + this.getNameFromPatient(object))
                var name = readline.question('enter the name of the doctor')
                while (!this.getNameFromPatient(object).includes(name)) {
                    /** 
                     * if the array includes the user giventotalCountame ony that time it will remove 
                    */
                     console.log('enter the valid name')
                    name = readline.question('enter the name u want to search')
                }
                for (let key in patient) {
                    if (patient[key].name == name) {
                        console.log('ur patient details')
                        console.log(patient[key])
                    }
                }
            }
            else if (choice == 2) {
                console.log("id of the patient are - " + this.getIdFromPatient(object))
                var Id = readline.question('enter the id of the patient')
                while (!this.getIdFromPatient(object).includes(Id)) {
                    /**
                     * if the array includes the user giventotalCountame ony that time it will remove 
                    */
                     console.log('enter the valid Id')
                    Id = readline.question('enter the Id u want to search')
                }
                for (let key in patient) {
                    if (patient[key].Id == Id) {
                        console.log('ur patient details')
                        console.log(patient[key])
                    }
                }
            }
            else if (choice == 3) {
                console.log("phonenumber of the patients are - " + this.getPhoneNumberFromPatient(object))
                var phoneNumber = readline.question('enter the phoneNumber of the patient')
                while (!this.getPhoneNumberFromPatient(object).includes(phoneNumber)) {
                    /**
                     * if the array includes the user giventotalCountame only that time it will remove 
                    */
                     console.log('enter the valid phonenum')
                    phoneNumber = readline.question('enter the phonenumber u want to search')
                }
                for (let key in patient) {
                    if (patient[key].phoneNumber == phoneNumber) {
                        console.log('ur patient details')
                        console.log(patient[key])
                    }
                }

            }
            else {
                console.log('enter valid input')
            }
        }
        /** 
         * @description:if the input is 3 then take the appointment from the doctor and give timing to the patients
        */
        else if (ans == 3) {
            count++;
            var date = new Date();
            if (count > 5) {
                var rem = Math.floor(count / 5)
                var day = (date.getDate()) + rem;
            }
            else {
                var day = date.getDate()
            }
            var name = readline.question("enter the patientname")
            var age = readline.questionInt("enter the age of the patient")
            var Id = Math.floor(Math.random() * 100000)
            var phoneNumber = readline.questionInt('enter the phoneNumber')
            while (phoneNumber > 9999999999 || phoneNumber < 999999999) {
                console.log("number should be of 10 digit")
                phoneNumber = readline.questionInt('enter different phone number')
            }
            console.log("doctors that are present are")
            console.log(this.getNameFromDoctor(object))
            var appointmentFrom = readline.question('enter the doctor name from u want to take appointment')
            patient.push({
                "name": name,
                "Id": Id,
                "phoneNumber": phoneNumber,
                "age": age,
                "appointmentFrom": appointmentFrom,
                "onTheDayOf": day
            })
            file.writeFileSync('clinicManagement.json', JSON.stringify(object))
            console.log("your appointment is confirmed on " + day)
        }
        else
            console.log('enter valid input')
    }
}
module.exports = { clinic }