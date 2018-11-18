package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Sekcja4 extends PageObject {

    @FindBy(css = "[data-section]+section button")
    private WebElement button;

    @FindBy(css = "img")
    private  WebElement image;

    public void clickButton(){
        button.click();
    }

    public void waitForButton(){
        WebDriverWait wait = new WebDriverWait(driver,10);
        wait.until(ExpectedConditions.elementToBeClickable(button));
        button.click();
    }

    public boolean isImageDisplayed() {return image.isDisplayed();}

    public  Sekcja4(WebDriver driver) {super(driver);}

}
