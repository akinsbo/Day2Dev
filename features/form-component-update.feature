# comment

#Acceptance Criteria
#Rules: Must allow upload of file
#  And allow drag and drop
#  And Allow undo and redo


Feature: Components send update request with information
  As an Administrator
  I want to be able to update a Component
  So that it updates and entity

  #example
  Scenario: Imagefile updated via dropping and clicking
  Given I have an imagedrop component
  When I click on it
  And I click update
  Then the image should be updated

  Scenario: Updated image undone and redone
  Given I have an imagedrop component
  When I click undo
  Then the previous image should be updated
