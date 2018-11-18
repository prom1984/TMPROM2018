package Pages;

import Pages.PageObject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.List;

public class Sekcja1 extends PageObject {

    @FindBy(css="#sekcja a")
    private  List<WebElement> linki;

    public void clickNumberededLink(int i) { linki.get(i - 1).click(); }

    public boolean isLinkOpened(int i){
        List<String> lista = new ArrayList();
        lista.add("https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna");
        lista.add("https://www.google.pl/");
        lista.add("https://www.seleniumhq.org/");
        lista.add("https://www.directpl.com/");

        return  driver.getCurrentUrl().equals(lista.get(i - 1));
    }

    public Sekcja1(WebDriver driver) {
        super(driver);
    }
}
