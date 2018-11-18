$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bdd.feature");
formatter.feature({
  "line": 1,
  "name": "Workshop Page Tests",
  "description": "",
  "id": "workshop-page-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test Links",
  "description": "",
  "id": "workshop-page-tests;test-links",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on the test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks link \u003clink\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is on page \u003clink\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "workshop-page-tests;test-links;",
  "rows": [
    {
      "cells": [
        "link"
      ],
      "line": 7,
      "id": "workshop-page-tests;test-links;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 8,
      "id": "workshop-page-tests;test-links;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 9,
      "id": "workshop-page-tests;test-links;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 10,
      "id": "workshop-page-tests;test-links;;4"
    },
    {
      "cells": [
        "4"
      ],
      "line": 11,
      "id": "workshop-page-tests;test-links;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4525621549,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Test Links",
  "description": "",
  "id": "workshop-page-tests;test-links;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on the test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks link 1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is on page 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_the_test_page()"
});
formatter.result({
  "duration": 317105771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "Steps.user_clicks_link(int)"
});
formatter.result({
  "duration": 3600179118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "Steps.user_is_on_page(int)"
});
formatter.result({
  "duration": 18141136,
  "status": "passed"
});
formatter.after({
  "duration": 911691861,
  "status": "passed"
});
formatter.before({
  "duration": 3149029394,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Test Links",
  "description": "",
  "id": "workshop-page-tests;test-links;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on the test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks link 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is on page 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_the_test_page()"
});
formatter.result({
  "duration": 63024026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "Steps.user_clicks_link(int)"
});
formatter.result({
  "duration": 2266148622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "Steps.user_is_on_page(int)"
});
formatter.result({
  "duration": 11269748,
  "status": "passed"
});
formatter.after({
  "duration": 847635219,
  "status": "passed"
});
formatter.before({
  "duration": 3122298306,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test Links",
  "description": "",
  "id": "workshop-page-tests;test-links;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on the test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks link 3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is on page 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_the_test_page()"
});
formatter.result({
  "duration": 54525971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "Steps.user_clicks_link(int)"
});
formatter.result({
  "duration": 2239111073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "Steps.user_is_on_page(int)"
});
formatter.result({
  "duration": 12930056,
  "status": "passed"
});
formatter.after({
  "duration": 865636458,
  "status": "passed"
});
formatter.before({
  "duration": 3174845200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test Links",
  "description": "",
  "id": "workshop-page-tests;test-links;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user is on the test page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user clicks link 4",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is on page 4",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_the_test_page()"
});
formatter.result({
  "duration": 50743406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    }
  ],
  "location": "Steps.user_clicks_link(int)"
});
formatter.result({
  "duration": 300198597414,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027RE6451\u0027, ip: \u002710.2.38.158\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.43.600210 (68dcf5eebde371..., userDataDir: C:\\Users\\SZKOLE~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51964}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: aff8cdc478786e94dc62f7bfb4281eca\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Pages.Sekcja1.clickNumberededLink(Sekcja1.java:16)\r\n\tat StepsDefinition.Steps.user_clicks_link(Steps.java:46)\r\n\tat ✽.When user clicks link 4(bdd.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "Steps.user_is_on_page(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 888693698,
  "status": "passed"
});
});