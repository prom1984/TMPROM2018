package StepsDefinition;

import Manager.PageObjectManager;
import Manager.TestContexManager;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Steps {
    TestContexManager tcm;
    public  Steps(TestContexManager tcm){
        this.tcm = tcm;
    }
    //2 linijki ponizej byly przed TestContextManagerem
//    WebDriver driver;
//    PageObjectManager pom;

//    @Given("^user is on the test page$")
//    public void user_is_on_the_test_page() {
//        System.setProperty("webdriver.chrome.driver", "D:/DevTools/chromedriver.exe");
//        driver = new ChromeDriver();
//
//        pom = new PageObjectManager(driver);
//        driver.get("http://directpl.com/warsztat");
//    }
//    @When("^user clicks link (\\d+)$")
//    public void user_clicks_link(int arg1) {
//    }
//
//    @Then("^user is on page (\\d+)$")
//    public void  user_is_on_page(int arg1) {
//        Assert.assertTrue(pom);
//    }
@Given("^user is on the test page$")
public void user_is_on_the_test_page() throws Throwable {

        System.setProperty("webdriver.chrome.driver", "D:/DevTools/chromedriver.exe");
        tcm.getDriver().get("http://directpl.com/warsztat");
    }

    @When("^user clicks link (\\d+)$")
    public void user_clicks_link(int arg1) throws Throwable {
        tcm.getPom().getSekcja1().clickNumberededLink(arg1);
    }

    @Then("^user is on page (\\d+)$")
    public void user_is_on_page(int arg1) throws Throwable {
        Assert.assertTrue(tcm.getPom().getSekcja1().isLinkOpened(arg1));
    }
}
