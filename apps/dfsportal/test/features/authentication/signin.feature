Feature: Sign In
	In order to access Dell Financial Service Portal
	As a customer
	I want to be able to sign-in
	So that I can manage my DFS accounts 

	Scenario: Signing In
		Given I have visited the sign in page
			And I have entered my single DPA profile credentials
		When I sign in
		Then I should land on the secured site
