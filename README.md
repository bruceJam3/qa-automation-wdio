# WebdriverIO - Mocha - Axios - Chai Boilerplate

This repository provides a boilerplate setup for automating web browser tests using WebdriverIO, Mocha, Axios, and Chai. It aims to provide a starting point for building automated test suites using these technologies.

## Prerequisites

Before getting started, ensure that you have the following software installed on your system:

- Node.js: https://nodejs.org
- NPM (Node Package Manager): Usually comes bundled with Node.js installation.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git

2. Navigate to the cloned repository:

    ```bash
    cd your-repo

3. Install the dependencies:

    ```bash
    npm install

## Configuration
1. Open the wdio.conf.js file located in the root directory.

2. Update the baseUrl property with the URL of the website you want to test.

## Running the Tests
- To run the tests, execute the following commands:

    ```bash
    npm run wdio - to run all the tests
    npx wdio wdio.conf.js --spec ./test/specs/api/users.api.js - specify the correct file that you want to run

## Test Structure
The test files are located in the test directory. 

## Appium
- Ensure to update the wdio.appium.conf.js propertly as needed and then

    ```bash
    npm run test-mobile

## Resources
- WebdriverIO: https://webdriver.io
- Mocha: https://mochajs.org
- Axios: https://axios-http.com
- Chai: https://www.chaijs.com
- Appium: https://appium.io/docs/en/2.0/