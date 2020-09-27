// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const inquirer = require("inquirer");

class Intern {
    constructor(id, name, email, school) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = school;
    
    }

    getID() {
        return this.id;
    };

    getName() {
        return this.name;
    };

    getEmail() {
        return this.email;
    }
    
    getRole() {
        return "Intern";
    }
    
    getSchool() {
        return this.school;
        // inquirer.prompt ([
        //     {
        //         type: "input",
        //         message: "What school do you go to?",
        //         name: "school"
        //     }
        // ])
        
        // const school = new Intern()
    }

    
}

module.exports = Intern;