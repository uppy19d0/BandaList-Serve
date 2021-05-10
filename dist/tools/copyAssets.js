"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
// Copy all the view templates and assets in the public folder
shell.cp("-R", ["src/public", "src/favicon.ico"], "dist/");
// // Remove unnecessary files
// shell.rm(["dist/public/js/*.ts", "dist/public/js/*.json"]);
//# sourceMappingURL=copyAssets.js.map