const { minifyShaderSource } = require("./minifyShaderSource.cjs");

/**
 * 本番ビルド時に `minifyShader(\`...\`)` を minify 済み文字列リテラルへ置換する。
 * クライアントチャンクに生テンプレートが残らないようにする。
 * @param {string} source
 * @returns {string}
 */
module.exports = function minifyShaderLoader(source) {
  const replaced = source.replace(/minifyShader\(\s*`([\s\S]*?)`\s*\)/g, (_match, body) =>
    JSON.stringify(minifyShaderSource(body)),
  );

  if (replaced === source) return source;

  return replaced.replace(/^import\s*\{\s*minifyShader\s*\}\s*from\s*["'][^"']+["'];\r?\n/m, "");
};
