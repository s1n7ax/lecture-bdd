import { Given, When, Then, Before } from '@cucumber/cucumber'
import assert from 'assert'
import { Calculator } from '../../src/index.js'

let calculator
let i, j, result

Before(() => {
  calculator = new Calculator()
})

Given('I have entered {int} and {int} into the calculator', function (Firstvalue, Secondvalue) {
  i = Firstvalue
  j = Secondvalue
})

When('I press the add button', function () {
  result = calculator.addition(i, j)
})

Then('the result should be {int}', function (expectedvalue) {
  assert.strictEqual(result, expectedvalue)
})
