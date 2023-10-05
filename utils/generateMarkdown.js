// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch (license.value) {
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
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Contribution
  ${contribution}
  ## Testing
  ${testing}
  ## License
  ${license.name}
  ##Questions
  Github Username: ${username}
  Email: ${email}
`;
}

module.exports = generateMarkdown;
