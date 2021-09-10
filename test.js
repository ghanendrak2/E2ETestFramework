const { browser } = require("protractor");

describe('angularjs homepage', function () {
  it('should greet the named user', function () {
    // Load the AngularJS homepage
    browser.get('http://www.angularjs.org');

    // Find the element with ng-model matching 'yourName' - this will
    // find the <input type="text" ng-model="yourName"/> element - and then
    // type 'Julie' into it.
    element(by.model('yourName')).sendKeys('Julie');

    // Find the element with binding matching 'yourName' - this will
    // find the <h1>Hello {{yourName}}!</h1> element.
    var greeting = element(by.binding('yourName'));

    // Assert that the text element has the expected value.
    // Protractor patches 'expect' to understand promises.

    expect(greeting.getText()).toEqual('Hello Julie!');
    console.log("Passed");
  });
    it('should multiply two integers', function () {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(2);
      element(by.model('second')).sendKeys(7);
      element(by.model('operator')).click();
      element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
      element(by.id('gobutton')).click();
      //expect(element(by.binding('latest')).getText()).toEqual('21'); 
      //Incorrect expectation //
      expect(element(by.binding('latest')).getText()).toEqual('14');
      //Correct expectation 
    });
  });
  it('should multiply two integers', function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(2);
    element(by.model('second')).sendKeys(7);
    element(by.model('operator')).click();
    element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
    element(by.id('gobutton')).click();
    //expect(element(by.binding('latest')).getText()).toEqual('21'); 
    //Incorrect expectation //
    expect(element(by.binding('latest')).getText()).toEqual('14');
    //Correct expectation 
  });

