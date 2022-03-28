const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://tynker.com/');
  await page.screenshot({ path: 'tynkerhome.png' });

  await browser.close();
})();