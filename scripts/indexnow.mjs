// Tell IndexNow search engines (Bing, Yandex, Seznam, Naver…; Bing's index also
// feeds ChatGPT search and Copilot) that academix.tn's pages changed. Run after a
// deploy:  npm run indexnow
//
// It reads the URLs from the LIVE sitemap, so run it only once the new build is
// serving. The key is public by design: IndexNow checks that
// https://academix.tn/<key>.txt contains it (public/<key>.txt).

const SITE = 'https://academix.tn';
const KEY = '5bada75707fd0c3e7a8ed825461f76a4';

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('no URLs found in the live sitemap');

const keyCheck = await fetch(`${SITE}/${KEY}.txt`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) throw new Error(`${SITE}/${KEY}.txt is not serving the key; deploy first`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'academix.tn', key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs submitted, HTTP ${res.status}`);
if (res.status >= 400) process.exit(1);
