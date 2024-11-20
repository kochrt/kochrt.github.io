const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///Users/robkoch/kochrt.github.io/resume.html', {
    waitUntil: 'networkidle2'
  });
  // await page.emulateMedia('screen');
  await page.setViewport({
    width: 1920,
    height: 1260
  });
  // let height = await page.evaluate(() => document.documentElement.offsetHeight);
  await page.pdf({
    path: 'resume.pdf',
    width: 900,
    height: 1500,
    printBackground: true
  });

  await browser.close();
})();