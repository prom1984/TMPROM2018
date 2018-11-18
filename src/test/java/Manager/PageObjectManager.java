package Manager;

import Pages.Sekcja1;
//import Pages.Sekcja2;
import Pages.Sekcja3;
import Pages.Sekcja4;
import org.openqa.selenium.WebDriver;

public class PageObjectManager {
    private WebDriver driver;
    private Sekcja1 s1;
    private Sekcja3 s3;
//    private Sekcja2 s2;
    private Sekcja4 s4;


    public  Sekcja1 getSekcja1() { return (s1 == null) ? s1 = new Sekcja1(driver) : s1; }
//    public  Sekcja2 getSekcja2() { return (s2 == null) ? s2 = new Sekcja2(driver) : s2; }
    public  Sekcja3 getSekcja3() { return (s3 == null) ? s3 = new Sekcja3(driver) : s3; }

    public PageObjectManager(WebDriver driver) {
        this.driver = driver;
    }
}
