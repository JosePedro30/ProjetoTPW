import { Builder, By, until } from 'selenium-webdriver';

describe('E2E Tests with Selenium', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  });

  test('should load the homepage and check the h1 text', async () => {
    await driver.get('http://localhost:3000');
    console.log('Navigated to http://localhost:3000');
    
    // Espera até que o elemento h1 esteja presente e visível
    const h1 = await driver.wait(until.elementLocated(By.tagName('h1')), 20000);
    const h1Text = await h1.getText();
    console.log('H1 text:', h1Text);
    
    expect(h1Text).toBe('EscapeJS');
  }, 30000);
});
