package Test;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class BaseTest {
    protected  static WebDriver driver;

    @BeforeClass
    public  static void setUp() {
        System.setProperty("webdriver.chrome.driver", "D:\\DevTools\\chromedriver.exe");
                //mozna dodac sciezke do zmiennych srodowiskowych i w cmd chromedriver
                // wywolac jak wstanie to ok i pomijamy set property
          driver = new ChromeDriver();
          driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    @Before
    public void initialize() { driver.get("https://directpl.com/warsztat"); }

    @After
    public void cleanUp() { driver.manage().deleteAllCookies(); }

    @AfterClass
    public static void tearDown() { driver.quit(); }
}
