Feature: Sign Out
	In order leave Dell Financial Service Portal
	As a customer
	I want to be able to sign out
	So that I can ensure my information will remain secured

	Background:
		Given I am logged in with my single DPA profile

	Scenario: Signing Out
		When I sign out
		Then I should be redirected back to the Sign In page