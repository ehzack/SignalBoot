const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.get("https://www.facebook.com/login.php").then(async function () {
  driver.findElement(webdriver.By.id("email")).sendKeys("test@gmail.com");
  driver.findElement(webdriver.By.id("pass")).sendKeys("test@gmail.com");

  driver.findElement(webdriver.By.id("loginbutton")).click();
});
