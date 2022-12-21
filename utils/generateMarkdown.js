// Function that returns a license badge based on which license is passed in.
// If there is no license, returns an empty string.
function renderLicenseBadge(license) {

  let licenseBadge;

  switch (license) {
    case 'MIT': 
    licenseBadge = `![badge](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    break;
    case 'APACHIE 2.0': 
    licenseBadge = `![badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    break;
    case 'GNU GPLv3': 
    licenseBadge = `![badge](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    break;
    case 'Artistic 2.0': 
    licenseBadge = `![badge](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)`;
    break;
    case 'None': 
    licenseBadge = '';
    break;
  }


  return licenseBadge;
}

// Function that returns the license link.
// If there is no license, returns an empty string.
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case 'MIT': 
    licenseLink = `https://opensource.org/licenses/MIT`;
    break;
    case 'APACHIE 2.0': 
    licenseLink = `https://opensource.org/licenses/Apache-2.0`;
    break;
    case 'GNU GPLv3': 
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
    break;
    case 'Artistic 2.0': 
    licenseLink = `https://opensource.org/licenses/Artistic-2.0`;
    break;
    case 'None': 
    licenseLink = '';
    break;
  }

return licenseLink;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// Function to generate markdown for README
function generateMarkdown(data) {

  return `# ${ data.name }

  ${ renderLicenseBadge(data.license)}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#question)

  ## Description

  ${ data.description }

  ## Installation

  ${ data.installation }

  ## Usage

  ${ data.usage }
  
  ${ renderLicenseLink( data.license )}

  ## Contributing

  The following people contributed to this repository:
  ${ data.collaborators } 

  The user can contribute in the following ways:
  ${ data.contribute }
  
  ## Tests

  ${ data.tests }
  
  ## Questions

  If you have any questions about this repo, you can reach me directly at ${ data.email }. You can find more of my work at [${ data.github }](https://github.com/${ data.github }). 
`;
}

module.exports = generateMarkdown;
