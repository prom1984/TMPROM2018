package StepsDefinition;

import Manager.TestContexManager;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hooks {
    TestContexManager tcm;
    public Hooks(TestContexManager tcm) {
        this.tcm = tcm;
    }

    @Before
    public void biforek(){
        tcm.getDriver().get("http://directpl.com/warsztat");
    }

    @After
    public void afterek(){
        tcm.getDriver().quit();
    }



}
