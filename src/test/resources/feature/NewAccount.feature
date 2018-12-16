Feature: Registration

  @Registration
  Scenario Outline: Creating a new Account
    Given I Open browser
    And I navigate to the FreaCrm
    When I click on SignUp
    And I fillup "<paypayment>" and  "<FirstName>" and "<LastName>" and "<Email>" and "<Username>" and "<Password>"
    Then I click on submit button
    And I close the browser

    Examples: 
      | paypayment   | FirstName | LastName | Email                 | Username     | Password       |
      | Free Edition | Tannaz    | Nazar    | Tanaz.nazar@gmail.com | TannazNazar  | Password12345@ |
      | Free Edition | Sheyda    | Karimi   | Sheyda.key@gamil.com  | SheydaKarimi | Shey12345@     |
      
      
