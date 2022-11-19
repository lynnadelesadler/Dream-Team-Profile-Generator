//node modules
const fs = require("fs");
const inquirer = require("inquirer");

//link to generate HTML
const generateHtml = require("./dist/generateHTML");

//links to Role scripts
//Employee.js is linked inside Manager, Engineer and Intern scripts

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// empty array for employee list
const employees = [];

// Start the application in command-line by typing node index - Manager Prompt function
// User is prompted to enter the team manager’s name, employee ID, email address, and office number
const managerPrompt = () => {
  return inquirer
    .prompt([
      {
        //Manager's Name
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the Managers name!");
            return false;
          }
        },
      },
      {
        //Manager's ID
        type: "input",
        message: "What is their employee id?",
        name: "id",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter their employee id!");
            return false;
          }
        },
      },
      {
        //Manager's email
        type: "input",
        message: "What is their email address?",
        name: "email",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter their email address!");
            return false;
          }
        },
      },
      {
        //Manager's Office Number
        type: "input",
        message: "What is their office number?",
        name: "officeNumber",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter their office number!");
            return false;
          }
        },
      },
    ])
    .then((managerInfo) => {
      const manager = new Manager(
        managerInfo.name,
        managerInfo.id,
        managerInfo.email,
        managerInfo.officeNumber
      );

      employees.push(manager);

      addNewEmployee();
    });
};

// After the Manager Input of name, employee ID, email address, and office number is complete present
// Present use with a menu to add an engineer or an intern or to finish building my dream team
function addNewEmployee() {
  inquirer
    .prompt([
      {
        name: "question",
        type: "list",
        message: "Continue to build your Dream Team or is your team complete?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "My dream team is complete!",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.question) {
        case "Add an Engineer":
          console.log("add Engineer!");
          addEngineer();
          break;

        case "Add an Intern":
          console.log("add Intern!");
          addIntern();
          break;

        // When dream team complete is selected from the menu, exit the application and generate the HTML
        default:
          console.log("Dream Team generated!");
          console.log(employees);
          writeHTML();
          break;
      }
    });

  // If user selects add engineer option from the menu, prompt to enter the engineer’s name, ID, email, and GitHub username
  // When complete take user back to the menu
  const addEngineer = () => {
    return inquirer
      .prompt([
        {
          //Engineer's Name
          type: "input",
          message: "What is the Engineer's name?",
          name: "name",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Engineer's name!");
              return false;
            }
          },
        },
        {
          //Engineer's ID
          type: "input",
          message: "What is their employee id?",
          name: "id",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter their employee id!");
              return false;
            }
          },
        },
        {
          //Engineer's email
          type: "input",
          message: "What is their email address?",
          name: "email",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter their email address!");
              return false;
            }
          },
        },
        {
          //Engineer's GitHub username
          type: "input",
          message: "What is their Github username?",
          name: "github",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter their Github username!");
              return false;
            }
          },
        },
      ])
      .then((engineerInfo) => {
        const engineer = new Engineer(
          engineerInfo.name,
          engineerInfo.id,
          engineerInfo.email,
          engineerInfo.github
        );

        employees.push(engineer);

        addNewEmployee();
      });
  };

  // If user selects add intern option from the menu, prompt to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  const addIntern = () => {
    return inquirer
      .prompt([
        {
          //Intern's Name
          type: "input",
          message: "What is the Intern's name?",
          name: "name",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the Intern's name!");
              return false;
            }
          },
        },
        {
          //Intern's ID
          type: "input",
          message: "What is their employee id?",
          name: "id",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter their employee id!");
              return false;
            }
          },
        },
        {
          //Intern's email
          type: "input",
          message: "What is their email address?",
          name: "email",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter their email address!");
              return false;
            }
          },
        },
        {
          //Intern's GitHub username
          type: "input",
          message: "What school to they attend?",
          name: "school",
          validate: (input) => {
            if (input) {
              return true;
            } else {
              console.log("Please enter the school they attend!");
              return false;
            }
          },
        },
      ])
      .then((internInfo) => {
        const intern = new Intern(
          internInfo.name,
          internInfo.id,
          internInfo.email,
          internInfo.school
        );

        employees.push(intern);

        addNewEmployee();
      });
  };
}

// Function to call to initialize app, Start Manager Prompt function
// When Manager prompt function initializes addNewEmployee function to completion
managerPrompt();
// When all prompts are completed an HTML file is generated to display Dream Team
function writeHTML() {
  fs.writeFile("./dist/index.html", generateHtml(employees), (err) =>
    err
      ? console.log(err)
      : console.log("Your dream team page is built - check out index.html!")
  );
}
