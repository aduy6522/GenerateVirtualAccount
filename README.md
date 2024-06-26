# GenerateVirtualAccount

This project generates virtual account data for various industries and businesses. It creates random form data including industry, suburb, business name, first name, last name, email, phone number, and password.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Data Generation](#data-generation)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

GenerateVirtualAccount is a Node.js application that generates virtual account data for different industries and businesses. It is useful for generating test data or sample data for various purposes such as software testing, data analysis, or database population.

## Installation

To use GenerateVirtualAccount, follow these steps:

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/aduy6522/GenerateVirtualAccount.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd GenerateVirtualAccount
   \`\`\`

3. Install the dependencies:
   \`\`\`bash
   npm install
   \`\`\`

## Usage

To use GenerateVirtualAccount, you can simply run the main script \`generateData.js\` using Node.js. This script generates random form data and logs it to a JSON file.

\`\`\`bash
node src/generateData.js
\`\`\`

## Data Generation

The generated data includes the following fields:

- Industry
- Suburb
- Business Name
- First Name
- Last Name
- Email
- Phone
- Password

The password is generated according to specified criteria, ensuring it contains at least one uppercase letter, one lowercase letter, one number, and one special character.

## File Structure

The project structure is as follows:

\`\`\`
GenerateVirtualAccount/
│
├── data/
│   └── randomFormData.json
├── src/
│   ├── generateData.js
│   └── randomFormData.json
├── .gitignore
├── README.md
└── package.json
\`\`\`

- \`data/\`: Contains the generated JSON file with random form data.
- \`src/\`: Contains the source code for data generation.
- \`.gitignore\`: Specifies files and directories to be ignored by Git.
- \`README.md\`: Documentation for the project.
- \`package.json\`: Contains project metadata and dependencies.

## Contributing

Contributions to GenerateVirtualAccount are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`;
