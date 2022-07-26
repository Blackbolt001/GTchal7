const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

  inquirer.prompt(
[

  {
    type:'input',
    name:'Title',
    message: ' What would you like your title to be?',
  },{
    type:'input',
    name:'Description',
    message: 'In a brief message, decribe your project...',
  },{
    type:'input',
    name:'instillation',
    message:'Do you have any instructions on how to install your application? If so please describe below',
  },{ 
    type:'input',
    name:'Usage',
    message:'how is the user intended to use this application?',
  },{
    type:'input',
    name: 'Contribution',
    message:'describe if and how users can contribute to this project',  
  },{
    type:'input',
    name:'Github',
    message: 'please enter your Github username',
  },{
    type:'input',
    name: 'LinkedIn',
    message: 'enter your LinkedIn URL',
  },{
    type:'input',
    name:'Email:',
    message:'enter your email address linked to this project(Email must be valid for README to generate!)',
  },{
    type:'checkbox',
    name: 'license',
    message: ' please choose a license for this product',
    choices: 
    [ 'Apache','Academic','MIT','Open']
  },{
    type: 'input',
    name:'test',
    message:'is there a test for this program',
  }]

  )

.then((data) => 
{
  const generateReadme = generateMarkdown(data);
fs.writeFile('README.md',generateReadme, function (error) 
{
if(error){
  console.log(error)
}
console.log("You have sucsessfully generated a README!!")
})})
