Feature: User can arrange homepage images
  As a user
  I want to arrange my homepage
  So that I can create a new homepage

  Scenario: Image added to mock-homepage
  Given I have a mock-homepage
  When I add an image to it
  And I click Update button
  Then the image should be updated

  Scenario: Text changed on mock-homepage
  Given I have a mock-homepage
  When I edit the text in the titlebar or showtitle
  And I click Update button
  Then the text should be update

  Scenario: User can undo and redo changes
  Given I have a mock-homepage
  When I change the state by editing the titlebar or showtitle or image
  And I click Update button -may or may not-
  And I click undo button multiple times
  And I click redo button multiple time
  Then the state should return to the previous started for up to 20 states
