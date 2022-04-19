const inquirer = require('inquirer');
var fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        message: 'name of project?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'usage info',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'contribution guidelines',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'test instructions',
        name: 'test'
    },
    {
        type: 'list',
        message: "license",
        choices: ['L1', 'L2', 'L3'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'github profile',
        name: 'github'
    },
    {
        type: 'input',
        message: 'email',
        name: 'email'
    }
])
.then((response) => {
    console.log(response)
    resObj = JSON.stringify(response, null, 2)
    fs.writeFile('README.md', resObj, 'utf8', (err) => {
        err ? console.error(err) : console.log('Commit logged!')
    })
})
