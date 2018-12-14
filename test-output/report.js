$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterFeature",
  "description": "",
  "id": "registerfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Creating accout",
  "description": "",
  "id": "registerfeature;creating-accout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@registration"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Sign up Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Fill up the following information",
  "rows": [
    {
      "cells": [
        "PayPlan",
        "FirstName",
        "LastName",
        "Email",
        "UserName",
        "Password"
      ],
      "line": 9
    },
    {
      "cells": [
        "Free Edition",
        "Tannaz",
        "Nazar",
        "Tanaz.nazar@gmail.com",
        "TananzNazar",
        "Paswprd12345@"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 3614575391,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 2324780287,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_Sign_up_Link()"
});
formatter.result({
  "duration": 4061941681,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.fill_up_the_following_information(DataTable)"
});
formatter.result({
  "duration": 7251874157,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit()"
});
formatter.result({
  "duration": 5978221898,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 133027256,
  "status": "passed"
});
});