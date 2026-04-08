import { defineConfig, devices } from "@playwright/test";

const testPort = process.env.PLAYWRIGHT_PORT || "3001";
const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const baseURL = externalBaseURL || `http://127.0.0.1:${testPort}`;

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["html"], ["github"]] : [["list"], ["html"]],
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: externalBaseURL
    ? undefined
    : {
        command: `node -e "require('fs').rmSync('.next',{recursive:true,force:true})" && NEXT_DISABLE_TURBOPACK=1 yarn dev --hostname 127.0.0.1 --port ${testPort}`,
        url: baseURL,
        reuseExistingServer: false,
        timeout: 180_000,
      },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
