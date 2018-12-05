module.exports = {
  'Demo test Babbel' : function (browser) {
    browser
      .url('http://home.babbel.com')
      //Print email and password
      .useXpath()
      .waitForElementVisible("//input[@id='account_email']", 5000)
      .setValue("//input[@id='account_email']", "ganien@yandex.ru")
      .waitForElementVisible("//input[@id='account_password']", 5000)
      .setValue("//input[@id='account_password']", "London1666")
      .waitForElementVisible("//input[@type='submit']", 5000)
      .click("//input[@type='submit']")
      .waitForElementVisible("//div[@class='dashboard-copyrighted-lesson-image']", 5000)
      //Navigate to Courses
      .click("//a[contains(text(), 'Courses')]")
      .waitForElementVisible("//div[@class='course-overview_content']", 5000)
      //.assert.visible("//div[@class='course-overview_content']")
      //Navigate to Vocabulary
      .click("//a[contains(text(), 'Vocabulary')]")
      .waitForElementVisible("//div[@class='header__main']", 10000)
      //.assert.visible("//div[@class='header__main']")
      //Navigate to Prices
      .click("//a[contains(text(), 'Prices')]")
      .waitForElementVisible("//div[@class='span12 content']", 10000)
      //.assert.visible("//div[@class='span12 content']")

      .end();
  }
};


/*

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
*/

/*

const {Builder, By, Key, until, elementLocated} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// ask the browser to open a page
driver.navigate().to('https://home.babbel.com/');

//driver.wait(until.elementLocated(By.id('SIvCob')));
// driver.wait( function() {
// 	return driver.findElements(By.id('SIvCob')).then(function(elem){
// 		return elem = 'Google';
// 	})
// });
	
driver.close();


*/

/*
var webdriver = require("selenium-webdriver");

var browser = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).build();

browser.get("http://www.google.com");
var promise = browser.getTitle();
promise.then(function(title){
	console.log(title);
});
browser.quit();
*/