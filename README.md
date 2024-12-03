# Jumia Cypress Test Documentation

This project tests the Jumia(an ecommerce website).

### System Requirements
  - Node.js (v14 or latest) installed on your system.
  - npm (Node Package Manager), which comes with Node.js.
  - Git for cloning the repository.
  - IDE to run the code

### Clone the repository
  - Type the following command on your system terminal to clone the repo:
  - pull the project from from the project branch by typing the following in your terminal
  ```bash
   git pull origin newBranch
  ```
Enter the project directory
  ```bash
   cd <repo-directory>
  ```

### Install dependencies
 - Run the following command to install the dependencies required for the project:
  ```bash
   npm install
  ```

### Running the cypress tests
###### Running cypress tests in open mode
   - Type the following command on the terminal
  ```bash
    npx cypress open
  ```
  - Select the desired file to execute
###### Running cypress tests in run mode
   - Type the following command on the terminal
  ```bash
    npx cypress run
  ```

### Reports and logs
   - After running the tests, reports will be available in the cypress/reports directory.