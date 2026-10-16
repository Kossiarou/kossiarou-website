import { defineConfig, devices } from "@playwright/test";

// The tests run against a production build served on its own port, so they never
// interfere with `npm run dev` on port 3000.
const PORT = Number(process.env.E2E_PORT ?? 3100);

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    locale: "fr-FR",
    // PW_CHANNEL=chrome uses the Chrome installed on the machine instead of Playwright's Chromium
    // (which is installed with `npx playwright install chromium`).
    channel: process.env.PW_CHANNEL || undefined,
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: `npm run build && npm run start -- --port ${PORT}`,
    url: `http://localhost:${PORT}/fr`,
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
  },
});
