Feature: Login to FashionDays


Scenario: Unsucessful login
Given Open FashionDays page
When Login with invalid credentials
Then An error message is displayed


Scenario: Sucessful login
Given Open FashionDays page
When Login with valid credentials
Then The user is logged in

Scenario: Succesfull login - using specific data
Given Open FashionDays page
When I click on the account button
And I type email address "carmenfortest1@gmail.com"
And I type password "carmentest"
And I click on the login button
Then The user is logged in

Scenario: Unsuccesfull login - using specific data
Given Open FashionDays page
When I click on the account button
And I type email address "carmen1@gmail.com"
And I type password "carmentest"
And I click on the login button
Then An error message is displayed