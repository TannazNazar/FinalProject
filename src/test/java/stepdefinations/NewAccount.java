package stepdefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testUtills.BaseClass;

public class NewAccount extends BaseClass {
	@When("^I click on SignUp$")
	public void i_click_on_SignUp() throws Throwable {
		Thread.sleep(3000);
		WebElement signUpLink = driver.findElement(By.linkText("Sign Up"));
		signUpLink.click();

	}

	@When("^I fillup \"([^\"]*)\" and  \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_fillup_and_and_and_and_and(String paypayment, String FirstName, String LastName, String Email,
			String Username, String Password) throws Throwable {
		WebElement paymentPlan = driver.findElement(By.id("payment_plan_id"));
		Select sel = new Select(paymentPlan);
		sel.selectByVisibleText(paypayment);
		driver.findElement(By.name("first_name")).sendKeys("FirstName");
		driver.findElement(By.name("surname")).sendKeys("LastName");
		driver.findElement(By.name("email")).sendKeys("Email");
		driver.findElement(By.name("email_confirm")).sendKeys("Email");
		driver.findElement(By.name("username")).sendKeys("Username");
		driver.findElement(By.name("password")).sendKeys("Password");
		driver.findElement(By.name("passwordconfirm")).sendKeys("Password");
		WebElement agreeTerm = driver.findElement(By.name("agreeTerms"));
		if (!agreeTerm.isSelected()) {
			agreeTerm.click();
		}
	}

	@Then("^I click on submit button$")
	public void i_click_on_submit_button() throws Throwable {
		driver.findElement(By.xpath("//div[@class='myButton']")).click();

	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
		driver.quit();
	}

}
