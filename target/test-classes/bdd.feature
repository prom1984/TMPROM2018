Feature: Workshop Page Tests
  Scenario Outline: Test Links
    Given user is on the test page
    When user clicks link <link>
    Then user is on page <link>
    Examples:
    |link|
    |1   |
    |2   |
    |3   |
    |4   |

