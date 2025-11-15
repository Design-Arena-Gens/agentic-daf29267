import puppeteer from 'puppeteer';

const url = 'https://www.ideabrowser.com/databaseme';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text.slice(0, 2000));
  await browser.close();
})();
