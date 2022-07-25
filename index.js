const fs = require('fs');
const inquirer = require('inquirer');

let badge;


const questions = 
 [


  {
    type:'input',
    name:'title',
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
    message:'enter your email address linked to this project',
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

inquirer.prompt(questions).then((answers) =>
{
const answersText = generateREADME ({...answers});
const Title = answers.Title + '.md';
console.log(answersText);

fs.writeFile(Title,answersText, function (error) 
{
if(error){
  console.log(error)
}
console.log("You have sucsessfully generated a README!!");
})

function generateREADME(answers)  
{
  return `
  ${badge}
## Table of Contents:
    1.[Title]
    2.[Description]
    3.[Instillation]
    4.[Usage]
    5.[Contribution]
    6.[Github]
    7.[LinkedIn]
    8.[Email]
    9.[licence]
    10.[test]
          

  *[Description](#Description)
  *[Instillation](#instillation)
  *[Usage](#Usage)
  *[Contribution](#Contribution)
  *[ licence]( licence)
  ##Description
  ${answers.Description}
  ##Instillation
  ${answers.Instillation}
  ## Usage
  ${Usage}
  ## Contribution
  ${Contribution}
  ## License
  ${licence}
  ## test
  ${test}

  ## Contact information
  *Github :${Github}
  *LinkIn :${LinkedIn}
  *Email  :${Email}` 
}});

