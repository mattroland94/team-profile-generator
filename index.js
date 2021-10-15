const fs = require('fs');

const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateTemplate = require('./src/layout-template');

const generateHtml = require('./htmlgenerator');

const Members = []

function userInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                }
                else {
                    return 'Please enter Employee Name.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Email: ',
            name: 'email',
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                }
                else {
                    return 'Please enter Employee e-mail address.';
                }
            }
        },

        {
            type: 'input',
            message: 'Enter Employee Id: ',
            name: 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                }
                else {
                    return 'Please enter Employee Id.';
                }
            }
        },



        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"]

        },

    ])
    .then(answers => {

            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message:'Enter office number:',
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            }
                            else {
                                return 'Please enter office No.';
                            }
                        }
                        
                    }
                ])
                .then(response => {
                    console.log(response.office);
                    const ManagerTeam = new Manager (answers.name, answers.email, answers.id, answers.role, response.office)
                    Members.push(ManagerTeam);
                    addOption()
                })
            }
            else if(answers.role === 'Engineer' ){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'gitHub',
                        message:'Enter Github name:',
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            }
                            else {
                                return 'Please enter gitHub username.';
                            }
                        }
                    }
                ])
                .then(response => {
                    console.log(response.gitHub);
                    const EngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, response.gitHub)
                    Members.push(EngineerTeam);
                    addOption()
                })
            }
            else if (answers.role === 'Intern'){
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message:'Enter School name:', 
                        validate: function (schoolInput) {
                            if (schoolInput) {
                                return true;
                            }
                            else {
                                return 'Please enter school  name.';
                            }
                        }

                    }
                ])
                .then(response =>{
                    console.log(response.school);
                    const internTeam = new Intern (answers.name,  answers.email, answers.id, answers.role, response.school)
                    Members.push(internTeam);
                    addOption()
                })
            }

            else {
                const employeeTeam = new Employee (answers.name, answers.email, answers.id, answers.role);
                Members.push(employeeTeam);
                addOption()

            }

            //add option 

            function addOption() {
                inquirer.prompt([
                    {
                        type:'confirm',
                        name: 'addMore',
                        message:'Would you like to add another Employee?'
                    }
                ])
                .then(res =>{
                    if(res.addMore === true){
                        userInfo(Members);
                    }
                    else{
                        console.log('team', Members)
                        let cardLayoutHtml = generateTemplate(Members);
                        generateHtml(cardLayoutHtml)
                    }
                })
            }
        })
}

userInfo();