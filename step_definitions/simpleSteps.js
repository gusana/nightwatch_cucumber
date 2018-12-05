//step_definitions/simpleSteps.js

const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

var page = client.page.dashboardPage();

var login = client.page.loginPage();
var navbar = login.section.NavBar;
var navbarAm = login.section.NavBarAm;
var loginSection = login.section.loginSection;
var navBarCommon = login.section.NavBarCommon;

var registerPage = client.page.registerPage();
var language = registerPage.section.ChooseLanguage;
var registration = registerPage.section.Registration;
var nameEmail = registerPage.section.NameEmail;
var passwordSection = registerPage.section.Password;
var chooseLanguageCommon = registerPage.section.ChooseLanguageCommon;

var confirmPage = client.page.confirmPage();
var confirmButtons = confirmPage.section.Buttons;

var dashboardPage = client.page.dashboardPage();  
var mainDashboard = dashboardPage.section.mainDashboard;
var lessonDashboard = dashboardPage.section.lessonDashboard;
var score = dashboardPage.section.scoreSection;
var navBarDashboard = dashboardPage.section.navBarSection;
var reviewArea = dashboardPage.section.reviewArea;
var coursesArea = dashboardPage.section.coursesArea;
var learningTogether = dashboardPage.section.learningTogether;
var mobileApps = dashboardPage.section.mobileApps;
var picker = dashboardPage.section.coursePicker;
var cascadaSection = dashboardPage.section.cascadaSection;
var PortugueseBanner = dashboardPage.section.PortugueseBanner;
var ExplainBanner = dashboardPage.section.ExplainBanner;

var courses = client.page.coursesPage();
var coursesOverview = courses.section.courseOverview;
var newSection = courses.section.newSection;
var everyDaySection = courses.section.everyDaySection;
var trainerSection = courses.section.trainerSection;
var navBarSection = courses.section.navBarGateSection;
var coursesHeader = courses.section.coursesHeader;
var coursesHeaderSecond = courses.section.coursesHeaderSecond;
var priceBanner = courses.section.priceBanner;
var firstCourse = courses.section.availableCourse;
var moreLessons = courses.section.showMoreLessons;
var missingContent = courses.section.missingContent;
var extrasPage = courses.section.extrasPage;

var vocabularyPage = client.page.vocabularyPage();
var vocabularyHeader = vocabularyPage.section.headerSection;
var itemsSection = vocabularyPage.section.itemsSection;
var navBarVocabualry = vocabularyPage.section.navBarVocabualry;
var filterPanel = vocabularyPage.section.filterPanel;

var pricesPage = client.page.pricesPage();
var headerPrices = pricesPage.section.headerPrices;
var containerSection = pricesPage.section.containerSection;

var coursePicker = client.page.courseOverviewPicker();
var pickers = coursePicker.section.Pickers;
var pickerOverview = coursePicker.section.PickerOverview;
var learningTip = coursePicker.section.learningTip;

var profile = client.page.profileAndSettings();
var itemsList = profile.section.itemsList;
var displayLanguage = profile.section.displayLanguage;
var buttons = profile.section.buttons;

Given(/^User navigates to \'(.*)\'$/, function(hostName) {
	
	return page.navigate(hostName);
	//return client.pause(3000);
});

Given(/^User chooses native language \'(.*)\' and press \'(.*)\'$/, function(nativeLanguage, button) {	
//Babbel first page
	navbar.waitForElementVisible('@chooseMotherLanguageBr', 15000).click('@chooseMotherLanguageBr')
	.waitForElementVisible(navbar.chooseNative(nativeLanguage), 15000)
	.click(navbar.chooseNative(nativeLanguage));
	
	return navbarAm.waitForElementVisible(navbarAm.pressButton(button), 15000)
			.click(navbarAm.pressButton(button));
});

Given(/^User chooses native language except American \'(.*)\' and press \'(.*)\'$/, function(nativeLanguage, button) {	
//Babbel first page
	navbar.waitForElementVisible('@chooseMotherLanguageBr', 15000).click('@chooseMotherLanguageBr')
	.waitForElementVisible(navBarCommon.chooseNative(nativeLanguage), 15000)
	.click(navBarCommon.chooseNative(nativeLanguage));
	
	return navBarCommon.waitForElementVisible(navBarCommon.pressButton(button), 15000)
			.click(navBarCommon.pressButton(button));
});

Given(/^User press \'(.*)\'$/, function(button){

 navbarAm.waitForElementVisible(navbarAm.pressButton(button), 15000);
 return	navbarAm.click(navbarAm.pressButton(button));
});

Given(/^User press Register without American$/, function(){

 return client.waitForElementVisible('a.btn.btn--small.btn--primary', 15000)
 .click('a.btn.btn--small.btn--primary');
});

Given(/^User press login with Polish$/, function(){
	return client.waitForElementVisible('#cascadaNav > ul > li:nth-child(5)', 15000)
	.click('#cascadaNav > ul > li:nth-child(5)');
});

Given(/^User press Login without American$/, function(){
	
	return client.waitForElementVisible('#cascadaNav > ul > li:nth-child(7)', 15000)
	.click('#cascadaNav > ul > li:nth-child(7)');
});

Given(/^User log in with \'(.*)\' and \'(.*)\'$/, function(email, password) {

	return	loginSection.waitForElementVisible('@loginButton', 15000).click('@loginButton')
		.waitForElementVisible('@emailField', 15000)
		.setValue('@emailField', email)
		.waitForElementVisible('@passwordField', 15000)
		.setValue('@passwordField', password)
		.waitForElementVisible('@loginButton', 15000)
		.click('@loginButton');
});

Given(/^User chooses \'(.*)\' language for learning with native language not American$/, function(learningLanguage){
//Registration page
//client.waitForElementVisible('div.btn-group.bootstrap-select.span6', 5000);
//client.click('div.btn-group.bootstrap-select.span6');
//client.waitForElementVisible('ul.dropdown-menu.inner', 5000);

//language.click(language.chooseLanguage(learningLanguage));
language.waitForElementVisible('@continueButton', 15000).click('@continueButton');

return registerPage.expect.section('@NameEmail').to.be.visible;
});

Given(/^User chooses \'(.*)\' language for learning$/, function(learningLanguage) {
//Registration page
	language.waitForElementVisible('@dropDown', 15000).click('@dropDown');
	language.waitForElementVisible('@dropList', 15000).click(language.chooseLanguage(learningLanguage));
	language.waitForElementVisible('@continueButton', 15000).click('@continueButton');
	
	return registerPage.expect.section('@NameEmail').to.be.visible;
});

Given(/^User chooses \'(.*)\' for learning$/, function(learningLanguage) {
//Registration page
	chooseLanguageCommon.waitForElementVisible('@dropDown', 15000).click('@dropDown');
	chooseLanguageCommon.waitForElementVisible('@dropList', 15000).click(chooseLanguageCommon.chooseLanguage(learningLanguage));
	client.pause(5000);
	chooseLanguageCommon.waitForElementVisible('@continueButton', 15000).click('@continueButton');
	
	return registerPage.expect.section('@NameEmail').to.be.visible;
});

Given(/^User chooses \'(.*)\' for learning as L2$/, function(learnLanguage){
//Registration page
	chooseLanguageCommon.waitForElementVisible('@dropDown', 15000).click('@dropDown');
	chooseLanguageCommon.waitForElementVisible('@dropList', 15000);
	client.useXpath().click("//li/a/span[contains(text(), '" + learnLanguage + "')]");

	//click(chooseLanguageCommon.chooseLanguage(learningLanguage));
	client.useCss().pause(5000);
	chooseLanguageCommon.waitForElementVisible('@continueButton', 15000).click('@continueButton');
	
	return registerPage.expect.section('@NameEmail').to.be.visible;
});

When(/^User input \'(.*)\' and \'(.*)\' confirming email address page shows$/, function(name, password1){
	//Second Registration page
	var date = new Date();
	var timestamp = date.getTime();

	nameEmail.waitForElementVisible('@firstName', 15000).setValue('@firstName', name);
	nameEmail.setValue('@email', 'aguseva+' + timestamp + '@babbel.com');
	nameEmail.waitForElementVisible('@continueButton', 15000).click('@continueButton');

	passwordSection.waitForElementVisible('@passwordField', 15000)
	.clearValue('@passwordField')
	.setValue('@passwordField', password1);
	//.click('@privacyStatement');

	passwordSection.waitForElementVisible('@confirmRegistration', 15000).click('@confirmRegistration');
	
	return confirmButtons.waitForElementVisible('@laterButton', 15000);
});

When(/^User is on Dashboard and press Vocabulary$/, function(){
	navBarDashboard.waitForElementVisible('@vocabulary', 15000).click('@vocabulary');
	client.waitForElementVisible('div.header', 15000);
	//vocabularyPage.waitForElementVisible('@headerSection', 5000);
	//client.expect.element('div > div.learned-items-list').to.be.visible;
	return client.pause(5000);
});

When(/^User press Later Dashboard loads$/, function(){

	return confirmButtons.click('@laterButton');
	//lessonDashboard.waitForElementVisible('@dashboardImage', 15000);	
	//return lessonDashboard.expect.element('@dashboardImage').to.be.visible;
});

When(/^User press Show all lessons in You are learning Courses page is loaded$/, function(){
	score.click('@showAllLessons');

	coursesOverview.waitForElementVisible('@mainHeader', 15000);
	
	return coursesOverview.assert.elementPresent('@newCourse')
			.assert.elementPresent('@beginnersCourse')
			.assert.elementPresent('@grammarCourse')
			.assert.elementPresent('@specialsCourse')
			.assert.elementPresent('@wordsAndStatementsCourse');
});

Then(/^User choose \'(.*)\' course$/, function(course){
	coursesOverview.waitForElementVisible('@mainHeader', 15000);
	
	return client.useXpath().click("//div/div/h2[contains(text(), '" + course + "')]");
});

Then(/^User choose first available course$/, function(){
	
	client.useCss().waitForElementVisible('li.courses-list__item:nth-child(1)', 15000)
	.click('li.courses-list__item:nth-child(1)');
	client.waitForElementVisible('div > ul.lesson-list', 15000);
	
	 return client.expect.element('div > ul.lesson-list').to.be.present;
});

Then(/^Only first lesson should be available$/, function(){
	//maybe need to count!!!
	client.waitForElementVisible('ul.courses-list', 15000);
	
	return client.expect.element('a.course-item__link').to.be.visible;
});

Then(/^Vocabulary page has words$/, function(){
	
	client.expect.element('tbody > tr').to.be.visible;
	
	return client.pause(5000);
});

Then(/^Vocabulary page has not words$/, function(){
	
	return client.useXpath().expect.element("//tbody/tr/td[2][contains(text(),'0 items')]").to.be.present;
});

Then(/^User press Courses for customer$/, function(){

	navBarVocabualry.waitForElementVisible('@coursesVoc', 15000);
	navBarVocabualry.click('@coursesVoc');
	
	coursesHeader.waitForElementVisible('@learningLangauge', 15000);
	
	return coursesHeader.assert.elementPresent('@learningLangauge')
	.assert.elementPresent('@customerDescription');
});

Then(/^User press Courses$/, function(){
	client.pause(5000);
	navBarVocabualry.waitForElementVisible('@coursesVoc', 15000);
	navBarVocabualry.click('@coursesVoc');
	
	coursesHeader.waitForElementVisible('@learningLangauge', 15000);
	
	return coursesHeader.assert.elementPresent('@learningLangauge')
	.assert.elementPresent('@description')
	.assert.elementPresent('@linkToPrice');
});

Then(/^User close lesson$/, function(){
	
	return client.click('a#navbar-close');
});

Then(/^User log out$/, function(){
	
	client.pause(5000);
	client.click('div.cascada-navbar__item:nth-of-type(2)');
	client.pause(5000);
	client.click('a[data-method="delete"]');
	
	return client.pause(5000);
});

Then(/^User press Start button Lesson is loaded$/, function(){
	coursesOverview.click('@newCourse');
	newSection.waitForElementVisible('@newHeader', 15000);
	newSection.assert.elementPresent('@everydayExpressions');
	newSection.assert.elementPresent('@locativeCase');
	newSection.click('@everydayExpressions');

	everyDaySection.waitForElementVisible('@mainHeader', 15000);
	everyDaySection.assert.elementPresent('@Greetings');
	everyDaySection.assert.elementPresent('@Goodbyes');
	everyDaySection.assert.elementPresent('@GreetingToKnowSomeone');
	everyDaySection.assert.elementPresent('@SmallTalk');
	everyDaySection.assert.elementPresent('@Regrests');
	everyDaySection.assert.elementPresent('@AtTheDiningTable');
	everyDaySection.assert.elementPresent('@OrderingFood');
	everyDaySection.assert.elementPresent('@ItherSituations');
	everyDaySection.assert.elementPresent('@Birthday');
	everyDaySection.assert.elementPresent('@Seasons');
	everyDaySection.assert.elementPresent('@AllowedAndForbidden');
	everyDaySection.assert.elementPresent('@Signs');

	everyDaySection.click('@startButton');

	trainerSection.waitForElementVisible('@withSpeech', 15000);
	trainerSection.assert.elementPresent('@withoutSpeech');
	trainerSection.assert.elementPresent('@continueButton');

	navBarSection.assert.elementPresent('@contactButton');
	
	return navBarSection.assert.elementPresent('@closeButton');
});

//Feature: ThroughAllPages
Then(/^Dashboard page load$/, function(){
	//check all elements on this page
	client.pause(15000);
	dashboardPage.expect.section('@mainDashboard').to.be.visible;
	lessonDashboard.assert.elementPresent('@strartLessonButton');
//Need to check different variants, because we have different scenarios. In some cases 
//this two asserts fail
	// lessonDashboard.assert.elementPresent('@leftInactiveNavBarButton');
	// lessonDashboard.assert.elementPresent('@rightActivNavBarButton');
	score.assert.elementPresent('@activeProgress');
	score.assert.elementPresent('@showAllLessons');
	reviewArea.assert.elementPresent('@vocabulary');
	reviewArea.assert.elementPresent('@vocabularyButtonInactive');
	reviewArea.assert.elementPresent('@dailyChallenge');
	reviewArea.assert.elementPresent('@challengeButton');
//Spanish language does not have this part !!!
	// dashboardPage.expect.section('@coursesArea').to.be.visible;
	// coursesArea.assert.elementPresent('@button');

	dashboardPage.expect.section('@learningTogether').to.be.visible;
	learningTogether.assert.elementPresent('@button');
	dashboardPage.expect.section('@mobileApps').to.be.visible;
	
	return mobileApps.assert.elementPresent('@button');
});

Then(/^User press Vocabulary$/, function(){
	return client.waitForElementVisible('#cascadaNavCollapse > ul > li:nth-child(4)', 15000)
	.click('#cascadaNavCollapse > ul > li:nth-child(4)');
});

Then(/^Vocabulary page loads$/, function(){
	filterPanel.waitForElementVisible('@dropFilter', 15000);
	return filterPanel.assert.elementPresent('@dropFilter')
	.assert.elementPresent('@reviewButtonDisabled')
	.assert.elementPresent('@searchField');
});

var prevLink = "";

Then(/^User press Prices$/, function(){
	client.url(function (response) {
		prevLink = response.value;
	});

	return client.click('#cascadaNavCollapse > ul > li:nth-child(5)');
});

Then(/^Prices page loads$/, function(){
	client.waitForElementVisible('div.masthead', 15000);
	
	return pricesPage.expect.section('@containerSection').to.be.visible;
});

Then(/^User navigate back$/, function(){
	page.navigate(prevLink);
	
	return client.pause(5000);
});

Then(/^User press Help and Help portal loads$/, function(){
	//press Help and check that Help portal loads
	// client.waitForElementVisible('nav.sub-nav', 15000);
	// return client.expect.element('div.category-container').to.be.visible;
});

When(/^User press Course Picker pickers are shown$/, function(){
	
	score.waitForElementVisible('@progressBar', 15000);
	// navBarDashboard.waitForElementVisible('@home', 15000);
	// navBarDashboard.click('@home');
	client.waitForElementVisible('body > div:nth-child(1) > header > div > nav > div:nth-child(1) > div:nth-child(1) > a', 15000)
	.click('body > div:nth-child(1) > header > div > nav > div:nth-child(1) > div:nth-child(1) > a');
	picker.waitForElementVisible('@ShowMoreButton', 15000);
	picker.click('@ShowMoreButton');
	pickers.waitForElementVisible('@travelPicker', 15000);
	
	return pickers.expect.element('@travelPicker').to.be.visible;
});

var link;

Then(/^User choose \'(.*)\' of the picker and new lesson is loaded$/, function(pickerNumber){
//Right panel with content should be shown after choosing one of the picker
	client.pause(1000);
	client.url(function(result) {
      // return the current url
      link = result;
    });
	client.pause(1000);
	coursePicker.click(coursePicker.chooseCourse(pickerNumber));
	client.pause(1000);
	// client.getLog('browser', function(result){
	// 	console.log(result);
	// })
	pickerOverview.waitForElementVisible('@startButton', 15000);
	pickerOverview.click('@startButton');

	return coursePicker.waitForElementVisible('div.loy-cascada-navbar__gate', 15000);
});

Then(/^User press back$/, function(){
	page.navigate(link.value);
	client.waitForElementVisible('div.course-picker-motivations__content', 15000);
	
	return pickers.expect.element('@travelPicker').to.be.visible;
});

//Course Pikcer Feature

When(/^User navigate to Home page$/, function(){
	//now user navigates to home.babbel when user goes to Settings
	//my.babbel and home.babbel have different selectors for the same elements

client.url(function (response) {
		if (response.value == 'https://home.babbel.com/user-profile/settings'){
			console.log("if pos: ", response.value);
			page.navigate('https://my.babbel.com/dashboard');
		}
			else {
				console.log("if neg: ", response.value);
			
				return client.waitForElementVisible('body > div:nth-child(1) > header > div > nav > div:nth-child(1) > div:nth-child(1) > a', 15000)
				.click('body > div:nth-child(1) > header > div > nav > div:nth-child(1) > div:nth-child(1) > a');
		}
   });
});

Then(/^User navigate to Home page from picker$/, function(){

	return client.waitForElementVisible('#cascadaNavCollapse > ul > li:nth-child(1)', 15000)
	.click('#cascadaNavCollapse > ul > li:nth-child(1)');
});

When(/^User navigate to Settings$/, function(){
	//Pick user name, choose settings
	//this puase found empiric way, it needs for loading all elements
	client.pause(5000);
	
	// cascadaSection.waitForElementVisible('@nameUser', 15000);
	// cascadaSection.click('@nameUser');

	client.waitForElementVisible('body > div:nth-child(1) > header > div > nav > div:nth-child(2) > div:nth-child(2)', 15000)
	.click('body > div:nth-child(1) > header > div > nav > div:nth-child(2) > div:nth-child(2)');
	cascadaSection.waitForElementVisible('@dropDown', 15000);
	navBarDashboard.click('@profileSettings');
	itemsList.waitForElementVisible('@settings', 15000).click('@settings');

	return displayLanguage.waitForElementVisible('@languageField', 15000);
});

When(/^User change language to \'(.*)\' in Display Language$/, function(nativeLanguage) {
	//choose language from drop-down list
	displayLanguage.click('@languageField');

	client.useXpath().waitForElementVisible("//option[contains(text(), '"+nativeLanguage+"')]", 15000)
	.click("//option[contains(text(), '"+nativeLanguage+"')]");
	
	client.useCss().waitForElementVisible('div.up-form-block__field', 15000);

	//need to compare selected language with nativeLanguage
	client.click('div.up-form-block__field > button.btn.btn--primary');
	
	return displayLanguage.waitForElementVisible('@languageField', 15000);
});

//Course Overview feature
Then(/^User navigates to Courses$/, function(){
	//get link and add to link some combintation
	//client.pause(5000);
	//client.click('#cascadaNavCollapse > ul > li:nth-child(2) > a');
	client.waitForElementVisible('body > div:nth-child(1) > header > div > nav > div:nth-child(1) > div:nth-child(2) > a', 15000)
	.click('body > div:nth-child(1) > header > div > nav > div:nth-child(1) > div:nth-child(2) > a');
	//navBarVocabualry.click('@coursesVoc');
	
	return coursesOverview.waitForElementVisible('@mainHeader', 15000);
});


var courseChange = client.page.courseChanging();
var message = courseChange.section.messageSection;
var errorSection = courseChange.section.errorSection;

Then(/^change link and Error message shown$/, function(){
//navigate to wrong link to see the message
	client.url(function (response) {
		
		return page.navigate(response.value + '48576ytuh');
   });

	errorSection.waitForElementVisible('@h1', 15000);
	
	return errorSection.assert.elementPresent('@p1')
	.assert.elementPresent('@p2')
	.assert.elementPresent('@goBackButton');
});

Then(/^Course Overview message shown$/,function(){
	message.waitForElementVisible('@notNowButton', 15000);
	
	return message.assert.elementPresent('@changeLanguageButton');
});

Then(/^User press to link \'(.*)\'$/, function(linkNavigate){
	
	return page.navigate(linkNavigate);
});

Then(/^User choose available course and press Start$/, function(){
	// coursesOverview.click('@newCourse');
	// return coursesOverview.waitForElementVisible('@secondNewSection', 15000)
	//  .click('@startLesson');

	 client.waitForElementVisible('li.courses-list__item:nth-of-type(1) > div > ul.lesson-list', 15000);
	 return client.click('div:nth-child(2) > ul > li.lesson-box.lesson-box--is-active > div > div.lesson-box__actions');
});

//logged in to staging
Given(/^User logging to staging$/, function(){
	page.navigate('https://pass.babbel.cn');
	client.setValue('input', 'loc1,passerby,shown')
	.click('button');

	return client.pause(5000);
});

//New Course Page

Then(/^User press drop-down list with courses$/, function(){
	
	client.waitForElementVisible('div.course-overview-header__content > a.btn', 5000)
	.click('div.course-overview-header__content > a.btn');
	client.waitForElementVisible('div.cascada-modal__body', 15000);
//script counts number of course boxes and start buttons. If you is customer this two 
//values should be equal
	var name = "";
	client.getAttribute('div.cascada-modal__body.course-overview-list-modal-container__body > ul > li:nth-child(1) > div>a>div>div>h3', 
		'textContent', function(result){
			name = result.value;
			console.log("result.value ", result.value);
		});
	client.click('div.cascada-modal__body.course-overview-list-modal-container__body > ul > li:nth-child(1) > div');

	var newName = "";
	return client.getAttribute('div.course-overview-header__title', 'textContent', function(res){
		client.expect.element('div.course-overview-header__title').text.to.equal(name);
	});
});

Then(/^User choose first course from list$/, function(){
	//choose the way: new beginner etc
	//client.pause(2000);	//div.cascada-modal__body > ul > li:nth-child(1) > a > div
	client.waitForElementVisible('li:nth-child(1) > a > div', 15000);
	client.click('div.container > div > div > div > div > div > div > ul > li > a');//client.click('li:nth-child(1) > a > div');
	//choose course
	//client.waitForElementVisible('li:nth-child(1) > a >div', 15000).click('li:nth-child(1) > a >div');
	client.waitForElementVisible('div.lesson-box:nth-child(1)', 15000);
	client.expect.element('div.lesson-box:nth-child(1)> div>div:nth-child(1)').text.to.contain('1');
	client.expect.element('div.lesson-box:nth-child(1)> div>div>h3').to.be.present;
	
	return client.expect.element('div.lesson-box:nth-child(1)> div>div>div.lesson-box__details').to.be.present;
	//return client.pause(5000);
});

Then(/^First lesson has Start button$/, function(){
	return firstCourse.assert.elementPresent('@startButton');
});

Then(/^Other two lessons are locked$/, function(){
	//second lesson presents
	firstCourse.assert.elementPresent('@secondLesson');
	//third lesson presents
	return firstCourse.assert.elementPresent('@thirdLesson');
});

Then(/^Show all lessons button are shown$/, function(){
	//show all lessons button
	return client.expect.element('div:nth-child(2) > div > span').to.be.present;
});

Then(/^User press on Show all lessons$/, function(){
	return client.click('div:nth-child(2) > div > span');
	//other lessons should present
});

Then(/^Other lessons are locked$/, function(){
	return firstCourse.waitForElementVisible('@fourthLesson', 15000);
});

Then(/^Shown lessons from opened course are avilable for customer$/, function(){
	//first Lesson
	firstCourse.assert.elementPresent('@customerFirstLesson');
	firstCourse.assert.elementPresent('@customerFirstStrartButton');

	//second Lesson					
	firstCourse.assert.elementPresent('@customerSecondLesson');
	firstCourse.assert.elementPresent('@customerSecondStartButton');

	//third Lesson
	firstCourse.assert.elementPresent('@customerThirdLesson');
	
	return firstCourse.assert.elementPresent('@customerThirdStartButton');
});

Then(/^Expand all lessons are available for customer$/, function(){
	client.waitForElementVisible('div:nth-child(2) > div > span', 15000);
	client.assert.elementPresent('div:nth-child(2) > div > span');
	client.click('div:nth-child(2) > div > span');
	
	firstCourse.waitForElementVisible('@customerFourthLesson', 15000);
	firstCourse.assert.elementPresent('@customerFourthLesson');
	firstCourse.assert.elementPresent('@customerFourthStartButton');

	return client.assert.elementPresent('div:nth-child(2) > div > span');
});


//step for new course boxes
Then(/^User choose first course from list New Course$/, function(){
	coursesHeaderSecond.waitForElementVisible('@NameOfCourses', 15000);
	coursesHeaderSecond.assert.elementPresent('@ChooseLevel');

	client.assert.elementPresent('ul.courses-list > li.courses-list__item');
	client.assert.elementPresent('ul.courses-list > li.courses-list__item >div >a');

	return client.click('ul.courses-list > li.courses-list__item >div >a');
});

Then(/^User navigates to Extras$/, function(){
	client.waitForElementVisible('nav > div:nth-child(1) > div:nth-child(3) > a', 15000)
	.click('nav > div:nth-child(1) > div:nth-child(3) > a');
	
	client.waitForElementVisible('div.course-overview_content', 15000);
	client.verify.visible('div.course-overview_content > div.header');
	client.verify.visible('div.course-overview_content > div.header');
	
	return client.verify.visible('div.course-overview_content > ul.courses-list');
});

Then(/^User press Courses from Extras$/, function(){
	client.useCss().click('#cascadaNavCollapse > ul > li:nth-child(2) > a');

	return client.waitForElementVisible('div.header__main', 15000);
});

//checking availability for customer user
Then(/^User check availability all lessons$/, function(){

	var box='';
	client.waitForElementVisible('div.lesson-box', 15000);
	client.elements('css selector', 'div.lesson-box', function (result){
		box = result.value.length;
	});
	var buttons ='';
	client.elements('css selector', 'div.lesson-box >div > div > a', function(resultVal){
		buttons = resultVal.value.length;
	});

	return client.assert.equal(box, buttons);
});

//User change language in Babbel by choosing in drop-down list in upper right corner
Then(/^User change language to \'(.*)\'$/, function(changeLanguage){
	//user press to button with language
	client.useCss().click('#cascadaNavCollapse > div > div:nth-child(1) > div');
	client.useXpath().waitForElementVisible("//span[contains(text(), '" + changeLanguage + "')]", 15000)
	.click("//span[contains(text(), '" + changeLanguage + "')]");

	return client.useCss().waitForElementVisible('div.cascada-navbar__section', 15000);
});

//Banner for customers
Then(/^User see banner for cumstomers$/, function(){

	return client.waitForElementVisible('div.courses-banner__content', 15000)
	.click('div.courses-banner__content');
});

//Banner for L2 Portuguese
Then(/^User see banner for Portuguese language$/, function(){
	
	dashboardPage.expect.section('@PortugueseBanner').to.be.visible.after(5000);
	PortugueseBanner.expect.element('@showMoreButton').to.be.visible;
	PortugueseBanner.expect.element('@closeButton').to.be.visible;

	//Show me araound! button presents and can be clicked
	PortugueseBanner.click('@showMoreButton');
	dashboardPage.expect.section('@ExplainBanner').to.be.visible;
	ExplainBanner.expect.element('@title').to.be.visible;
	ExplainBanner.expect.element('@body').to.be.visible;

	//close banner with description
	ExplainBanner.click('@closeButton');
	dashboardPage.expect.section('@PortugueseBanner').to.be.visible;
	PortugueseBanner.click('@closeButton');
	
	return dashboardPage.expect.section('@PortugueseBanner').to.not.be.present;
});
//Need this step because we saved data about closing banner only in browser, not in DB
When(/^User close Portuguese Banner$/, function(){
	return PortugueseBanner.waitForElementVisible('@closeButton', 15000)
	.click('@closeButton');
});

Then(/^Scroll screen down$/, function(){
	//client.execute('window.scrollTo(0,document.body.scrollHeight);');
	return client.moveToElement('div:nth-child(2) > div > span', 100, 100);
	
	//return client.pause(5000);
});

//Banner on Courses page with prices

Then(/^User press on Banner with Prices$/, function(){
	courses.expect.section('@priceBanner').to.be.visible.after(15000);
	priceBanner.expect.element('@link').to.be.visible;
	client.execute('window.scrollTo(0,document.body.scrollTop);');

	return priceBanner.click('@link');
});

Then(/^Prices page is shown$/, function(){
	pricesPage.expect.section('@containerSection').to.be.visible.after(15000);
	containerSection.expect.element('@learningLanguage').to.be.visible.after(15000);
	return containerSection.expect.element('@prices').to.be.visible.after(15000);
});

Then(/^User press Courses on top$/, function(){
	navBarVocabualry.waitForElementVisible('@coursesVoc', 15000);
	
	return navBarVocabualry.click('@coursesVoc');
});

Then(/^User sees banner with text \'(.*)\'$/, function (bannerText) {
	courses.expect.section('@missingContent').to.be.visible.after(15000);
	client.pause(5000);
	missingContent.assert.elementPresent('@image');
	missingContent.assert.elementPresent('@title');
	
	return missingContent.expect.element('@title').text.to.equal(bannerText);
});

Then(/^there are no Courses$/, function () {
	courses.expect.section('@missingContent').to.be.visible.after(15000);

	return client.expect.element('ul.courses-list').to.not.be.present;
});

  Then(/^User see Extras page$/, function(){
	  client.useCss().waitForElementVisible('div.course-overview_content', 15000);
	  courses.expect.section('@extrasPage').to.be.visible.after(15000);
	  extrasPage.assert.elementPresent('@header');
	  
	  return extrasPage.assert.elementPresent('@courses');
  });
