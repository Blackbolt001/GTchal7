const fs = require('fs');
const inquirer = require('inquirer');

const questions = () =>
inquirer.prompt([
  {
    type:'input',
    name:'title',
    message: ' What would you like your title to be?',
  },{
    type:'input',
    name:'Description',
    message: 'In a brief message, decribe your project',
  },{
    type:'input',
    name:'instilation',
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
    name:'Github Username',
    message: 'please enter your Github username',
  },{
    type:'input',
    name: 'LinkedIn',
    message: 'enter your LinkedIn URL',
  },{
    type:'input',
    name:'Email',
    message:'enter your email address linked to this project',
  }
  ]).then(answers => {
    fs.writeFile(answers)
    console.log('README.md file creation sucsessfull')
  })
  .catch((err) => console.error(err));



    
  
