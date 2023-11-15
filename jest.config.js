module.exports = {
    preset: 'jest-puppeteer', //expose the page and browser globals
    testMatch: ['**/tests/**/*.test.js'],
    testTimeout: 30000, // timeout for test
    verbose: true, 
    setupFilesAfterEnv: ['expect-puppeteer'],
    reporters: [
        "default", // Keep Jest's default text reporter
        ["jest-html-reporter", {
          pageTitle: "Automation Test Report",
          outputPath: "./reports/test-report.html", // Output location for the HTML report
          includeFailureMsg: true, 
          includeConsoleLog: true, 
        }]
      ], 
  };
  