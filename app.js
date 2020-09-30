const Employee = require("./lib/Employee");
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

async function start() {

    inquirer
        .prompt([
            {
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
                }

            ])

        .then(async (data) => {  

            if (data.role === "Manager") {
                var manager = await createManager();
                // console.log(manager);
                totalEmployees.push(manager);
                // moreEmployees();
    
            } 
            
            if (data.role === "Engineer") {
                var engineer = await createEngineer();
                console.log(manager);
                totalEmployees.push(engineer);
                // moreEmployees();
            }
            
            if (data.role === "Intern"); {
                var intern = await createIntern();
                console.log(intern);
                totalEmployees.push(intern);
                // moreEmployees();
            } 

        })

        .catch(function (err) {
            console.log(err)
        })

}

async function createManager() {
    console.log("manager");
    const data = await inquirer.prompt
        ([
           
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber"
            }
        ])
    var manager = new Manager(data.id, data.name, data.email, data.officeNumber);
    return manager;
}

async function createEngineer() {
    console.log("engineer")
    const data = await inquirer.prompt
        ([
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
                type: "input",
                message: "What is their Github username?",
                name: "github"
            }
        ])
    var engineer = new Engineer(data.id, data.name, data.email, data.github);
    return engineer;
}

async function createIntern() {
    console.log("intern");
    const data = await inquirer.prompt
        ([
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
                type: "input",
                message: "Where does the intern go to school?",
                name: "school"
            }
        ])
    var intern = new Intern(data.id, data.name, data.email, data.school);
    return intern;
}


async function moreEmployees() {
    const data = await inquirer.prompt
        ([
            {
                type: "list",
                message: "Are there more employees to add?",
                name: "more",
                choices:
                    [
                        "Yes",
                        "No"
                    ]
            }
        ])

    // if yes, run start();
    if (data.more === "Yes") {
        start();
    } else {
        render(totalEmployees);
        console.log(render);
    
        fs.writeFile(outputPath, data, function(err) {
            if (err) {
            return console.log(err);
        }
    
    // if no, render and write

    })

}
}

start();

// function writeToFile(fileName, data) {
//     console.log(writeToFile);
//     fs.writeFile(fileName, data, function(err) {

//         if (err) {
//             return console.log(err);
//         }
//     });
// }



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
