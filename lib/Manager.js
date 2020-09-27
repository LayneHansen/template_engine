// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager {
    constructor(id, name, email, officeNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
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
        return "Manager";
    }
    
    getOfficeNumber() {
        return this.officeNumber;   
    }

    
}

module.exports = Manager;