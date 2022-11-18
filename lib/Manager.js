//import employee constructor
const Employee = require("./Employee");

//Class Manager constructor extends employee class
class Manager extends Employee {
    constructor(name, id, email,officeNumber){
        //inherits these values from employee
        super (name, id, email);
        //extends constructor to set office number
        this.officeNumber=officeNumber;
    }
//get office number via getOfficeNumber()
getOfficeNumber () {
    return this.officeNumber
}
    //getRole() returns Manager
    getRole (){
        return `Manager`
    }
}
//export Manager constructor
module.exports = Manager