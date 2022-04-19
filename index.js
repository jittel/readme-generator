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
        name: 'tests'
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
    console.log(response.tests)

    let readme = `# ${response.name}\n` +
                 `## description\n${response.description}\n` +
                 `## installation instructions\n${response.installation}\n` +
                 `## usage info\n${response.usage}\n` +
                 `## constribution guidelines\n${response.contribution}\n` +
                 `## test instructions\n${response.tests}\n` +
                 `## questions\n${response.github}\n${response.email}`

    // do this after input data has been formatted
    fs.writeFile('README.md', readme, 'utf8', (err) => {
        err ? console.error(err) : console.log('Commit logged!')
    })
})
