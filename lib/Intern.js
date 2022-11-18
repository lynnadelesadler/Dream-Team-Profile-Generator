//import employee constructor
const Employee = require("./Employee");

//Class intern constructor that extends employee class
class Intern extends Employee {
    constructor(name, id, email,school){
        //inherits these values from employee
        super (name, id, email);
        //extends constructor to set school
        this.school=school;
    }
//can get school via getSchool()
getSchool () {
    return this.school
}
    //getRole() returns Intern
    getRole (){
        return `Intern`
    }
}
//export Intern constructor
module.exports = Intern;