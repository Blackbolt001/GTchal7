function generateMarkdown(data)
{
  return`# ${data.Title}

## Table of Contents:
    1.[Title](##Title)
    2.[Description](##Description)
    3.[Instillation](##INstillation)
    4.[Usage](##Usage)
    5.[Contribution](##Contribution)
    6.[Github](###Github)
    7.[LinkedIn](###LinkedIn)
    8.[Email](###Email)
    9.[licence](###license)
    10.[test](###test)
          

  *[Description](#Description)
  *[Instillation](#instillation)
  *[Usage](#Usage)
  *[Contribution](#Contribution)
  *[ licence](#licence)
  ##Description
  ${data.Description}
  ##Instillation
  ${data.Instillation}
  ## Usage
  ${data.Usage}
  ## Contribution
  ${data.Contribution}
  ## License
  ${renderLicenseSection(data.licence)}
  ## test
  ${data.test}

  ## Contact information
  *Github :${data.Github}
  *LinkIn :${data.LinkedIn}
  *Email  :${data.Email}`;
}

function renderLicenseSection(license) {
  if (license === 'MIT')
  {return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
}
 if (license === 'Apache')
 {return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
}
if (license === 'Academic')
{return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
}
if (license === 'Open')
{return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
}}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}




module.exports = generateMarkdown;
