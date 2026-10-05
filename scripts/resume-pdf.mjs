// Renders /resume to public/Jalal_Haidar_Resume.pdf with headless Chromium.
// Usage: pnpm build && pnpm start --port 3100 (in another terminal), then `pnpm resume:pdf [baseUrl]`.
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? "http://localhost:3100";
const out = "public/Jalal_Haidar_Resume.pdf";

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.emulateMedia({ media: "print", colorScheme: "light" });
  await page.goto(`${base}/resume`, { waitUntil: "networkidle" });
  await page.pdf({ path: out, preferCSSPageSize: true, printBackground: false });
  console.log(`wrote ${out}`);
} finally {
  await browser.close();
}
