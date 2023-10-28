function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return "";
};
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`
  }

  return "";
};
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is under the ${license} license`
  }

  return "";
}
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}

  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  The link to my Github Profile here:"https://github.com/coleparrish9".
  For any additional questions, please reach me at:"coleparrish9@gmail.com"
`
;
}
module.exports = generateMarkdown;