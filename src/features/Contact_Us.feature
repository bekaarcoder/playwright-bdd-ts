@regression @contact-us
Feature: Webdriveruniversity.com - Contact Us Page

  Background: Pre-Conditions
    Given I navigate to webdriveruniversity homepage
    When I click on the contact us button
    And I switch to a new browser tab

  Scenario: Valid Contact Us Form Submission
    And I type a first name
    And I type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a thank you message

  Scenario: Invalid Contact Us Form Submission
    And I type a first name
    And I type a last name
    # And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with error message

  Scenario: Valid Contact Us Form Submission -  With Cucumber Expressions
    And I type "Jane" as first name
    And I type "Doe" as last name
    And I enter "janedoe@email.com" as email address
    And I type "Hello Playwright" and number 2 in the comments input
    And I click on the submit button
    Then I should be presented with a thank you message

  @faker
  Scenario: Valid Contact Us Form Submission - With random data
    And I type a random first name
    And I type a random last name
    And I enter a random email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a thank you message

  @smoke
  Scenario Outline: Valid Contact Us Form
    And I type a first name <firstName> and a last name <lastName>
    And I type an email address '<emailAddress>' and a comment '<comment>'
    And I click on the submit button
    Then I should be presented with header text '<message>'

    Examples:
      | firstName | lastName | emailAddress      | comment        | message                     |
      | John      | Doe      | johndoe@email.com | Hello John     | Thank You for your Message! |
      | Jane      | Doe      | janedoe@email.com | Hello Jane Doe | Thank You for your Message! |
      | Max       | Doe      | maxdoe            | Hello Max Doe  | Invalid email address       |
