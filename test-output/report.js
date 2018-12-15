$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/Register.feature");
formatter.feature({
  "line": 1,
  "name": "RegisterFeature",
  "description": "",
  "id": "registerfeature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Creating accout",
  "description": "",
  "id": "registerfeature;creating-accout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign up Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
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
      "line": 8
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
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 2716791263,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 5877061207,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_Sign_up_Link()"
});
formatter.result({
  "duration": 4284665567,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.fill_up_the_following_information(DataTable)"
});
formatter.result({
  "duration": 2087609667,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit()"
});
formatter.result({
  "duration": 654608898,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 129188042,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "create a new account",
  "description": "",
  "id": "registerfeature;create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on Sign up Link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I fillup \"\u003cPayPayment\u003e\" and \"\u003cFirstName\u003e\" and \"\u003cLastName\u003e\" and \"\u003cEmail\u003e\" and \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "registerfeature;create-a-new-account;",
  "rows": [
    {
      "cells": [
        "PayPayment",
        "FirstName",
        "LastName",
        "Email",
        "UserName",
        "Password"
      ],
      "line": 22,
      "id": "registerfeature;create-a-new-account;;1"
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
      "line": 23,
      "id": "registerfeature;create-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "create a new account",
  "description": "",
  "id": "registerfeature;create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I Open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I navigate to the FreaCrm",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on Sign up Link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I fillup \"Free Edition\" and \"Tannaz\" and \"Nazar\" and \"Tanaz.nazar@gmail.com\" and \"TannazNazar\" and \"Password12345@\"",
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
  "line": 18,
  "name": "Click on submit",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_Open_browser()"
});
formatter.result({
  "duration": 1143987013,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_the_FreaCrm()"
});
formatter.result({
  "duration": 2497779831,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_Sign_up_Link()"
});
formatter.result({
  "duration": 4221925621,
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
      "offset": 29
    },
    {
      "val": "Nazar",
      "offset": 42
    },
    {
      "val": "Tanaz.nazar@gmail.com",
      "offset": 54
    },
    {
      "val": "TannazNazar",
      "offset": 82
    },
    {
      "val": "Password12345@",
      "offset": 100
    }
  ],
  "location": "RegistrationSteps.i_fillup_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1997863696,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.click_on_submit()"
});
formatter.result({
  "duration": 403082430,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_close_browser()"
});
formatter.result({
  "duration": 145114872,
  "status": "passed"
});
});