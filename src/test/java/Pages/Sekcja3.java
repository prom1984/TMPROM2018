package Pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class Sekcja3 extends PageObject {
    @FindBy(css = "[data-section] button")
    private WebElement button;

    @FindBy(css =  ".row:last-of-type")
    private WebElement lastTextLine;

    @FindBy(css = ".row")
    private List<WebElement> textLines;

    public  void clickButton() {
        button.click();
    }

    public void getAlertText() {
        Alert alert = driver.switchTo().alert();
        alert.accept();
    }
    public void acceptAlert() {
        Alert alert = driver.switchTo().alert();
        alert.accept();
    }

    public String getLastLine() { return lastTextLine.getText(); }

    public int countLines() {return textLines.size();}

    public  Sekcja3(WebDriver driver) {super(driver);}
}
