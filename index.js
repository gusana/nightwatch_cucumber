var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'hierarchy',
        jsonFile: './reports/cucumber.json',
        output: './reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true
    };
 
    reporter.generate(options);