Documentation for Setting Up and Running Cypress Tests

1. Prerequisites
   System Requirements  
    - Node.js (v14 or later) installed on your system.
    - npm (Node Package Manager), which comes with Node.js.
    - Git for cloning the repository.
    - IDE to run the code
   
2. Cloning the repository 
   - Open you terminal and type the following command 
     - git clone https://github.com/shepherd-001/you-verify-coding-task-UI.git
   - pull from the project branch by typing the following in your terminal
     - git pull origin newBranch
   - cd (repository_directory)
   
3. Install dependencies
   - After cloning the repo, open the code in your IDE and type the following command in your terminal to install the project dependencies
     - npm install
   
4. Running the cypress tests
   - Open cypress test runner by typing the following command
     - npx cypress open
     - then select the desired file to execute
   - Run tests in headless mode
     - npx cypress run
     
5. Reports and logs
   - After running the tests, reports will be available in the cypress/reports directory.