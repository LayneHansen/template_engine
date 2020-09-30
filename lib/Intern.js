// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
    }

    getRole() {
        return "Intern";
    }
    
    getSchool() {
        return this.school;
        inquirer.prompt ([
            {
                type: "input",
                message: "What school do you go to?",
                name: "school"
            }
        ])
        
        const school = new Intern()
    }

    
}

module.exports = Intern;