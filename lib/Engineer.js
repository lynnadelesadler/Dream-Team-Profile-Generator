//import employee constructor
const Employee = require("./Employee");

//Class Engineer constructor that extends employee class
class Engineer extends Employee {
constructor(name, id, email, github) {
    //inherits values from employee
    super(name,id,email);
    //extends constructor to set GitHub account
    this.github=github;
}
//get GitHub username via getGithub()
getGithub(){
    return this.github
}
//getRole() returns Engineer
getRole () {
    return `Engineer`
 }
 }
//export Engineer constructor
module.exports = Engineer;