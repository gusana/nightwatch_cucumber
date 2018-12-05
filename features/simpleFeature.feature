Feature: SimpleFeature
	
	Scenario: Verify main pages in local repo
		Given User opens localhost
		Then section Main Dashboard is visible
		Then button Start lesson is visible
		Then section Score is visible