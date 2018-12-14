package stepdefinations;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.When;
import testUtills.BaseClass;

public class RegistrationSteps extends BaseClass {

	@When("^Click on Sign up Link$")
	public void click_on_Sign_up_Link() throws Throwable {
		Thread.sleep(3000);
		WebElement signUpLink = driver.findElement(By.linkText("Sign Up"));

		signUpLink.click();

	}

	@When("^Fill up the following information$")
	public void fill_up_the_following_information(DataTable infoTable) throws Throwable {
		// now we gonna call our variable so we choose map
		// our info table is a map type
		// now we have to create a local varibale of table
		List<Map<String, String>> maps = infoTable.asMaps(String.class, String.class); // string is a class so we use
																						// class

		for (Map<String, String> mapcell : maps) {
			
			String PayPlan=mapcell.get("PayPlan");
			WebElement planid = driver.findElement(By.id("payment_plan_id"));
			Select select = new Select(planid);
			select.selectByVisibleText(PayPlan);
			String FistName=mapcell.get("FirstName");
			driver.findElement(By.name("first_name")).sendKeys(FistName);
			String LastName=mapcell.get("LastName");
			driver.findElement(By.name("surname")).sendKeys(LastName);
			String Email=mapcell.get("Email");
			driver.findElement(By.name("email")).sendKeys(Email);
			driver.findElement(By.name("email_confirm")).sendKeys(Email);
			String UserName=mapcell.get("UserName");
			driver.findElement(By.name("username")).sendKeys(UserName);
			String Password=mapcell.get("Password");
			driver.findElement(By.name("password")).sendKeys(Password);
			driver.findElement(By.name("passwordconfirm")).sendKeys(Password);
			
			WebElement agreeTermBox = driver.findElement(By.name("agreeTerms"));
			if (!agreeTermBox.isSelected()) {
				agreeTermBox.click();
			}
		}
	}

	@When("^Click on submit$")
	public void click_on_submit() throws Throwable {
		WebElement btnSubmit = driver.findElement(By.name("submitButton"));
		btnSubmit.click();
	}

}
