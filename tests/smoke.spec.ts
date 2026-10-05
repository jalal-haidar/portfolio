import { expect, test, type Page } from "@playwright/test";
import { projects } from "../src/content/projects";

const staticRoutes = ["/", "/projects", "/resume"];
const projectRoutes = projects.map((p) => `/projects/${p.slug}`);
const allRoutes = [...staticRoutes, ...projectRoutes];

/**
 * Collects page errors, console errors and failed same-origin responses.
 * Vercel analytics scripts (/_vercel/*) only exist on Vercel, so they are excluded; failed
 * resource loads are reported by the response listener, which knows the URL.
 */
function watchForErrors(page: Page) {
  const problems: string[] = [];
  page.on("pageerror", (err) => problems.push(`pageerror: ${err.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error" && !msg.text().startsWith("Failed to load resource")) {
      problems.push(`console.error: ${msg.text()}`);
    }
  });
  page.on("response", (res) => {
    const url = new URL(res.url());
    if (
      url.hostname === "localhost" &&
      res.status() >= 400 &&
      !url.pathname.startsWith("/_vercel")
    ) {
      problems.push(`${res.status()} ${url.pathname}`);
    }
  });
  return problems;
}

test.describe("routes", () => {
  for (const route of allRoutes) {
    test(`${route} renders without errors`, async ({ page }) => {
      const problems = watchForErrors(page);
      const res = await page.goto(route);
      expect(res?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await page.waitForLoadState("networkidle");
      expect(problems).toEqual([]);
    });
  }

  test("unknown route returns 404", async ({ page }) => {
    const res = await page.goto("/does-not-exist");
    expect(res?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
  });

  test("sitemap and robots are served", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    const body = await sitemap.text();
    for (const route of projectRoutes) expect(body).toContain(route);
    expect((await request.get("/robots.txt")).status()).toBe(200);
  });

  test("open graph image is generated", async ({ request }) => {
    const res = await request.get("/opengraph-image");
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("image/png");
  });
});

test.describe("links", () => {
  for (const start of ["/", "/projects", "/resume"]) {
    test(`internal links on ${start} resolve`, async ({ page, request }) => {
      await page.goto(start);
      const hrefs = await page.$$eval("a[href]", (as) =>
        as.map((a) => a.getAttribute("href") ?? "").filter((h) => h.startsWith("/")),
      );
      const unique = [...new Set(hrefs.map((h) => h.split("#")[0] || "/"))];
      expect(unique.length).toBeGreaterThan(0);
      for (const href of unique) {
        const res = await request.get(href);
        expect(res.status(), `link ${href}`).toBe(200);
      }
    });
  }
});

test.describe("behaviour", () => {
  test("theme toggle switches the dark class", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    const html = page.locator("html");
    await expect(html).not.toHaveClass(/dark/);
    await page.getByRole("button", { name: /switch to dark theme/i }).click();
    await expect(html).toHaveClass(/dark/);
    await page.getByRole("button", { name: /switch to light theme/i }).click();
    await expect(html).not.toHaveClass(/dark/);
  });

  test("home shows the positioning line and featured projects", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Jalal Haidar");
    await expect(
      page.getByText(
        "Full-stack TypeScript engineer who ships AI-powered products end to end.",
      ),
    ).toBeVisible();
    const featured = projects.filter((p) => p.featured);
    for (const p of featured) {
      await expect(
        page.getByRole("link", { name: p.title, exact: true }).first(),
      ).toBeVisible();
    }
  });

  test("private projects do not link to a repository", async ({ page }) => {
    for (const p of projects.filter((x) => x.source === "private")) {
      await page.goto(`/projects/${p.slug}`);
      await expect(page.getByRole("link", { name: /source on github/i })).toHaveCount(0);
      await expect(page.getByText(/available on request/i)).toBeVisible();
    }
  });

  test("no page overflows horizontally", async ({ page }) => {
    for (const route of allRoutes) {
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `horizontal overflow on ${route}`).toBeLessThanOrEqual(0);
    }
  });
});
