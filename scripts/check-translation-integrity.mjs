#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();

const localeFiles = {
  en: path.join(rootDir, "messages", "en.json"),
  vi: path.join(rootDir, "messages", "vi.json"),
};

/** @type {Array<{level: "missing-field" | "orphan-field" | "mismatch", file: string, message: string, details?: string}>} */
const issues = [];

function addIssue(level, file, message, details) {
  issues.push({ level, file, message, details });
}

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    addIssue("missing-field", path.relative(rootDir, filePath), "Locale file missing");
    return {};
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    addIssue(
      "mismatch",
      path.relative(rootDir, filePath),
      "Invalid JSON format",
      error instanceof Error ? error.message : String(error)
    );
    return {};
  }
}

function flattenKeys(value, prefix = "") {
  const entries = [];

  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const [key, child] of Object.entries(value)) {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      entries.push(...flattenKeys(child, nextPrefix));
    }
    return entries;
  }

  entries.push(prefix);
  return entries;
}

const enMessages = readJson(localeFiles.en);
const viMessages = readJson(localeFiles.vi);

const enKeys = new Set(flattenKeys(enMessages));
const viKeys = new Set(flattenKeys(viMessages));

for (const key of enKeys) {
  if (!viKeys.has(key)) {
    addIssue(
      "missing-field",
      "messages/vi.json",
      `Missing translation key: ${key}`,
      "Key exists in messages/en.json"
    );
  }
}

for (const key of viKeys) {
  if (!enKeys.has(key)) {
    addIssue(
      "orphan-field",
      "messages/vi.json",
      `Orphan translation key: ${key}`,
      "Key does not exist in messages/en.json"
    );
  }
}

const summary = {
  ok: issues.length === 0,
  issueCount: issues.length,
  byLevel: {
    "missing-field": issues.filter((i) => i.level === "missing-field").length,
    "orphan-field": issues.filter((i) => i.level === "orphan-field").length,
    mismatch: issues.filter((i) => i.level === "mismatch").length,
  },
  localeFiles: ["messages/en.json", "messages/vi.json"],
};

console.log("Translation Integrity Check");
console.log("===========================");
console.log(`Result: ${summary.ok ? "OK" : "ISSUES FOUND"}`);
console.log(`Total issues: ${summary.issueCount}`);

if (issues.length > 0) {
  console.log("\nDetails:");
  for (const issue of issues) {
    console.log(`- [${issue.level}] ${issue.file}: ${issue.message}`);
    if (issue.details) {
      console.log(`  -> ${issue.details}`);
    }
  }
}

console.log("\nJSON:");
console.log(
  JSON.stringify(
    {
      summary,
      issues,
      generatedAt: new Date().toISOString(),
    },
    null,
    2
  )
);

process.exit(summary.ok ? 0 : 1);
