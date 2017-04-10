'use strict';

module.exports = function() {

  // Scenario: Imagefile updated via dropping and clicking
  // Given I have an imagedrop component
  // When I click on it
  // And I click update
  // Then the image should be updated
  //

  this.Given(/^I have an imagedrop component$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
  this.When(/^I click on it$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^I click update$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
  this.Then(/^the image should be updated$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  //-----------------------------------------------------------------------
  // Scenario: Updated image undone and redone
  // Given I have an imagedrop Component
  // When I click undo
  // Then the previous image should be updated
  //Scenario: Imagefile updated via dropping and clicking
  this.When(/^I click undo$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
  this.Then(/^the previous image should be updated$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


}
