Feature: LoginFeature

  Background: 
    Given I Open browser
    And I navigate to the FreaCrm

  @first
  Scenario: valid login
    When I enter "TannazNazar" and "Password12345@"
    And I click login button
    Then I successfully logged in as "Tannaz Nazar"
    And I Close browser

  @second
  Scenario Outline: invalid login
    When I enter "<username>" and "<password>"
    And I click login button
    Then I should receive error massage
    And I Close browser

    Examples: 
      | username    | password       |
      | TannazNazar | Password12345@ |

  @third
  Scenario: valid username and Invalid Password
    When I enter "TannazNazar" and "Password12345@"
    And I click login button
    Then I should receive error massage
    And I Close browser
