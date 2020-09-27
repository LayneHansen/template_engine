// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// const inquirer = require("inquirer");

class Engineer {
    constructor(id, name, email, github) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
    
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
        return "Engineer";
    }
    
    getGithub() {
        return this.github;   
    }

    
}

module.exports = Engineer;