const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer.js");
const totalEmployees = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// prompt inquirer, creates a manager

function start() {

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's ID number?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            },
            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices:
                    [
                        "Manager",
                        "Engineer",
                        "Intern"
                    ]
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
                when: function (data) {
                    return data.role === "Manager";
                }
            },
            {
                type: "input",
                message: "What is the engineer's github username?",
                name: "github",
                when: function (data) {
                    return data.role === "Engineer";
                }
            },
            {
                type: "input",
                message: "Where does the intern go to school?",
                name: "school",
                when: function (data) {
                    return data.role === "Intern";
                }
            },
            {
                type: "confirm",
                message: "Do you want to add any more employees?",
                name: "addEmployee",
            },

        ])

        .then((data) => {

            if (data.role === "Manager") {
                var manager = new Manager(data.id, data.name, data.email, data.officeNumber);
                totalEmployees.push(manager);
            } else if (data.role === "Engineer") {
                var engineer = new Engineer(data.id, data.name, data.email, data.github);
                totalEmployees.push(engineer);
            } else if (data.role === "Intern") {
                var intern = new Intern(data.id, data.name, data.email, data.school);
                totalEmployees.push(intern);
            } 

            if (data.addEmployee === true) {
                start();
            } else {
                const printEmployees = render(totalEmployees);
                fs.writeFile(outputPath, printEmployees, function(err) {
                    if (err) {
                        console.log(err);
                    }
                })
            }

            
        })

        .catch(function (err) {
            console.log(err)
        })

}

start();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
