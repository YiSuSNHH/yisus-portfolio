#!/usr/bin/env node

import { execSync } from "node:child_process";

try {
  execSync("git config core.hooksPath .githooks", { stdio: "inherit" });
  console.log("Configured git hooks path to .githooks");
} catch (error) {
  console.warn("Could not configure git hooks path automatically.");
  console.warn("Run this manually: git config core.hooksPath .githooks");
  if (error instanceof Error) {
    console.warn(error.message);
  }
}
