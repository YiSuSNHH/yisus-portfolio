#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const formatArgIndex = process.argv.findIndex((arg) => arg === "--format");
const requestedFormat =
  formatArgIndex > -1 && process.argv[formatArgIndex + 1]
    ? process.argv[formatArgIndex + 1]
    : "both";

const files = {
  viRaw: path.join(rootDir, "resume", "vi-raw.md"),
  vi: path.join(rootDir, "resume", "vi.md"),
  en: path.join(rootDir, "resume", "en.md"),
  data: path.join(rootDir, "data", "portfolio.ts"),
};

/** @type {Array<{level: "mismatch" | "stale-source" | "missing-field" | "orphan-field", file: string, message: string, details?: string}>} */
const issues = [];

function addIssue(level, file, message, details) {
  issues.push({ level, file, message, details });
}

function readFileSafe(filePath) {
  if (!fs.existsSync(filePath)) {
    addIssue("missing-field", path.relative(rootDir, filePath), "Required file is missing");
    return "";
  }
  return fs.readFileSync(filePath, "utf8");
}

const viRawText = readFileSafe(files.viRaw);
const viText = readFileSafe(files.vi);
const enText = readFileSafe(files.en);
const dataText = readFileSafe(files.data);

function checkRequiredTokens() {
  const requiredTokens = [
    {
      token: "Event-Driven Architecture",
      locations: ["resume/vi-raw.md", "resume/vi.md", "resume/en.md", "data/portfolio.ts"],
    },
    {
      token: "11/2022",
      locations: ["resume/vi-raw.md", "resume/vi.md", "resume/en.md", "data/portfolio.ts"],
    },
    {
      token: "Tech Lead",
      locations: ["resume/vi.md", "resume/en.md", "data/portfolio.ts"],
    },
    {
      token: "yisus.nhh.dev@gmail.com",
      locations: ["resume/vi.md", "resume/en.md", "data/portfolio.ts"],
    },
  ];

  const locationMap = {
    "resume/vi-raw.md": viRawText,
    "resume/vi.md": viText,
    "resume/en.md": enText,
    "data/portfolio.ts": dataText,
  };

  for (const item of requiredTokens) {
    for (const location of item.locations) {
      if (!locationMap[location].includes(item.token)) {
        addIssue(
          "missing-field",
          location,
          `Missing required token: ${item.token}`,
          "Token is part of canonical content invariants."
        );
      }
    }
  }
}

function normalizeText(text) {
  return text.replace(/\r\n/g, "\n").trim();
}

function extractViBaselineFromRaw(rawText) {
  const startMarker = "## Bản clean hiện tại (baseline) — copy từ `resume/vi.md`";
  const endMarker = "## Ghi chú thô / TODO (internal)";

  const startIndex = rawText.indexOf(startMarker);
  const endIndex = rawText.indexOf(endMarker);

  if (startIndex < 0 || endIndex < 0 || endIndex <= startIndex) {
    return "";
  }

  const section = rawText.slice(startIndex + startMarker.length, endIndex);
  return normalizeText(section);
}

function checkFreshness() {
  if (!viRawText || !viText) {
    return;
  }

  const rawBaseline = extractViBaselineFromRaw(viRawText);
  if (!rawBaseline) {
    addIssue(
      "stale-source",
      "resume/vi-raw.md",
      "Cannot find embedded VI baseline section in vi-raw",
      "Expected baseline block used for deterministic freshness checks."
    );
    return;
  }

  if (normalizeText(viText) !== rawBaseline) {
    addIssue(
      "stale-source",
      "resume/vi.md",
      "Vietnamese clean resume differs from embedded baseline in vi-raw",
      "Sync vi-raw baseline section and resume/vi.md to the same content."
    );
  }
}

function getFirstMatch(text, regex) {
  const match = text.match(regex);
  return match ? match[1].trim() : "";
}

function checkMismatches() {
  const enName = getFirstMatch(enText, /^#\s+(.+)$/m);
  const enTitle = getFirstMatch(enText, /^\*\*(.+)\*\*$/m);

  const dataName = getFirstMatch(
    dataText,
    /portfolioContent:[\s\S]*?en:\s*\{[\s\S]*?personal:\s*\{[\s\S]*?name:\s*"([^"]+)"/
  );
  const dataTitle = getFirstMatch(
    dataText,
    /portfolioContent:[\s\S]*?en:\s*\{[\s\S]*?personal:\s*\{[\s\S]*?title:\s*"([^"]+)"/
  );

  if (enName && dataName && enName !== dataName) {
    addIssue(
      "mismatch",
      "resume/en.md",
      "Name mismatch between English resume and data layer",
      `resume/en.md=${enName} | data/portfolio.ts=${dataName}`
    );
  }

  if (enTitle && dataTitle && enTitle !== dataTitle) {
    addIssue(
      "mismatch",
      "resume/en.md",
      "Primary title mismatch between English resume and data layer",
      `resume/en.md=${enTitle} | data/portfolio.ts=${dataTitle}`
    );
  }
}

function checkOrphanFields() {
  const canonicalProjects = [
    "SLC (Student Life Cycle)",
    "SRM System (Student Management)",
    "Moodle Integration",
    "Financial Management Platform",
  ];

  for (const project of canonicalProjects) {
    const inData = dataText.includes(project);
    const inEn = enText.includes(project);
    const inVi = viText.includes(project);

    if (inData && (!inEn || !inVi)) {
      addIssue(
        "orphan-field",
        "data/portfolio.ts",
        `Project appears in data layer but not in all clean resumes: ${project}`,
        `presentInEn=${inEn} presentInVi=${inVi}`
      );
    }

    if (!inData && (inEn || inVi)) {
      addIssue(
        "orphan-field",
        "resume/en.md",
        `Project appears in resume markdown but not in data layer: ${project}`,
        `presentInEn=${inEn} presentInVi=${inVi}`
      );
    }
  }
}

function makeSummary() {
  const byLevel = {
    mismatch: 0,
    "stale-source": 0,
    "missing-field": 0,
    "orphan-field": 0,
  };

  for (const issue of issues) {
    byLevel[issue.level] += 1;
  }

  const blockingIssueCount = byLevel.mismatch + byLevel["missing-field"] + byLevel["orphan-field"];

  return {
    ok: blockingIssueCount === 0,
    issueCount: issues.length,
    blockingIssueCount,
    byLevel,
    checkedFiles: [
      "resume/vi-raw.md",
      "resume/vi.md",
      "resume/en.md",
      "data/portfolio.ts",
    ],
  };
}

function printHuman(summary) {
  console.log("Content Sync Check");
  console.log("==================");
  console.log(`Result: ${summary.ok ? "OK" : "ISSUES FOUND"}`);
  console.log(`Total issues: ${summary.issueCount}`);
  console.log(`Blocking issues: ${summary.blockingIssueCount}`);
  console.log(
    `By level: mismatch=${summary.byLevel.mismatch}, stale-source=${summary.byLevel["stale-source"]}, missing-field=${summary.byLevel["missing-field"]}, orphan-field=${summary.byLevel["orphan-field"]}`
  );

  if (issues.length === 0) {
    return;
  }

  console.log("\nDetails:");
  for (const issue of issues) {
    console.log(`- [${issue.level}] ${issue.file}: ${issue.message}`);
    if (issue.details) {
      console.log(`  -> ${issue.details}`);
    }
  }
}

checkRequiredTokens();
checkFreshness();
checkMismatches();
checkOrphanFields();

const summary = makeSummary();
const machine = {
  summary,
  issues,
  generatedAt: new Date().toISOString(),
};

if (requestedFormat === "human") {
  printHuman(summary);
} else if (requestedFormat === "json") {
  console.log(JSON.stringify(machine, null, 2));
} else {
  printHuman(summary);
  console.log("\nJSON:");
  console.log(JSON.stringify(machine, null, 2));
}

process.exit(summary.ok ? 0 : 1);
