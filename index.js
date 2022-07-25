const fs = require('fs');
const inquirer = require('inquirer');

let badge;


inquirer.prompt(
 [


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
  ).then((response) =>
{
     const {
    title,
    Description,
    Instillation,
    Usage,
    Contribution,
    Github,
    LinkedIn,
    Email,
    licence,
    test ,
      } =response;
      if(licence=== 'MIT')
      { badge= 'MIT'}
      if (licence=== 'Apache')
      {badge = 'Apache'}
      if (licence === 'Academic')
      {badge = 'Academic'}
      if (licence === 'Open')
      {badge = 'Open'}

      
     console.log(licence)
    fs.writeFile('README.md',`# ${title}
  

${badge}

  *[Description](#Description)
  *[Instillation](#instillation)
  *[Usage](#Usage)
  *[Contribution](#Contribution)
  *[ licence]( licence)
  ##Description
  ${Description}
  ##Instillation
  ${Instillation}
  ## Usage
  ${Usage}
  ## Contribution
  ${Contribution}
  ## License
  ${licence}
  ## test
  ${test}

  # Contact information
  *Github :${Github}
  *LinkIn :${LinkedIn}
  *Email  :${Email}`, 

  (error) => {   
    if(error){
      console.log(error)
}})})