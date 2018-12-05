const chromedriverPath = require('chromedriver').path;
 const seleniumServerPath = require('selenium-server').path;
 const geckodriverPath = require('geckodriver').path;

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', './features',
    '--require', './step_definitions',
    '--format', 'json:reports/cucumber.json',
    './features']
});

module.exports = {

	//src_folders: ['uitests'],
	//src_folders: [''],
	output_folder: 'reports',
	custom_commands_path: '',
	custom_assertions_path: '',
  page_objects_path: './step_definitions/pageObject/',
  globals_path: './globals.js',

   selenium: {
    start_process: true,
    server_path: seleniumServerPath,
    cli_args: {
      'webdriver.chrome.driver': chromedriverPath,
      'webdriver.gecko.driver': geckodriverPath,
    },
  },

  test_settings: {
		default: {
			selenium_port: 9515,
      default_path_prefix : '',

      desiredCapabilities: {
        browserName: 'chrome',
        // javascriptEnabled: true,
        // chrome_port: 9515,
        chromeOptions : {
          args : ["headless", "--incognito", "window-size=1920,1080"]
        },
         acceptSslCerts: true,
      }
  	}
  }
}