Feature: Login

    Scenario: Succsesfully log in with valid username and password
        Given I am on Login page
        When I enter a "tomsmith" username
        And I enter a "SuperSecterPassword!" password
        And I press on Login buttom
        Then I see a message "You logged into a secure area!"
        And I see the Logout button

    Scenario: Can't log in with invalid username and password
        Given I am on Login page
        When I enter a "asdwe" username
        And I enter a "asdwqtr" password
        And I press on Login buttom
        Then I see a message "Your username is invalid!"
        And I don't see the Logout button