package stepdefinations;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void start() {
		System.out.println("Starting ececution");
	}
	
	@After
	//we can put scenario in the parameter because we have after method 
	public void stop(Scenario scenario) {
		System.out.println("stopping the execution");
		
		System.out.println(scenario.getName());
		System.out.println(scenario.getStatus());
	}
}
