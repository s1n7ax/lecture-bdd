Feature: Calculator Basic Operations
  As a user
  I want to perform arithmetic operations
  So that I can get accurate results

  Scenario Outline: Add two numbers
    Given I have entered <Firstvalue> and <Secondvalue> into the calculator
    When I press the add button
    Then the result should be <expectedvalue>

    Examples:
      | Firstvalue | Secondvalue | expectedvalue |
      | 7          | 5           | 12            |
      | 34         | 4           | 38            |
