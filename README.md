# **Jumia Cypress Test Documentation**

This project automates the testing of jumia e-commerce web application using cypress.

---

### **System Requirements**
Ensure the following are installed on your system:
  - **Node.js** (v14 or later).
  - **npm** (Node Package Manager, included with Node.js).
  - **Git** for cloning the repository.
  - **Code Editor or IDE** (e.g. Visual Studio Code)

---

## **Setup Instructions**
### **1. Clone the Repository**
  - Run the following command in your terminal:
  ```bash
   git clone https://github.com/shepherd-001/you-verify-coding-task-UI
   cd <repo-directory>       # Navigate to the project directory 
   git pull origin master    # Pull the latest updated from the master branch
  ```

---

### **2. Install Dependencies**
 - Install the required dependencies: 
  ```bash
   npm install
  ```

### **Running the Cypress Tests**
##### **Option 1: Open Mode(Interactive)**
   - Run the following command: 
  ```bash
    npx cypress open
  ```
   - This will open the Cypress Test Runner. Select the desired spec file to execute.  
  

##### **Option 2: Run Mode(Headless)**
   - Run the tests in headless mode with the following command:
  ```bash
    npx cypress run
  ```
   - The results will be displayed in the terminal and saved as logs.

---

### **Test Reports and Logs**
   - **Report Directory**: After executing the tests, the results will be saved in the cypress/reports directory.
   - **Screenshots**: If a test fails, screenshots will be automatically saved in the cypress/screenshots folder.
   - **HTML Reports**: A detailed test execution summary will be available as index.html in the cypress/reports folder which can be open in a browser.

---

### **Additional Notes**
   - Ensure you are on the correct branch (master) when pulling the latest changes.
   - Customize configuration and test data as needed in the cypress.config.js or test files.
   