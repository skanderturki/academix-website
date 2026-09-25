// Screenshots of the Academix platform for the site's product tour
// (public/screens/*.webp). Run against a LOCAL copy of abet_quality seeded with
// the fictional demo program, never a customer tenant:
//
//   1. A throwaway MongoDB replica set, e.g.
//        docker run -d --name academix-demo-mongo -p 127.0.0.1:27037:27017 mongo:7 --replSet rs0 --bind_ip_all
//        (then rs.initiate() once)
//   2. In abet_quality/server, with MONGODB_URI pointing at it and
//      INSTITUTION_NAME='AllTech University': create an admin, a college,
//      department and EAC curriculum, then `node scripts/seedDemoData.js`
//      (run from server/, so it finds the repo's .env and encryption key).
//   3. Start the API (PORT=5000) and the client (`npx vite --port 3000`).
//   4. npm i --no-save puppeteer-core
//      DEMO_EMAIL=… DEMO_PASSWORD=… node scripts/capture-product-screens.js
//   5. Convert the PNGs in ./screens-out to WebP (quality 80) into public/screens.
//
// Uses the installed Chrome, 1440x900, reduced motion; picks the demo
// curriculum on pages that ask for one.
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const BASE = process.env.DEMO_URL || 'http://127.0.0.1:3000';
const OUT = path.join(__dirname, '..', 'screens-out');
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const SHOTS = [['readiness', '/admin/readiness'], ['so-summary', '/admin/so-summary'], ['self-study', '/admin/self-study']];

(async () => {
  if (!/^http:\/\/(127\.0\.0\.1|localhost)[:/]/.test(BASE)) throw new Error('Refusing: only a local demo copy');
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', defaultViewport: { width: 1440, height: 900 } });
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto(`${BASE}/login`, { waitUntil: 'networkidle0' });
  await page.type('#email', process.env.DEMO_EMAIL);
  await page.type('#password', process.env.DEMO_PASSWORD);
  await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle0' }).catch(() => {}), page.click('button[type=submit]')]);
  for (const [name, url] of SHOTS) {
    await page.goto(BASE + url, { waitUntil: 'networkidle0' });
    const picked = await page.evaluate(() => {
      const sel = [...document.querySelectorAll('select')].find((x) => /Select Curriculum/i.test(x.options[0]?.text || ''));
      if (!sel || sel.options.length < 2) return false;
      Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(sel, sel.options[1].value);
      sel.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    });
    if (picked) await page.waitForNetworkIdle({ idleTime: 800 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 1200));
    await page.screenshot({ path: path.join(OUT, `${name}.png`) });
    console.log(name);
  }
  await browser.close();
})().catch((e) => { console.error(e.message); process.exit(1); });
