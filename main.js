#!/usr/bin/env node

import {
  readdirSync as rcd,
  readFileSync as rf,
  writeFileSync as wf,
  mkdirSync as mkdir,
  existsSync,
} from "node:fs";

import path from "node:path";

import { componentTemplate, cssTemplate, indexTemplate } from "./templates.js";
//--------------------------------------------------
const folderContents = rcd("./");
const searchParam = "package.json";
const rootFolder = path.join(process.cwd(), "src", "components");
const components = process.argv.slice(2);

if (!folderContents.includes(searchParam)) {
  console.warn("Are you sure you are in the base folder of a react project?");
  console.warn("exiting");
} else {
  const manifest = JSON.parse(rf(searchParam, "utf8"));
  const deps = { ...manifest.dependencies, ...manifest.devDependencies };

  if (!deps.react) {
    console.warn("This doesn't look like a react project (react not in package.json)");
    console.warn("exiting");
  } else {
    for (const component of components) {
      const folder = path.join(rootFolder, component);
      if (existsSync(folder)) {
        console.warn(`src/components/${component} already exists, skipping`);
        continue;
      } else {
        mkdir(folder, { recursive: true });
        wf(path.join(folder, `${component}.jsx`), componentTemplate(component));
        wf(path.join(folder, `${component}.module.css`), cssTemplate());
        wf(path.join(folder, `index.js`), indexTemplate(component));
      }
    }
  }
}