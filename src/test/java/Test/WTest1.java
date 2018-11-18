package Test;

import Manager.PageObjectManager;
import org.junit.Assert;
import org.junit.Test;

    public  class WTest1 extends  BaseTest {
        PageObjectManager pom = new PageObjectManager(driver);
//        PageObjectManager pom = new PageObjectManager(driver);

        @Test
        public void TestLinkOne() {
            for (int i = 1; i < 5; i++) {
                pom.getSekcja1().clickNumberededLink(i);
                Assert.assertTrue(pom.getSekcja1().isLinkOpened(i));
                initialize();
            }

        }

        @Test
        public void testAllert() {
            pom.getSekcja3().clickButton();
//            Assert.assertEquals(pom.getSekcja3().getAlertText(),"Alert Uwaga Achtung Pozor :)");
            pom.getSekcja3().acceptAlert();
            System.out.println(pom.getSekcja3().getLastLine());
//            Assert.assertTrue(pom.getSekcja3()).getLastLine().contains("Dziwny wiersz dodawany dynamicznie");
        }

//        @Test
//        public void sekcja4Test(){
//            Assert.assertFalse(pom.getSekcja4().isImageDisplayed());
//            pom.getSekcja4().clickButton();
//            Assert.assertFalse(pom.getSekcja4().isImageDisplayed());
//            pom.getSekcja4().waitForButton();
//            pom.getSekcja4().clickButton();
//            Assert.assertTrue(pom.getSekcja4().isImageDisplayed());
//            pom.getSekcja4().clickButton();
//            Assert.assertFalse(pom.getSekcja4().isImageDisplayed());
//        }
    }
