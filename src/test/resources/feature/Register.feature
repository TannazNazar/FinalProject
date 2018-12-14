Feature: RegisterFeature

  @registration
  Scenario: Creating accout
    Given I Open browser
    And I navigate to the FreaCrm
    When Click on Sign up Link
    And Fill up the following information
      | PayPlan     | FirstName | LastName | Email                 | UserName    | Password      |
      | Free Edition | Tannaz    | Nazar    | Tanaz.nazar@gmail.com | TananzNazar | Paswprd12345@ |
    And Click on submit
    And I Close browser
