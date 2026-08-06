/**
 * GLSL / WGSL 向けの保守的な minify（ビルドローダーと実行時の共通実装）。
 * コメント削除と、識別子同士以外の空白削除のみ。括弧は落とさない。
 * @param {string} source
 * @returns {string}
 */
function minifyShaderSource(source) {
  return collapseWhitespace(stripShaderComments(source));
}

/**
 * @param {string} source
 * @returns {string}
 */
function stripShaderComments(source) {
  let out = "";
  for (let i = 0; i < source.length; ) {
    const a = source[i];
    const b = source[i + 1];

    if (a === "/" && b === "/") {
      i += 2;
      while (i < source.length && source[i] !== "\n") i += 1;
      continue;
    }

    if (a === "/" && b === "*") {
      i += 2;
      while (i < source.length && !(source[i] === "*" && source[i + 1] === "/")) {
        i += 1;
      }
      i += 2;
      continue;
    }

    out += a;
    i += 1;
  }
  return out;
}

/**
 * @param {string | undefined} ch
 * @returns {boolean}
 */
function isIdentChar(ch) {
  if (!ch) return false;
  return /[A-Za-z0-9_]/.test(ch);
}

/**
 * @param {string} line
 * @returns {string}
 */
function collapseLine(line) {
  const spaced = line.replace(/[ \t]+/g, " ");
  let out = "";
  for (let i = 0; i < spaced.length; i++) {
    const ch = spaced[i];
    if (ch !== " ") {
      out += ch;
      continue;
    }
    const prev = out[out.length - 1];
    const next = spaced[i + 1];
    if (isIdentChar(prev) && isIdentChar(next)) {
      out += " ";
    }
  }
  return out;
}

/**
 * 行を結合して 1 本に近づける。`#` プリプロセッサ行の直後だけ改行を残す。
 * @param {string} source
 * @returns {string}
 */
function collapseWhitespace(source) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  let out = "";

  for (const raw of lines) {
    const trimmed = raw.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("#")) {
      if (out && !out.endsWith("\n")) out += "\n";
      out += trimmed + "\n";
      continue;
    }

    const collapsed = collapseLine(trimmed);
    if (out && !out.endsWith("\n")) {
      const prev = out[out.length - 1];
      const next = collapsed[0];
      if (isIdentChar(prev) && isIdentChar(next)) {
        out += " ";
      }
    }
    out += collapsed;
  }

  return out.trim();
}

module.exports = { minifyShaderSource };
