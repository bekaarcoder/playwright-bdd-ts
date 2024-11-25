@regression @login
Feature: Webdriveruniversity.com - Login portal Page

  Scenario Outline: Validate Login Portal
    Given I navigate to webdriveruniversity homepage
    When I click on the login portal link
    And I switch to a new browser tab
    And I type username "<username>"
    And I type password "<password>"
    And I click on login button
    Then I am presented with alert message "<message>"

    @ignore
    Examples:
      | username  | password     | message              |
      | webdriver | webdriver123 | validation succeeded |
      | webdriver | webdriver    | validation failed    |
      | webdriver | webdriver123 | validation failed    |

    @ignore
    Examples:
      | username  | password     | message              |
      | webdriver | webdriver123 | validation succeeded |

    Examples:
      | username  | password     | message              |
      | webdriver | webdriver123 | validation succeeded |
