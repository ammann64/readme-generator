// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty strings
function renderLicenseBadge(license) {
  let badge = '';
  if (license != '') {
    let abbreviation = license.abbreviation;
    let link = renderLicenseLink(license.abbreviation);
    badge = `${abbreviation} - ${link}`;
  }
  return badge;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(abbreviation) {
  let link = '';
  if (abbreviation != '') {
    switch (abbreviation) {
      case 'apache':
        link = 'https://www.apache.org/licenses/LICENSE-2.0.html';
        break;
      case 'artistic':
        link = 'https://www.perlfoundation.org/artistic-license-20.html';
        break;
      case 'bsl':
        link = 'https://www.boost.org/users/license.html';
        break;
      case 'cc-by':
        link = 'https://creativecommons.org/licenses/by/4.0/legalcode.en';
        break;
      case 'epl':
        link = 'https://www.eclipse.org/legal/epl-2.0/';
        break;
      case 'gpl':
        link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
        break;
      case 'ms-pl':
        link = 'https://learn.microsoft.com/en-us/previous-versions/msp-n-p/ff647676(v=pandp.10)?redirectedfrom=MSDN'
        break;
      case 'mit':
        link = 'https://mit-license.org/';
        break;
      case 'osl':
        link = 'https://opensource.org/license/osl-3-0-php/';
        break;
    }
  }
  return link;
}

//Function to return license section of readme
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = '';
  if (license != '') {
    name = license.license;
    link = renderLicenseLink(license.abbreviation);
    section = `This project is licensed under ${name}. For more information please visit ${link}`;
  }
  return section;
}

function renderTableOfContents() {
  tableOfContents = 
  `-[Description](#description)\n
  -[Installation](#installation)\n
  -[Usage](#usage)\n
  -[Contribution](#contribution)\n
  -[Testing](#testing)\n
  -[License](#license)\n
  -[Questions](#questions)
  `
  return tableOfContents;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contribution, testing, license, username, email} = data;
  console.log(license);
  let badge = renderLicenseBadge(license);
  let licenseSection = renderLicenseSection(license);
  let tableOfContents = renderTableOfContents();
  content = `${badge}
  # ${title}\n\n
  ${tableOfContents}\n\n
  <div id='description'/>\n
  ## Description\n
  
  ${description}\n
  <div id='installation'/>\n
  ## Installation\n
  ${installation}\n
  <div id='usage'/>\n
  ## Usage\n
  ${usage}\n
  <div id='contribution'/>\n
  ## Contribution\n
  ${contribution}\n
  <div id='testing'/>\n
  ## Testing\n
  ${testing}\n
  <div id='license'/>\n
  ## License\n
  ${licenseSection}\n
  <div id='questions'>\n
  ## Questions\n
  Github Username: ${username}\n
  Email: ${email}\n
  `;
  return content;
}

module.exports = generateMarkdown;
