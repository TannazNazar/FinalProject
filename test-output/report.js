$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Creating a new Account",
  "description": "",
  "id": "registration;creating-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Registration"
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
  "name": "I click on SignUp",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I fillup \"\u003cpaypayment\u003e\" and  \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and \"\u003cEmail\u003e\" and \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "registration;creating-a-new-account;",
  "rows": [
    {
      "cells": [
        "paypayment",
        "FirstName",
        "LastName",
        "Email",
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "registration;creating-a-new-account;;1"
    },
    {
      "cells": [
        "Free Edition",
        "Tannaz",
        "Nazar",
        "Tanaz.nazar@gmail.com",
        "TannazNazar",
        "Password12345@"
      ],
      "line": 14,
      "id": "registration;creating-a-new-account;;2"
    },
    {
      "cells": [
        "Free Edition",
        "Sheyda",
        "Karimi",
        "Sheyda.key@gamil.com",
        "SheydaKarimi",
        "Shey12345@"
      ],
      "line": 15,
      "id": "registration;creating-a-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 917703,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Creating a new Account",
  "description": "",
  "id": "registration;creating-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Registration"
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
  "name": "I click on SignUp",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I fillup \"Free Edition\" and  \"Tannaz\" and \"Nazar\" and \"Tanaz.nazar@gmail.com\" and \"TannazNazar\" and \"Password12345@\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 2851243800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 2792480478,
  "status": "passed"
});
formatter.match({
  "location": "NewAccount.i_click_on_SignUp()"
});
formatter.result({
  "duration": 3909063120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Edition",
      "offset": 10
    },
    {
      "val": "Tannaz",
      "offset": 30
    },
    {
      "val": "Nazar",
      "offset": 43
    },
    {
      "val": "Tanaz.nazar@gmail.com",
      "offset": 55
    },
    {
      "val": "TannazNazar",
      "offset": 83
    },
    {
      "val": "Password12345@",
      "offset": 101
    }
  ],
  "location": "NewAccount.i_fillup_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1482642746,
  "status": "passed"
});
formatter.match({
  "location": "NewAccount.i_click_on_submit_button()"
});
formatter.result({
  "duration": 154026881,
  "status": "passed"
});
formatter.match({
  "location": "NewAccount.i_close_the_browser()"
});
formatter.result({
  "duration": 149920944,
  "status": "passed"
});
formatter.after({
  "duration": 171404,
  "status": "passed"
});
formatter.before({
  "duration": 63097,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Creating a new Account",
  "description": "",
  "id": "registration;creating-a-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Registration"
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
  "name": "I click on SignUp",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I fillup \"Free Edition\" and  \"Sheyda\" and \"Karimi\" and \"Sheyda.key@gamil.com\" and \"SheydaKarimi\" and \"Shey12345@\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 1125226370,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 2514047800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccount.i_click_on_SignUp()"
});
formatter.result({
  "duration": 3948650158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Edition",
      "offset": 10
    },
    {
      "val": "Sheyda",
      "offset": 30
    },
    {
      "val": "Karimi",
      "offset": 43
    },
    {
      "val": "Sheyda.key@gamil.com",
      "offset": 56
    },
    {
      "val": "SheydaKarimi",
      "offset": 83
    },
    {
      "val": "Shey12345@",
      "offset": 102
    }
  ],
  "location": "NewAccount.i_fillup_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1350874064,
  "status": "passed"
});
formatter.match({
  "location": "NewAccount.i_click_on_submit_button()"
});
formatter.result({
  "duration": 122189551,
  "status": "passed"
});
formatter.match({
  "location": "NewAccount.i_close_the_browser()"
});
formatter.result({
  "duration": 140633859,
  "status": "passed"
});
formatter.after({
  "duration": 138502,
  "status": "passed"
});
});