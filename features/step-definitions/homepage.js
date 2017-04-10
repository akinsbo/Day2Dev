'use strict';

module.exports = function() {

  // Scenario: Image added to mock-homepage
  // Given I have a mock-homepage
  // When I add an image to it
  // And I click Update button
  // Then the image should be updated
  //
  // Scenario: Text changed on mock-homepage
  // Given I have a mock-homepage
  // When I edit the text in the titlebar or showtitle
  // And I click Update button
  // Then the text should be update
  //
  // Scenario: User can undo and redo changes
  // Given I have a mock-homepage
  // When I change the state by editing the titlebar or showtitle or image
  // And I click Update button -may or may not-
  // And I click undo button multiple times
  // And I click redo button multiple time
  // Then the state should return to the previous started for up to 20 states
  //-------------------------------------------------------------------------------

  // Scenario: Image added to mock-homepage
  // Given I have a mock-homepage
  // When I add an image to it
  // And I click Update button
  // Then the image should be updated

  this.Given(/^I have a mock\-homepage$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I add an image to it$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I click Update button$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^the image should be update$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  // Scenario: Text changed on mock-homepage
  // Given I have a mock-homepage
  // When I edit the text in the titlebar or showtitle
  // And I click Update button
  // Then the text should be update
  this.When(/^I edit the text in the titlebar or showtitle$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Then(/^the text should be update$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  //--------------------------------------------------------------------------

  // Scenario: User can undo and redo changes
  // Given I have a mock-homepage
  // When I change the state by editing the titlebar or showtitle or image
  // And I click Update button -may or may not-
  // And I click undo button multiple times
  // And I click redo button multiple time
  // Then the state should return to the previous started for up to 20 states
  this.When(/^I change the state by editing the titlebar or showtitle or image$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I click Update button \-may or may not\-$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.When(/^I click undo button multiple times$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I click redo button multiple time$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^the state should return to the previous started for up to (\d+) states$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
}
