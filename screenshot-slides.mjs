import { chromium } from '@playwright/test';
import { existsSync, mkdirSync } from 'fs';

const TOTAL_SLIDES = 22;
const OUT_DIR = './screenshots';

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500); // wait for fonts to load

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    await page.screenshot({
      path: `${OUT_DIR}/slide_${String(i + 1).padStart(2, '0')}.png`,
      fullPage: false,
    });
    console.log(`Captured slide ${i + 1}/${TOTAL_SLIDES}`);

    if (i < TOTAL_SLIDES - 1) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(400);
    }
  }

  await browser.close();
  console.log(`Done! Screenshots saved to ${OUT_DIR}/`);
})();
