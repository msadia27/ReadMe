// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ![Githublicense](http://img.shields.io/badge/license-${data.license}-blue.svg);

  ##Description
  ${data.description};

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${data.licenseBadge}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Questions
  * GitHub Username: https://github.com/$data.gitHub}
  * Please feel free to reach out via email for any questions: ${data.email}

  `;
}

module.exports = { generateMarkdown };
