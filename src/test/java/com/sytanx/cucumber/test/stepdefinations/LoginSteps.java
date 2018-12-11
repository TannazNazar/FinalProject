package com.sytanx.cucumber.test.stepdefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.AssertJUnit;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	WebDriver driver;
	WebDriverWait wait;

	@Given("^I Open browser$")
	public void i_Open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/driver/chromedriver");
		driver = new ChromeDriver();

	}

	@Given("^I navigate to the FreaCrm$")
	public void i_navigate_to_the_FreaCrm() throws Throwable {
		
		driver.get("https://www.freecrm.com/index.html");

	}

	@When("^I enter valid username and password$")
	public void i_enter_valid_username_and_password() throws Throwable {
		WebElement username = driver.findElement(By.xpath("//input[@placeholder='Username']"));
		username.clear();
		username.sendKeys("mshokriyan");
		
		WebElement password = driver.findElement(By.xpath("//input[@placeholder='Password']"));
		password.clear();
		password.sendKeys("123456Ab");
		Thread.sleep(3000);

	}

	@When("^I click login button$")
	public void i_click_login_button() throws Throwable {
		WebElement btnLogin = driver.findElement(By.xpath("//input[@value='Login']"));
		wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.elementToBeClickable(btnLogin));
		btnLogin.click();

	}

	@Then("^I successfully logged in$")
	public void i_successfully_logged_in() throws Throwable {
		WebElement pageLogo = driver.findElement(By.xpath("//div[@class='noprint']/table/tbody/tr/td[1]"));
		String logoText = pageLogo.getText();
		
		AssertJUnit.assertEquals("CRMPRO", logoText);
		


	}
	
	@When("^I enter invalid username and password$")
	public void i_enter_invalid_username_and_password() throws Throwable {
		WebElement username = driver.findElement(By.xpath("//input[@placeholder='Username']"));
		username.clear();
		username.sendKeys(" ");
		
		WebElement password = driver.findElement(By.xpath("//input[@placeholder='Password']"));
		password.clear();
		password.sendKeys(" ");
		Thread.sleep(3000);
	}

	@Then("^I should receive error massage$")
	public void i_should_receive_error_massage() throws Throwable {
		boolean exist = driver.findElement(By.xpath("//a[@class='navbar-brand']//img[@class='img-responsive']")).isDisplayed();
		Assert.assertTrue(exist);
		
	}
	
	@Then ("^I Close browser$")
	public void i_close_browser() throws Throwable {
		driver.quit();
	}

}