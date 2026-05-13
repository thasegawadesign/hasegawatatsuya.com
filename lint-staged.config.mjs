/** Paths oxfmt refuses to format (excluded internally); running oxfmt with only these errors. */
function oxfmtStagedFiles(filenames) {
  return filenames.filter(
    (f) =>
      !f.endsWith("pnpm-lock.yaml") && !f.endsWith("package-lock.json") && !f.endsWith("yarn.lock"),
  );
}

export default {
  "*.{js,jsx,ts,tsx,mjs,cjs}": ["oxlint --fix", "oxfmt --write"],
  "*.{json,md,yml,yaml}": (filenames) => {
    const files = oxfmtStagedFiles(filenames);
    return files.length > 0 ? `oxfmt --write ${files.map((f) => JSON.stringify(f)).join(" ")}` : [];
  },
  "*.{css,scss,sass}": ["stylelint --fix"],
};
