Feature: RegisterFeature

  Scenario: Creating accout
    Given I Open browser
    And I navigate to the FreaCrm
    When Click on Sign up Link
    And Fill up the following information
      | PayPlan      | FirstName | LastName | Email                 | UserName    | Password      |
      | Free Edition | Tannaz    | Nazar    | Tanaz.nazar@gmail.com | TananzNazar | Paswprd12345@ |
    And Click on submit
    And I Close browser

  Scenario Outline: create a new account
    Given I Open browser
    And I navigate to the FreaCrm
    When Click on Sign up Link
    And I fillup "<PayPayment>" and "<FirstName>" and "<LastName>" and "<Email>" and "<UserName>" and "<Password>"
    And Click on submit
    And I Close browser
    
			Examples:    
      | PayPayment  | FirstName | LastName | Email                 | UserName    | Password       |
      | Free Edition | Tannaz    | Nazar    | Tanaz.nazar@gmail.com | TannazNazar | Password12345@ |
