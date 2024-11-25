let browser: Browser; // Represents the browser instance (ex: chrome, firefox)
let context: BrowserContext; // Represents a browser context (a separate browsing session)
let page: Page; // Represents a single web page within a context

"precucumber": "rimraf reports allure-results allure-report && mkdir reports",
"allure:generate": "allure generate ./allure-results -o ./allure-report --clean",
"allure:serve": "allure open ./allure-report"

--format allure-cucumberjs/reporter \
