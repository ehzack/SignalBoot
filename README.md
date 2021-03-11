## Features

- Selenium
- Selenium-WebDrive
- Node Js

## Installation

### Step 1 – Prerequisites

Execute the following commands to install the required packages on your system. Here Xvfb (X virtual framebuffer) is an in-memory display server for a UNIX-like operating system (e.g., Linux). It implements the X11 display server protocol without any display. This is helpful for CLI applications like CI service.

```bash
sudo apt-get update
sudo apt-get install -y unzip xvfb libxi6 libgconf-2-4
```

Also, install Java on your system. Let’s install Oracle Java 8 on your system or use below command to install OpenJDK.

```bash
sudo apt-get install default-jdk
```

### Step 2 – Install Google Chrome

Now install Latest Google chrome package on your system using the below list commands. Google chrome headless feature opens multipe doors for the automation.

```bash
sudo curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
sudo echo "deb [arch=amd64]  http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list
sudo apt-get -y update
sudo apt-get -y install google-chrome-stable
```

### Step 3 – Install ChromeDriver

You are also required to setup ChromeDriver on your system. ChromeDriver is a standalone server which implements WebDriver’s wire protocol for Chromium. The WebDriver is an open source tool for automated testing of web apps across multiple browsers.

```bash
wget https://chromedriver.storage.googleapis.com/2.41/chromedriver_linux64.zip
unzip chromedriver_linux64.zip
```

You can find the latest ChromeDriver on its official download page. Now execute below commands to configure ChromeDriver on your system.

```bash
sudo mv chromedriver /usr/bin/chromedriver
sudo chown root:root /usr/bin/chromedriver
sudo chmod +x /usr/bin/chromedrive
```

### Step 4 – Download Required Jar Files

The Selenium Server is required to run Remote Selenium WebDrivers. You need to download the Selenium standalone server jar file using the below commands or visit here to find the latest version of Jar file.

```bash
wget https://selenium-release.storage.googleapis.com/3.13/selenium-server-standalone-3.13.0.jar
```

Also download the testng-6.8.7.jar file to your system.

```bash
wget http://www.java2s.com/Code/JarDownload/testng/testng-6.8.7.jar.zip
unzip testng-6.8.7.jar.zip
```

### Step 5 – Start Chrome via Selenium Server

Your server setup is ready. Start the Chrome via standalone selenium server using Xvfb utility.
**Run Chrome via Selenium Server**

```bash
xvfb-run java -Dwebdriver.chrome.driver=/usr/bin/chromedriver -jar selenium-server-standalone.jar
```

Use -debug option at end of command to start server in debug mode.

You can also **_Start Headless ChromeDriver_** by typing the below command on terminal.

```bash
chromedriver --url-base=/wd/hub
```

Your Selenium server is now running with Chrome. Use this server to run your test cases written in Selenium using Google Chrome web browser. Next step is an optional step and doesn’t depend on Step 5.

###Step 6 – NJs Installation

```bash
npm install --save selenium-webdriver
```
