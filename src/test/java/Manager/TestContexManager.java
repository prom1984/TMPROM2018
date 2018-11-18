package Manager;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestContexManager {
    private PageObjectManager pom;
    private WebDriver driver;

    public TestContexManager() {
        System.setProperty("webdriver.chrome.driver", "D:/DevTools/chromedriver.exe");
//        System.setProperty("webdriver.chrome.driver", "/WebDrivers/chromedriver");
        driver = new ChromeDriver();
        pom = new PageObjectManager(driver);
    }

    public PageObjectManager getPom() {
        return pom;
    }

    public WebDriver getDriver() {
        return driver;
    }

}
